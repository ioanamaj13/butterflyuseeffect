import "./codeView.css";

const RenderBox = ({ children }) => {
  return (
    <div>
      <div className="render-content">{children}</div>
    </div>
  );
};

export default RenderBox;
