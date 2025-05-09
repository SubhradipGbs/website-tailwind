import { twMerge } from "tailwind-merge";

const Section = ({ className, id, customPaddings, children }) => {
  return (
    <section
      id={id}
      className={twMerge(
        "relative pt-10 pb-10 lg:pt-16 lg:pb-16 xl:pt-20 xl:pb-20 dark:bg-gray-900",
        className,
        customPaddings
      )}
    >
      {children}
    </section>
  );
};

export default Section;
