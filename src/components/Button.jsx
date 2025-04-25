const Button = ({ className, href, onClick, children, px }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors cursor-pointer text-[0.9rem] md:text-[1rem] hover:shadow-lg font-semibold ${
    px || "px-7"
  } ${className || ""}`;
  const spanClasses = "relative z-10 text-[1rem]";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
