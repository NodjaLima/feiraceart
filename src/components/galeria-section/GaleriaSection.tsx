import "./GaleriaSection.css";

interface GaleriaImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

const GaleriaSection = () => {
  const galleryImages: GaleriaImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      alt: "Feira de artesanato",
      caption: "Feira de Artesanato"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=250&fit=crop",
      alt: "Artesão trabalhando",
      caption: "Artesão Trabalhando"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      alt: "Apresentação musical",
      caption: "Música ao Vivo"
    }
  ];

  return (
    <section className="galeria-section">
      <div className="galeria-container">
        <h2 className="galeria-title">GALERIA</h2>
        
        <div className="galeria-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="galeria-card">
              <div className="galeria-image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="galeria-image"
                />
                <div className="galeria-overlay">
                  <span className="galeria-caption">{image.caption}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="galeria-view-all">
          <button className="galeria-view-all-btn">Veja todas as imagens da nossa última feira</button>
        </div>
      </div>
    </section>
  );
};

export default GaleriaSection;
