import { useState } from "react";
import FormHeading from "./FormHeading";
import Spinner from "./Spinner";

export default function FormContainer() {
  const [details, setDetails] = useState({
    unit: "",
    nature: "",
    desc: "",
    nric: "",
    name: "",
    svs: "",
    pes: "",
    camp: "",
    rslocation: "",
    status: "",
    idate: "",
    itime: "",
    ilocation: "",
    involved: "",
    actions: "",
    idetails: "",
    gsoc: "",
    formsg: "",
    ro: "",
    vo: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(details);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white md:p-8 sm:p-6 p-4 rounded-lg shadow-md">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 sm:w-[500px] w-[70vw]"
      >
        <FormHeading>General Details</FormHeading>
        <label htmlFor="unit">Unit/Sub-Unit/Course</label>
        <input
          id="unit"
          type="text"
          name="unit"
          placeholder="For e.g. 40SAR/Stallion, INT-LAS/SCTW/1023 AISCC, etc."
          onChange={handleChange}
        />
        <label htmlFor="nature">Nature of Incident</label>
        <input
          id="nature"
          type="text"
          name="nature"
          placeholder="Training Related/Non-Training Related"
          onChange={handleChange}
        />
        <label htmlFor="desc">Brief Description of Incident</label>
        <input
          id="desc"
          type="text"
          name="desc"
          placeholder="e.g. At 2100 on 020124, REC XXX injured his left wrist while..."
          onChange={handleChange}
        />
        <FormHeading>Personal Details</FormHeading>
        <label htmlFor="nric">Full NRIC</label>
        <input
          id="nric"
          type="text"
          name="nric"
          placeholder="TXXXXXXXA"
          onChange={handleChange}
        />
        <label htmlFor="name">Rank and Name</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="e.g. REC JOHN TAN JIA WEI"
          onChange={handleChange}
        />
        <label htmlFor="svs">Service Status</label>
        <input
          id="svs"
          type="text"
          name="svs"
          placeholder="NSF, REG, etc."
          onChange={handleChange}
        />
        <label htmlFor="pes">PES Status</label>
        <input
          id="pes"
          type="text"
          name="pes"
          placeholder="A, B1, B2, etc."
          onChange={handleChange}
        />
        <label htmlFor="camp">Resident Camp</label>
        <input
          id="camp"
          type="text"
          name="camp"
          placeholder="e.g. Rocky Hill Camp, Kiat Hong Camp, etc."
          onChange={handleChange}
        />
        <label htmlFor="rslocation">Reporting Sick Location</label>
        <input
          id="rslocation"
          type="text"
          name="rslocation"
          placeholder="e.g. Changi General Hospital"
          onChange={handleChange}
        />
        <FormHeading>Incident Details</FormHeading>
        <label htmlFor="status">Current Status</label>
        <input
          id="status"
          type="text"
          name="status"
          placeholder="e.g. 2 Day LD, 5 Day RMJ, etc."
          onChange={handleChange}
        />
        <label htmlFor="idate">Date of Incident</label>
        <input
          id="idate"
          type="text"
          name="idate"
          placeholder="DD/MM/YY"
          onChange={handleChange}
        />
        <label htmlFor="itime">Time of Incident</label>
        <input
          id="itime"
          type="text"
          name="itime"
          placeholder="HH:MM"
          onChange={handleChange}
        />
        <label htmlFor="ilocation">Location of Incident</label>
        <input
          id="ilocation"
          type="text"
          name="ilocation"
          placeholder="e.g. Home, Jurong Point Shopping Mall, etc."
          onChange={handleChange}
        />
        <label htmlFor="involved">Unit Involved/Affected</label>
        <input
          id="involved"
          type="text"
          name="involved"
          placeholder="For e.g. 40SAR/Stallion, INT-LAS/SCTW/1023 AISCC, etc."
          onChange={handleChange}
        />
        <label htmlFor="actions">Follow Up Actions</label>
        <input
          id="actions"
          type="text"
          name="actions"
          placeholder="e.g. Continue applying XX medication on wound, etc."
          onChange={handleChange}
        />
        <label htmlFor="idetails">Details of Civilian Involved (if any)</label>
        <input
          id="idetails"
          type="text"
          name="idetails"
          placeholder="Phone number, email address, etc."
          onChange={handleChange}
        />
        <FormHeading>Others</FormHeading>
        <label htmlFor="gsoc">Date & Time Reported To GSOC</label>
        <input
          id="gsoc"
          type="text"
          name="gsoc"
          placeholder="DD:MM:YY HH:MM"
          onChange={handleChange}
        />
        <label htmlFor="formsg">Date & Time Reported To FormSG</label>
        <input
          id="formsg"
          type="text"
          name="formsg"
          placeholder="DD:MM:YY HH:MM"
          onChange={handleChange}
        />
        <FormHeading>Final Signing</FormHeading>
        <label htmlFor="ro">RO</label>
        <input
          id="ro"
          type="text"
          name="ro"
          placeholder="123456789"
          onChange={handleChange}
        />
        <label htmlFor="vo">VO</label>
        <input
          id="vo"
          type="text"
          name="vo"
          placeholder="123456789"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={loading}
          className={`rounded-md text-white bg-violet-600 py-2 w-full duration-200 ${
            loading ? "opacity-40" : "hover:opacity-80"
          }`}
        >
          {loading ? (
            <span className="flex flex-row gap-2 items-center justify-center">
              Generating IR <Spinner />
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}
