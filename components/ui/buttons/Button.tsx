import { ButtonProps } from "@/types/ui";
import Link from "next/link";

const Button = ({
  variant = "primary",
  size = "sm",
  href,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "inline-flex justify-center items-center gap-2 font-bold rounded-xl transition-all duration-300 cursor-pointer border-2 select-none";

  const variants = {
    primary:
      "bg-[#d53336] border-[#d53336] text-white hover:bg-[#b01f22] hover:border-[#b01f22] shadow-[0_4px_14px_rgba(213,51,54,0.35)] hover:shadow-[0_6px_20px_rgba(213,51,54,0.45)]",
    secondary:
      "bg-transparent border-[#d53336] text-[#d53336] hover:bg-[#d53336] hover:text-white hover:shadow-[0_4px_14px_rgba(213,51,54,0.25)]",
    ghost:
      "bg-transparent border-transparent text-[#4a4a6a] hover:bg-[#fde8e8] hover:text-[#d53336]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const className = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    props.className || ""
  }`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {props.children}
      </Link>
    );
  }

  return <button className={className} {...props} />;
};

export default Button;
