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
    <div className="mb-2 flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">{children}</h1>
        {onClick && buttonContent && (
          <button type="button" onClick={onClick} className={buttonClass}>
            {buttonContent}
          </button>
        )}
      </div>
      <hr />
    </div>
  );
}
