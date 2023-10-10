import { WhatsappShareButton, TelegramShareButton } from "react-share";

type ShareType = {
  text: string;
};

const CLASSNAME =
  "flex items-center justify-center gap-2 bg-white shadow-sm px-4 py-2 rounded-md hover:brightness-95 duration-200";
export default function Share({ text }: ShareType) {
  return (
    <div className="flex items-center justify-center gap-10">
      <WhatsappShareButton url={text} title="IR Generator">
        <span className={CLASSNAME}>
          <img src="whatsapp.svg" alt="" width={30} />
          <p>Share to WhatsApp</p>
        </span>
      </WhatsappShareButton>
      <TelegramShareButton url={text} title="IR Generator">
        <span className={CLASSNAME}>
          <img src="telegram.svg" alt="" width={30} />
          <p>Share to Telegram</p>
        </span>
      </TelegramShareButton>
    </div>
  );
}
