import { twMerge } from "tailwind-merge";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  buttonContent?: string;
  buttonClass?: string;
};
export default function FormHeading({
  children,
  onClick,
  buttonContent,
  buttonClass,
}: Props) {
  return (
    <div className={twMerge("flex flex-col gap-1", !onClick && "mb-2")}>
      <div className="flex items-center justify-between">
        <h1 className={twMerge("font-bold", !onClick && "text-lg")}>
          {children}
        </h1>
        {onClick && buttonContent && (
          <button type="button" onClick={onClick} className={buttonClass}>
            {buttonContent}
          </button>
        )}
      </div>
      {!onClick && <hr />}
    </div>
  );
}
