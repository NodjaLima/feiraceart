import "./BlogSection.css";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogSection = () => {
  const recentPosts: BlogPost[] = [
    {
      id: 1,
      title: "Técnicas Ancestrais de Cerâmica Brasileira",
      excerpt: "Descubra como artesãos preservam tradições milenares na criação de peças únicas que contam a história do nosso país.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      date: "2025-09-01",
      category: "Artesanato",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "O Futuro do Empreendedorismo Cultural no Brasil",
      excerpt: "Como jovens empreendedores estão revolucionando o mercado cultural brasileiro através da inovação e tradição.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      date: "2025-09-05",
      category: "Empreendedorismo",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Sustentabilidade e Arte: Um Novo Paradigma",
      excerpt: "Conheça artistas que transformam materiais reciclados em obras de arte, promovendo consciência ambiental.",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      date: "2025-09-08",
      category: "Sustentabilidade",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Tradições Texteis do Interior Brasileiro",
      excerpt: "Explore as técnicas tradicionais de tecelagem que resistem ao tempo e mantêm viva a cultura popular.",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=250&fit=crop",
      date: "2025-09-06",
      category: "Cultura",
      readTime: "4 min"
    }
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <h2 className="blog-title">NOTÍCIAS & ARTIGOS</h2>
          <p className="blog-subtitle">Fique por dentro das últimas novidades do mundo do artesanato e empreendedorismo cultural</p>
        </div>
        
        <div className="blog-posts">
          {recentPosts.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-card-category">{post.category}</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-meta">
                  <span className="blog-card-date">{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                  <span className="blog-card-read-time">{post.readTime} de leitura</span>
                </div>
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <button className="blog-card-btn">LEIA MAIS</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-view-all">
          <button className="blog-view-all-btn">VER TODAS AS POSTAGENS</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
