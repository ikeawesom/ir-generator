import DetailsArea from "./components/DetailsArea";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";
import { SecondaryButton } from "./components/Buttons";
import { useDetails } from "./contexts/DetailsContext";
import { Toaster, toast } from "sonner";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useTekongDetails } from "./contexts/TekongContext";

const OPTIONS = ["tekong", "keat-hong-camp"];

export default function App() {
  const { details } = useDetails();
  const { tekongDetails } = useTekongDetails();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const option = searchParams.get("option");
    if (!option || !OPTIONS.includes(option))
      setSearchParams({ option: "tekong" });
  }, [searchParams, setSearchParams]);

  const paramTekong = () => {
    setSearchParams({ option: "tekong" });
  };

  const paramKhc = () => {
    setSearchParams({ option: "keat-hong-camp" });
  };

  const option = searchParams.get("option") as string;
  const submitted =
    option === "tekong"
      ? tekongDetails.submit
      : option === "keat-hong-camp"
      ? details.submit
      : false;

  return (
    <div className="p-4 bg-slate-50">
      <Toaster richColors position="bottom-center" />
      <div className="flex flex-col gap-10 items-center justify-center p-4 pb-10">
        <Header />
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="sm:w-[580px] w-[85vw] flex flex-col items-center justify-center gap-2">
            <p className="text-center text-slate-400">
              Please choose your current unit.
            </p>
            <div className="flex w-full items-center justify-center gap-4 ">
              <SecondaryButton
                disabled={option === "tekong"}
                className={
                  option === "tekong"
                    ? "cursor-default bg-violet-600 text-slate-50"
                    : ""
                }
                onClick={paramTekong}
              >
                BMTC
              </SecondaryButton>
              <SecondaryButton
                disabled={option === "keat-hong-camp"}
                className={
                  option === "keat-hong-camp"
                    ? "cursor-default bg-violet-600 text-slate-50"
                    : ""
                }
                onClick={paramKhc}
              >
                40 SAR
              </SecondaryButton>
            </div>
          </div>
          <FormContainer option={option} />
        </div>
        {submitted && (
          <DetailsArea
            option={option}
            onCopy={() => toast.success("Copied to clipboard!")}
          />
        )}
      </div>
      <p className="text-center text-slate-400">Created by Ike Lim.</p>
    </div>
  );
}
