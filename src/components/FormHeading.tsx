type Props = {
  children?: React.ReactNode;
};
export default function FormHeading({ children }: Props) {
  return (
    <div className="mb-2 flex flex-col gap-1">
      <h1 className="font-bold text-lg">{children}</h1>
      <hr />
    </div>
  );
}
