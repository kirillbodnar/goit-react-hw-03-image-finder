import PropTypes from 'prop-types';
import { Component } from 'react';
import s from './Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
      console.log(e.code);
    }
  };

  handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };
  render() {
    const { image } = this.props;

    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>
          <img src={image.largeImageURL} alt={image.tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
