import { TekongDetailsType } from "../contexts/TekongContext";

function handleOptionsFormat(arr: string[]) {
  if (arr.length === 0) return "NIL";
  var result = "";
  arr.forEach((item) => (result += item + "\n"));
  return result.trimEnd();
}

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export default function handleTekongFormat(
  state: string,
  details: TekongDetailsType,
  type: string
) {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = MONTHS[dateObj.getMonth()];
  const day = dateObj.getDate();
  const dateStr = `${day < 10 ? `0${day}` : day} ${month} ${year
    .toString()
    .substring(2)}`;
  const bold = type === "ws" ? "*" : "**";

  const mainHeader = `${bold}${dateStr}/${details.involved}${bold}`;
  const stateHeader = `${bold}${state.toUpperCase()}${bold}`;
  const natureHeader = `${bold}1) Nature and Type of Incident:${bold}`;

  const dateTimeHeader = `${bold}2) Date & Time of Incident:${bold}`;

  const svcmenHeader = `${bold}3) Serviceman Involved:${bold}`;
  const nric = `${details.nric}`;
  const name = `${details.name}`;
  const svs = `${details.svs}`;
  const fourD = details.fourd;
  const pes = `PES: ${details.pes}`;
  const svcmen = `${name}, ${nric}, ${pes}, ${fourD}, ${svs}`;

  const locationHeader = `${bold}4) Location of Incident:${bold}`;

  const injuryHeader = `${bold}5) Injury/Damage:${bold}`;

  const descHeader = `${bold}6) Brief Description of Incident:${bold}`;

  const actionHeader = `${bold}7) Follow Up Updates:${bold}`;

  const statuses = handleOptionsFormat(details.status);
  const emptyStatuses = statuses === "NIL";

  const stakeHeader = `${bold}8) Stakeholders Informed:${bold}`;

  const nokHeader = `${bold}a) NOK:${bold}`;

  const gsocHeader = `${bold}b) Date/Time of Verbal Report to GSOC:${bold}`;
  const esisHeader = `${bold}c) Date/Time of ESIS Report:${bold}`;
  const armHeader = `${bold}d) Date/Time reported to 8SAB CDOO:${bold}`;

  const roHeader = `${bold}9) Unit Reporting POC:${bold}`;

  const result = `${mainHeader}
${stateHeader}
  
${natureHeader}
${details.nature}

${dateTimeHeader}
${details.idate.length < 9 ? `0${details.idate}` : details.idate} ${
    details.itime
  }HRS

${svcmenHeader}
${svcmen}

${locationHeader}
${details.ilocation}

${injuryHeader}
${details.injury}

${descHeader}
${details.desc}

${actionHeader}
${emptyStatuses ? details.actions : details.actions + `\n${statuses}`}

${stakeHeader}
${nokHeader} ${details.name} informed ${details.nok} on ${
    details.nokdate.length < 9 ? `0${details.nokdate}` : details.nokdate
  } ${details.noktime}HRS
${gsocHeader} ${details.gsoc === "" ? "NIL" : `${details.gsoc}HRS`}
${esisHeader} ${details.esis === "" ? "NIL" : `${details.esis}HRS`}
${armHeader} ${details.arm === "" ? "NIL" : `${details.arm}HRS`}

${roHeader}
${details.ro}`;
  return result;
}
