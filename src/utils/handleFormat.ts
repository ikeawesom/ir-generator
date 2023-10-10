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

  const descHeader = `${bold}2) Brief Description of Incident:${bold}`;

  const otherHeader = `${bold}Other Details:${bold}`;
  const nric = `NRIC: ${details.nric}`;
  const name = `R/Name: ${details.name}`;
  const svs = `SVS: ${details.svs}`;
  const pes = `PES: ${details.pes}`;
  const camp = `Resident Camp: ${details.camp}`;
  const rslocation = `Report Sick Location: ${details.rslocation}`;

  const statusHeader = `${bold}3) Current Status:${bold}`;

  const dateTimeHeader = `${bold}4) Date & Time of Incident:${bold}`;

  const locationHeader = `${bold}5) Location of Incident:${bold}`;

  const unitInvolvedHeader = `${bold}6) Unit Involved/Affected:${bold}`;

  const actionHeader = `${bold}7) Follow Up Actions:${bold}`;

  const civiInvolvedHeader = `${bold}8) Details of Civilian Involved, if any:${bold}`;

  const formsgHeader = `${bold}9) Date & Time Reported To:${bold}`;

  const roHeader = `${bold}10)Reporting Officer:${bold}`;

  const voHeader = `${bold}11) Vetting Officer${bold}`;

  const result = `${unit}
  
${natureHeader}
${details.nature}

${descHeader}
${details.desc}

${otherHeader}
${nric}
${name}
${svs}
${pes}
${camp}
${rslocation}

${statusHeader}
${handleOptionsFormat(details.status)}

${dateTimeHeader}
${details.idate} ${details.itime}

${locationHeader}
${details.ilocation}

${unitInvolvedHeader}
${details.involved}

${actionHeader}
${details.actions === "" ? "NIL" : details.actions}

${civiInvolvedHeader}
${handleOptionsFormat(details.idetails)}

${formsgHeader}
GSOC: ${details.gsoc === "" ? "NIL" : details.gsoc}
FormSG: ${details.formsg === "" ? "NIL" : details.formsg}

${roHeader}
${details.ro}

${voHeader}
${details.vo}`;
  return result;
}
