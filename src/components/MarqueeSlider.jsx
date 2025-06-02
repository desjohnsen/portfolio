import "../styles/MarqueeSlider.css";

const items = [
  { src: "https://img.icons8.com/?size=100&id=GflC6KLkdd0Y&format=png&color=1A1A1A", label: "Figma" },
  { src: "https://img.icons8.com/?size=100&id=62856&format=png&color=1A1A1A", label: "GitHub" },
  { src: "https://img.icons8.com/?size=100&id=121601&format=png&color=1A1A1A", label: "VS Code" },
  { src: "https://img.icons8.com/?size=100&id=047WZAFDnkVp&format=png&color=1A1A1A", label: "React" },
  { src: "https://img.icons8.com/?size=100&id=39853&format=png&color=1A1A1A", label: "JavaScript" },
  { src: "https://img.icons8.com/?size=100&id=101353&format=png&color=1A1A1A", label: "HTML5" },
  { src: "https://img.icons8.com/?size=100&id=38273&format=png&color=1A1A1A", label: "CSS3" },
];

const Marquee = () => {
  return (
    <div className="marquee-wrapper">
      <div className="marquee-container">
        <div className="marquee">
          {[...items, ...items].map((item, i) => (
            <div className="marquee-item" key={i}>
              <img src={item.src} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="fade-left"></div>
        <div className="fade-right"></div>
      </div>
    </div>
  );
};

export default Marquee;
