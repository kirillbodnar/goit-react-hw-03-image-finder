import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, onClick }) {
  const handleImageClick = () => {
    onClick(image);
  };

  return (
    <li className={s.ImageGalleryItem} onClick={handleImageClick}>
      <img src={image.webformatURL} alt={image.tags} className={s.Image} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
};
