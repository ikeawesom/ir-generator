import { DetailsType } from "../contexts/DetailsContext";

function handleOptionsFormat(arr: string[]) {
  if (arr.length === 0) return "NIL";
  var result = "";
  arr.forEach((item) => (result += item + "\n"));
  return result.trimEnd();
}

export default function handleFormat(details: DetailsType, type: string) {
  const bold = type === "ws" ? "*" : "**";

  const natureHeader = `${bold}1) Nature and Type of Incident:${bold}`;

  const dateTimeHeader = `${bold}2) Date & Time of Incident:${bold}`;

  const svcmenHeader = `${bold}3) Particulars of Individual:${bold}`;
  const nric = `${details.nric}`;
  const name = `${details.name}`;
  const svs = `${details.svs}`;
  const pes = `${details.pes}`;
  const svcmen = `${name}, ${nric}, PES ${pes}, ${svs}`;

  const locationHeader = `${bold}4) Location of Incident:${bold}`;

  const descHeader = `${bold}5) Brief Description of Incident:${bold}`;

  const statusHeader = `${bold}6) Current Status:${bold}`;

  const statuses = handleOptionsFormat(details.status);
  const emptyStatuses = statuses === "NIL";

  const NOKHeader = `${bold}7) NOK Informed:${bold}`;

  const HHQHeader = `${bold}8) HHQ (GSOC/Div/Bde) Informed:${bold}`;
  const gsocHeader = `${bold}- GSOC:${bold}`;
  const esisHeader = `${bold}- HQ 3 Div:${bold}`;
  const armHeader = `${bold}- Bde:${bold}`;

  const roHeader = `${bold}Reporting By:${bold}`;

  const result = `${bold}${details.unit}/${details.involved}${bold}
  
${natureHeader}
${details.nature}

${dateTimeHeader}
${details.idate} ${details.itime}HRS

${svcmenHeader}
${svcmen}

${locationHeader}
${details.ilocation}

${descHeader}
${details.desc}

${statusHeader}
${emptyStatuses ? "NIL" : `${statuses}`}

${NOKHeader}
${details.nok} on ${details.nokdate}HRS

${HHQHeader}
${gsocHeader} ${details.gsoc === "" ? "NIL" : `${details.gsoc}HRS`}
${esisHeader} ${details.esis === "" ? "NIL" : `${details.esis}HRS`}
${armHeader} ${details.arm === "" ? "NIL" : `${details.arm}HRS`}

${roHeader}
${details.ro}`;
  return result;
}
