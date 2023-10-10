export default function Header() {
  return (
    <div className="flex flex-col gap-3 items-center justify-center text-center">
      <img src="favicon.svg" alt="icon" width={40} />
      <h1 className="text-3xl font-bold text-slate-900">
        Welcome to <span className="text-violet-600">IR Generator</span>
      </h1>
      <p className="text-slate-400">
        Simple yet efficient way to generate your 11 point incident reports.
      </p>
    </div>
  );
}
