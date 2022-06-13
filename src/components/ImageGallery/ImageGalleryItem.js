export default function ImageGalleryItem({ image }) {
  console.log(image);
  return (
    <li className="gallery-item" key={image.id}>
      <img src={image.webformatURL} alt="" />
    </li>
  );
}
