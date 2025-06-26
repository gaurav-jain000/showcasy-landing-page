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
      "text-neutral-50 bg-neutral-950 hover:bg-neutral-700 border-transparent",
    outline: "border-current hover:bg-neutral-100",
    secondary: "border-transparent bg-neutral-100 hover:bg-neutral-200",
  };
  return (
    <button
      className={`rounded-full py-[1em] whitespace-nowrap px-[1.8em] flex items-center justify-center cursor-pointer border-[2px] group duration-300 ${className} ${buttonStyles[variant]}`}
      {...props}
    >
      {children}
      {withIcon ? (
        <RightArrowIcon
          className={`ms-2 group-hover:ms-4 group-hover:-rotate-45 origin-top duration-300 size-[1.4em]!`}
        />
      ) : null}
    </button>
  );
}
