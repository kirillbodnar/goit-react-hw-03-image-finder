import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ images }) {
  return (
    <>
      <ul>
        {images.map(image => {
          return <ImageGalleryItem image={image} />;
        })}
      </ul>
    </>
  );
}
