const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}
      className="inline-block text-white bg-gradient text-xl rounded-full px-6 py-2 text-center duration-300 btn-cv hover:-translate-y-0.5"
    >
      {text}
    </button>
  );
};

export const ButtonA = ({ text, href, icon }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2.5 text-white bg-gradient text-xl rounded-full px-6 py-2 text-center duration-300 btn-cv hover:-translate-y-0.5 "
    >
      {text}
      <span>{icon}</span>
    </a>
  );
};

export default Button;
