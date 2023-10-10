import { useEffect, useState } from "react";
import { useDetails } from "../contexts/DetailsContext";
import handleFormat from "../utils/handleFormat";
import Clipboard from "./Clipboard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Share from "./Share";

type DetailsType = {
  onCopy: () => void;
};

const PLATFORMS = [
  { title: "WhatsApp", src: "whatsapp.svg", id: "ws" },
  { title: "Telegram", src: "telegram.svg", id: "tele" },
];

export default function DetailsArea({ onCopy }: DetailsType) {
  const { details, setDetails } = useDetails();
  const [formatted, setFormatted] = useState("");

  useEffect(() => {
    const data = handleFormat(details, details.platform);
    setFormatted(data);
  }, [details]);

  return (
    <div className="sm:w-[580px] w-[80vw] flex flex-col gap-6">
      <h4 className="text-base text-slate-800 text-center">
        Your{" "}
        <span className="text-violet-600 font-medium">incident report</span> has
        been generated. Simply choose your platform, copy and paste this message
        below and share it straight from below!
      </h4>

      <ul className="w-full flex items-center justify-center gap-x-10 gap-y-4 flex-wrap">
        {PLATFORMS.map((item, index) => (
          <li
            onClick={() => {
              setDetails({ ...details, platform: item.id });
            }}
            key={index}
            className={`flex flex-row items-center justify-between gap-2 px-4 py-2 rounded-md shadow-md bg-white  duration-200 border-[1px] ${
              details.platform === item.id
                ? "border-violet-600 cursor-default"
                : "cursor-pointer hover:brightness-95"
            }`}
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

      <Share text={formatted} />
    </div>
  );
}
