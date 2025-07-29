import { twMerge } from "tailwind-merge";

const Button = ({ name, className, href, onClick, children, px }) => {
  const renderButton = () => (
    <button
      name={name}
      type='button'
      className={twMerge(
        "button relative inline-flex items-center justify-center h-11 transition-colors cursor-pointer text-[0.9rem] md:text-[1rem] hover:shadow-lg font-semibold px-7",
        className,
        px
      )}
      onClick={onClick}>
      <span className='relative z-10 text-[1rem]'>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a
      name={name}
      type='button'
      href={href}
      className={twMerge(
        "button relative inline-flex items-center justify-center h-11 transition-colors cursor-pointer text-[0.9rem] md:text-[1rem] hover:shadow-lg font-semibold px-7",
        className,
        px
      )}>
      <span className='relative z-10 text-[1rem]'>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
