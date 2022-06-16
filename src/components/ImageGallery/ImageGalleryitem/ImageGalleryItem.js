import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, onClick }) {
  const handleImageClick = () => {
    onClick(image);
  };

  return (
    <li className={s.ImageGalleryItem} onClick={handleImageClick}>
      <img src={image.webformatURL} alt={image.tag} className={s.Image} />
    </li>
  );
}