import DetailsArea from "./components/DetailsArea";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";
import { SecondaryButton } from "./components/Buttons";
import { useDetails } from "./contexts/DetailsContext";
import { Toaster, toast } from "sonner";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTekongDetails } from "./contexts/TekongContext";

const OPTIONS = ["tekong", "keat-hong-camp"];

export default function App() {
  const [curState, setCurState] = useState<"initial" | "follow-up" | "final">(
    "initial"
  );

  const { details } = useDetails();
  const { tekongDetails } = useTekongDetails();
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const option = searchParams.get("option");
    if (!option || !OPTIONS.includes(option))
      paramKhc();
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    localStorage.setItem("state", curState);
  }, [curState]);

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
          {option === "tekong" && (
            <div className="sm:w-[580px] w-[85vw] flex flex-col items-center justify-center gap-2">
              <p className="text-center text-slate-400">
                Select the <span className="font-bold">current</span> state of
                the IR.
              </p>
              <div className="flex w-full items-center justify-center gap-x-4 gap-y-2 max-[430px]:flex-wrap">
                <SecondaryButton
                  disabled={curState === "initial"}
                  className={
                    curState === "initial"
                      ? "cursor-default bg-violet-600 text-slate-50"
                      : ""
                  }
                  onClick={() => setCurState("initial")}
                >
                  Initial
                </SecondaryButton>
                <SecondaryButton
                  disabled={curState === "follow-up"}
                  className={
                    curState === "follow-up"
                      ? "cursor-default bg-violet-600 text-slate-50"
                      : ""
                  }
                  onClick={() => setCurState("follow-up")}
                >
                  Follow Up
                </SecondaryButton>
                <SecondaryButton
                  disabled={curState === "final"}
                  className={
                    curState === "final"
                      ? "cursor-default bg-violet-600 text-slate-50"
                      : ""
                  }
                  onClick={() => setCurState("final")}
                >
                  Final
                </SecondaryButton>
              </div>
            </div>
          )}
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
