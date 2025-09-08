import "./ExpositoresSection.css";

interface Expositor {
  id: number;
  nome: string;
  descricao: string;
  especialidade: string;
  foto: string;
  cidade?: string;
}

const ExpositoresSection = () => {
  const expositoresDestaque: Expositor[] = [
    {
      id: 1,
      nome: "Maria Silva",
      descricao: "Artesã especializada em cerâmica e peças decorativas únicas, com mais de 15 anos de experiência.",
      especialidade: "Cerâmica",
      foto: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=face",
      cidade: "São Paulo"
    },
    {
      id: 2,
      nome: "João Santos",
      descricao: "Marceneiro tradicional que cria móveis e objetos de madeira com técnicas ancestrais.",
      especialidade: "Marcenaria",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      cidade: "Minas Gerais"
    },
    {
      id: 3,
      nome: "Ana Costa",
      descricao: "Designer têxtil que trabalha com fibras naturais e técnicas de tingimento artesanal.",
      especialidade: "Têxtil",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      cidade: "Bahia"
    }
  ];

  return (
    <section className="expositores-section">
      <div className="expositores-container">
        <h2 className="expositores-title">EXPOSITORES</h2>
        <p className="expositores-subtitle">Conheça alguns dos talentosos artesãos que participam da nossa feira</p>
        
        <div className="expositores-grid">
          {expositoresDestaque.map((expositor) => (
            <div key={expositor.id} className="expositor-card">
              <div className="expositor-foto-container">
                <img
                  src={expositor.foto}
                  alt={expositor.nome}
                  className="expositor-foto"
                />
                <div className="expositor-especialidade-badge">
                  {expositor.especialidade}
                </div>
              </div>
              
              <div className="expositor-info">
                <h3 className="expositor-nome">{expositor.nome}</h3>
                {expositor.cidade && (
                  <p className="expositor-cidade">{expositor.cidade}</p>
                )}
                <p className="expositor-descricao">{expositor.descricao}</p>
                
                <button className="expositor-btn">VER PERFIL</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="expositores-view-all">
          <button className="expositores-view-all-btn">Conheça todos os nossos expositores</button>
        </div>
      </div>
    </section>
  );
};

export default ExpositoresSection;
