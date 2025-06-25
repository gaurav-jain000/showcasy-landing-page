import { RightArrowIcon } from "./icons";

export function ThemeButton({
  children,
  variant = "default",
  className,
  withIcon = true,
  ...props
}: React.ComponentProps<"button"> & {
  children?: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
  withIcon?: boolean;
}) {
  const buttonStyles: { [key: string]: string } = {
    default:
      "text-white bg-neutral-950 hover:bg-neutral-700 border-transparent",
    outline: "border-current text-neutral-950 hover:bg-neutral-100",
    secondary: "border-transparent bg-neutral-100 hover:bg-neutral-200",
  };
  return (
    <button
      className={`rounded-full py-[1.09em] whitespace-nowrap px-[1.8em] flex items-center justify-center cursor-pointer border group duration-300 ${className} ${buttonStyles[variant]}`}
      {...props}
    >
      {children}
      {withIcon ? (
        <RightArrowIcon
          className={`ms-2 group-hover:ms-4 group-hover:-rotate-45 origin-top duration-300`}
        />
      ) : null}
    </button>
  );
}
