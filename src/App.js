import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    gallery: [],
    page: 1,
    status: 'idle',
    currentImage: '',
    showModal: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const prevPage = prevState.page;
    const { query, page } = this.state;

    if (prevQuery !== query) {
      this.setState({ page: 1, status: 'pending', gallery: [] });

      fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=19102910-cffe66986be4c018bfebf7445&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(images => {
          this.setState(() => ({
            gallery: images.hits,
          }));
        })
        .finally(this.setState({ status: 'resolved' }));
    }

    if (prevPage !== page && prevQuery === query) {
      this.setState({ status: 'pending' });
      fetch(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=19102910-cffe66986be4c018bfebf7445&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(images => {
          this.setState(({ gallery }) => ({
            gallery: [...gallery, ...images.hits],
          }));
        })
        .finally(this.setState({ status: 'resolved' }));
    }
  }

  handleSubmit = query => {
    this.setState({ query });
    this.setState({ gallery: [] });
  };

  handleButtonClick = () => {
    this.setState(({ page }) => ({ page: this.state.page + 1 }));
  };

  handleImageClick = image => {
    this.toggleModal();
    this.setState({ currentImage: image });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { gallery, showModal, currentImage, status } = this.state;
    return (
      <>
        <div className={s.App}>
          <Searchbar onSubmit={this.handleSubmit} />
          {status === 'resolved' && (
            <ImageGallery images={gallery} onClick={this.handleImageClick} />
          )}

          {status === 'resolved' && <Button onClick={this.handleButtonClick} />}
          {showModal && (
            <Modal image={currentImage} toggleModal={this.toggleModal} />
          )}
          {status === 'pending' && <Loader />}
        </div>
        <ToastContainer />
      </>
    );
  }
}
