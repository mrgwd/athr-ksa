interface ButtonProps {
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  notRounded?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  disabled = false,
  notRounded = false,
  className,
  href,
  onClick,
  children,
}) => {
  const buttonClass = `btn btn-${variant} ${className} transition duration-300 ${
    notRounded ? "rounded-xl" : "rounded-full"
  } ${
    variant === "primary"
      ? "block bg-gradient-to-l from-main-color to-main-color/75 px-8 py-3 text-white  hover:from-slate-50 hover:to-slate-50 hover:text-main-color hover:outline hover:outline-2 hover:outline-main-color max-md:mx-auto sm:px-10 sm:py-3"
      : "underline"
  }`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClass}
    >
      {children}
    </button>
  );
};

export default Button;
