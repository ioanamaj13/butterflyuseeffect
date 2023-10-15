import "./slide.css";

const Slide = ({ children }) => {
  return (
    <div className="slide-container">
      <p>Slide</p>
      <div>{children}</div>
    </div>
  );
};

export default Slide;
