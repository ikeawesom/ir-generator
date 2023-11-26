import { TekongDetailsType } from "../contexts/TekongContext";

function handleOptionsFormat(arr: string[]) {
  if (arr.length === 0) return "NIL";
  var result = "";
  arr.forEach((item) => (result += item + "\n"));
  return result.trimEnd();
}

export default function handleTekongFormat(
  details: TekongDetailsType,
  type: string
) {
  const bold = type === "ws" ? "*" : "**";

  const mainHeader = `${bold}${details.involved}${bold}`;
  const natureHeader = `${bold}1) Nature and Type of Incident:${bold}`;

  const dateTimeHeader = `${bold}2) Date & Time of Incident:${bold}`;

  const svcmenHeader = `${bold}3) Serviceman Involved:${bold}`;
  const nric = `${details.nric}`;
  const name = `${details.name}`;
  const svs = `${details.svs}`;
  const fourD = details.fourd;
  const pes = `PES: ${details.pes}`;
  const svcmen = `${name}, ${nric}, ${pes}, ${fourD}, ${svs}`;

  const unitInvolvedHeader = `${bold}4) Serviceman Unit and Company:${bold}`;

  const locationHeader = `${bold}5) Location of Incident:${bold}`;

  const injuryHeader = `${bold}5) Injury/Damage:${bold}`;

  const descHeader = `${bold}6) Brief Description of Incident:${bold}`;

  const actionHeader = `${bold}7) Follow Up Updates:${bold}`;

  const statuses = handleOptionsFormat(details.status);
  const emptyStatuses = statuses === "NIL";

  const stakes = handleOptionsFormat(details.stake);

  const stakeHeader = `${bold}8) Stakeholders Informed:${bold}`;

  const nokHeader = `${bold}9) NOK Informed:${bold}`;

  const gsocHeader = `${bold}9a) Date/Time of Verbal Report to GSOC:${bold}`;
  const esisHeader = `${bold}9b) Date/Time of ESIS Report:${bold}`;
  const armHeader = `${bold}10) Date/Time reported to 8SAB CDOO:${bold}`;

  const roHeader = `${bold}11) Unit Reporting POC:${bold}`;

  const result = `${mainHeader}
  
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

${injuryHeader}
${details.injury}

${descHeader}
${details.desc}

${actionHeader}
${emptyStatuses ? details.actions : details.actions + `\n${statuses}`}

${stakeHeader}
${stakes}

${nokHeader}
${details.name} informed ${details.nok} on ${details.nokdate}HRS

${gsocHeader} ${details.gsoc === "" ? "NIL" : `${details.gsoc}HRS`}

${esisHeader} ${details.esis === "" ? "NIL" : `${details.esis}HRS`}

${armHeader} ${details.arm === "" ? "NIL" : `${details.arm}HRS`}

${roHeader}
${details.ro}`;
  return result;
}
