import "./gallery.css";

export default function Gallery() {
  const galleryImages = [
    "./gallery1.jpg",
    "./gallery2.jpg",
    "./gallery3.jpg",
    "./gallery4.jpg",
    "./gallery5.jpg",
    "./gallery6.jpg",
    "./gallery7.jpg",
    "./gallery8.jpg",
    "./gallery9.jpg",
    "./gallery10.jpg",
    "./gallery11.jpg",
    "./gallery12.jpg",
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our 3D Model Gallery</h1>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div key={index} className="gallery-card">
            <img src={img} alt={`3D Model ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}