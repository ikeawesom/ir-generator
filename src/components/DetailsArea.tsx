import { useEffect, useState } from "react";
import { useDetails } from "../contexts/DetailsContext";
import handleFormat from "../utils/handleFormat";
import Clipboard from "./Clipboard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Share from "./Share";
import { useTekongDetails } from "../contexts/TekongContext";
import handleTekongFormat from "../utils/handleTekongFormat";
import { twMerge } from "tailwind-merge";

type DetailsType = {
  onCopy: () => void;
  option: string;
};

const PLATFORMS = [
  { title: "WhatsApp", src: "whatsapp.svg", id: "ws" },
  { title: "Telegram", src: "telegram.svg", id: "tele" },
];

export default function DetailsArea({ onCopy, option }: DetailsType) {
  const { details, setDetails } = useDetails();
  const { tekongDetails, setTekongDetails } = useTekongDetails();
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    if (option === "keat-hong-camp") {
      const data = handleFormat(details, details.platform);
      setFormatted(data);
    } else if (option === "tekong") {
      const state = localStorage.getItem("state");
      if (state !== null) {
        const data = handleTekongFormat(
          state,
          tekongDetails,
          tekongDetails.platform
        );
        setFormatted(data);
      }
    }
  }, [option, details, tekongDetails]);

  const handlePlatform = (id: string) => {
    if (option === "tekong") {
      setTekongDetails({ ...tekongDetails, platform: id });
    } else {
      setDetails({ ...details, platform: id });
    }
  };

  return (
    <div className="sm:w-[580px] w-[80vw] flex flex-col gap-6">
      <h4 className="text-base text-slate-800 text-center">
        Your{" "}
        <span className="text-violet-600 font-medium">incident report</span> has
        been generated. Simply choose your platform and copy and paste the
        message below.
      </h4>

      <ul className="w-full flex items-center justify-center gap-x-10 gap-y-4 flex-wrap">
        {PLATFORMS.map((item, index) => (
          <li
            onClick={() => handlePlatform(item.id)}
            key={index}
            className={twMerge(
              "flex flex-row items-center justify-between gap-2 px-4 py-2 rounded-md shadow-sm duration-200 border-[1px]",
              option === "tekong"
                ? tekongDetails.platform === item.id
                  ? "cursor-default bg-violet-600 text-slate-50"
                  : "cursor-pointer hover:brightness-95 bg-white"
                : details.platform === item.id
                ? "cursor-default bg-violet-600 text-slate-50"
                : "cursor-pointer hover:brightness-95 bg-white"
            )}
          >
            <img src={item.src} alt="" width={25} />
            <h4>{item.title}</h4>
          </li>
        ))}
      </ul>

      <div className="relative">
        <textarea
          className="bg-white rounded-lg shadow-md resize-none w-full md:p-6 p-4 h-[75vh] details-area"
          defaultValue={formatted}
          readOnly
        />
        <CopyToClipboard text={formatted} onCopy={onCopy}>
          <div className="absolute bottom-5 right-5 shadow-md rounded-full bg-violet-600 p-4 cursor-pointer hover:opacity-80 duration-200">
            <Clipboard />
          </div>
        </CopyToClipboard>
      </div>

      <Share
        text={formatted}
        platform={
          option === "tekong" ? tekongDetails.platform : details.platform
        }
      />
    </div>
  );
}
