interface ButtonProps {
  variant?: "primary" | "secondary" | "withIcon";
  type?: "button" | "submit" | "reset";
  notRounded?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  type = "button",
  disabled = false,
  notRounded = false,
  text,
  className,
  href,
  onClick,
  children,
}) => {
  const buttonClass = `btn btn-${variant} ${className} transition duration-300 ${
    notRounded ? "rounded-xl" : "rounded-full"
  } ${
    variant === "primary"
      ? "block bg-gradient-to-l from-main-color to-main-color/75 px-8 text-white hover:from-slate-50 hover:to-slate-50 hover:text-main-color hover:outline hover:outline-2 hover:outline-main-color sm:px-10 py-3"
      : ""
  } ${
    disabled
      ? "cursor-not-allowed bg-slate-300 text-slate-600"
      : "hover:bg-main-color"
  } ${
    variant === "withIcon"
      ? "flex gap-4 px-4 py-2 bg-gradient-to-l from-main-color to-main-color/75"
      : ""
  }`;

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {text}
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
      {text}
      {children}
    </button>
  );
};

export default Button;
