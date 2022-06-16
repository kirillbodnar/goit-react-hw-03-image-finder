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
