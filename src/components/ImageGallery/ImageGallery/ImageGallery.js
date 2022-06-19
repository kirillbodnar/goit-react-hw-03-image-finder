import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryitem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export default function ImageGallery({ images, onClick }) {
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(image => {
          return (
            <ImageGalleryItem image={image} key={image.id} onClick={onClick} />
          );
        })}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
