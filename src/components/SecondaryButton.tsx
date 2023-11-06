import { twMerge } from "tailwind-merge";

type ButtonType = {
  type?: "reset" | "submit" | "button";
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

export default function SecondaryButton({
  type,
  onClick,
  children,
  className,
  disabled,
}: ButtonType) {
  return (
    <button
      disabled={disabled}
      className={twMerge(
        "flex flex-row items-center justify-between gap-2 px-4 py-2 rounded-md shadow-sm bg-white  duration-200 border-[1px] cursor-pointer hover:brightness-95",
        className
      )}
      type={type ? type : "button"}
      onClick={() => {
        onClick ? onClick() : {};
      }}
    >
      {children ? children : "Click Me"}
    </button>
  );
}
