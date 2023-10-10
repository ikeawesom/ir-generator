import DetailsArea from "./components/DetailsArea";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";
import { useDetails } from "./contexts/DetailsContext";
import { Toaster, toast } from "sonner";

export default function App() {
  const { details } = useDetails();

  return (
    <div className="p-4 bg-slate-50">
      <Toaster richColors position="bottom-center" />
      <div className="flex flex-col gap-10 items-center justify-center p-4 pb-10">
        <Header />
        <FormContainer />
        {details.submit && (
          <DetailsArea onCopy={() => toast.success("Copied to clipboard!")} />
        )}
      </div>
      <p className="text-center text-slate-400">Created by Ike Lim.</p>
    </div>
  );
}
