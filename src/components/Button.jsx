const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-lg font-medium ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;