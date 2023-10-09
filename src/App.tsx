import FormContainer from "./components/FormContainer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="p-4 bg-slate-50">
      <div className="flex flex-col gap-10 items-center justify-center p-10">
        <Header />
        <FormContainer />
      </div>
      <p className="text-center text-slate-400">Created by Ike Lim.</p>
    </div>
  );
}
