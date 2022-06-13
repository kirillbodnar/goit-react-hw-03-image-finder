import { Component } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    queryResult: '',
  };
  componentDidUpdate(prevProps, prevState) {
    const { prevQuery } = prevState;
    const { query } = this.state;
    if (prevQuery !== query) {
      fetch(
        `https://pixabay.com/api/?q=${query}&page=1&key=19102910-cffe66986be4c018bfebf7445&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(res => res.json())
        .then(images => {
          this.setState({ queryResult: images.hits });
        });
    }
  }

  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.queryResult && (
          <ImageGallery images={this.state.queryResult} />
        )}
      </>
    );
  }
}
