import { DetailsType } from "../contexts/DetailsContext";

function handleOptionsFormat(arr: string[]) {
  if (arr.length === 0) return "NIL";
  var result = "";
  arr.forEach((item) => (result += item + "\n"));
  return result.trimEnd();
}

export default function handleFormat(details: DetailsType, type: string) {
  const bold = type === "ws" ? "*" : "**";

  const unit = `${bold}${details.unit}${bold}`;

  const natureHeader = `${bold}1) Nature and Type of Incident:${bold}`;

  const dateTimeHeader = `${bold}2) Date & Time of Incident:${bold}`;

  const svcmenHeader = `${bold}3) Serviceman Involved:${bold}`;
  const nric = `${details.nric}`;
  const name = `${details.name}`;
  const svs = `${details.svs}`;
  const pes = `${details.pes}`;
  const svcmen = `${name}, ${nric}, PES ${pes}, ${svs}`;

  const unitInvolvedHeader = `${bold}4) Serviceman Unit and Company:${bold}`;

  const locationHeader = `${bold}5) Location of Incident:${bold}`;

  const descHeader = `${bold}6) Brief Description of Incident:${bold}`;

  const injuryHeader = `${bold}7) Injury/Damage:${bold}`;

  const actionHeader = `${bold}8) Follow Up Actions:${bold}`;

  const statuses = handleOptionsFormat(details.status);
  const emptyStatuses = statuses === "NIL";

  const gsocHeader = `${bold}9a) Date/Time of Verbal Report to GSOC:${bold}`;
  const esisHeader = `${bold}9b) Date/Time of ESIS Report:${bold}`;
  const armHeader = `${bold}10) Date/Time reported to 3 DIV/HQ Armour:${bold}`;

  const roHeader = `${bold}11) Reporting Officer:${bold}`;

  const result = `${unit}
  
${natureHeader}
${details.nature}

${dateTimeHeader}
${details.idate} ${details.itime}HRS

${svcmenHeader}
${svcmen}

${unitInvolvedHeader}
${details.involved}

${locationHeader}
${details.ilocation}

${descHeader}
${details.desc}

${injuryHeader}
${details.injury}

${actionHeader}
${emptyStatuses ? details.actions : details.actions + `\n${statuses}`}

${gsocHeader} ${details.gsoc === "" ? "NIL" : `${details.gsoc}HRS`}

${esisHeader} ${details.esis === "" ? "NIL" : `${details.esis}HRS`}

${armHeader} ${details.arm === "" ? "NIL" : `${details.arm}HRS`}

${roHeader}
${details.ro}`;
  return result;
}
