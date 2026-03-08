const Button = ({ children, onClick }) => {
  return (
    <button className="btn btn-block" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;