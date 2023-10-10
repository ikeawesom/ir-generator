import { useEffect, useState } from "react";
import FormHeading from "./FormHeading";
import Spinner from "./Spinner";
import { useDetails } from "../contexts/DetailsContext";

export default function FormContainer() {
  const { details, setDetails } = useDetails();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    setDetails({ ...details, submit: false });
    e.preventDefault();
    setTimeout(() => {
      setDetails({ ...details, submit: true });
      setLoading(false);
    }, 1000);
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleStatusAdd = () => {
    var temp = details.status;
    temp.push("");
    setDetails({ ...details, status: temp });
  };

  const handleStatusRemove = (index: number) => {
    var temp = details.status;
    console.log(index);
    temp.splice(index, 1);
    setDetails({ ...details, status: temp });
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    var temp = details.status;
    temp[index] = e.target.value;
    setDetails({ ...details, status: temp });
  };

  return (
    <div className="bg-white md:p-8 sm:p-6 p-4 rounded-lg shadow-md sm:w-[580px] w-[80vw]">
      <p className="text-red-500 text-sm text-start mb-4">*Required fields</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <FormHeading>General Details</FormHeading>
        <label htmlFor="unit">
          Unit/Sub-Unit/Course<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="unit"
          type="text"
          name="unit"
          placeholder="For e.g. 40SAR/Stallion, INT-LAS/SCTW/1023 AISCC, etc."
          onChange={handleChange}
        />
        <label htmlFor="nature">
          Nature of Incident<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="nature"
          type="text"
          name="nature"
          placeholder="Training Related/Non-Training Related"
          onChange={handleChange}
        />
        <label htmlFor="desc">
          Brief Description of Incident<span className="text-red-500">*</span>
        </label>
        <textarea
          required
          id="desc"
          className="h-[110px] field resize-none"
          name="desc"
          placeholder="e.g. At 2100 on 020124, REC JOHN DOE XIAO MING injured his left wrist while doing pushups during SRT at Bravo company line. He has sustained minor cuts on his left palm and his wrist hurts when moving."
          onChange={handleChange}
        />
        <FormHeading>Personal Details</FormHeading>
        <label htmlFor="nric">
          Masked NRIC<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="nric"
          type="text"
          name="nric"
          placeholder="TXXXX123A"
          onChange={handleChange}
        />
        <label htmlFor="name">
          Rank and Name<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="name"
          type="text"
          name="name"
          placeholder="e.g. REC JOHN TAN JIA WEI"
          onChange={handleChange}
        />
        <label htmlFor="svs">
          Service Status<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="svs"
          type="text"
          name="svs"
          placeholder="NSF, REG, etc."
          onChange={handleChange}
        />
        <label htmlFor="pes">
          PES Status<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="pes"
          type="text"
          name="pes"
          placeholder="A, B1, B2, etc."
          onChange={handleChange}
        />
        <label htmlFor="camp">
          Resident Camp<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="camp"
          type="text"
          name="camp"
          placeholder="e.g. Rocky Hill Camp, Kiat Hong Camp, etc."
          onChange={handleChange}
        />
        <label htmlFor="rslocation">
          Reporting Sick Location<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="rslocation"
          type="text"
          name="rslocation"
          placeholder="e.g. Changi General Hospital"
          onChange={handleChange}
        />
        <FormHeading
          onClick={handleStatusAdd}
          buttonContent="Add"
          buttonClass="bg-violet-600 text-slate-50 px-4 text-sm py-1 hover:opacity-80 duration-200 rounded-md"
        >
          Current Status
        </FormHeading>
        {details.status.length === 0 ? (
          <div className="w-full h-[80px] grid place-items-center bg-slate-50 rounded-md">
            <p className="text-slate-400 text-sm">No Status Added</p>
          </div>
        ) : (
          details.status.map((item, index) => (
            <div
              className="flex gap-3 items-center justify-between"
              key={index}
            >
              <input
                required
                id="status"
                type="text"
                name="status"
                value={item}
                placeholder="e.g. 2 Day LD (010124-020123)"
                onChange={(e) => handleStatusChange(e, index)}
                className="flex-1 m-0"
              />
              <button
                type="button"
                onClick={() => handleStatusRemove(index)}
                className="bg-red-400 text-slate-50 px-2 py-1 rounded-md hover:brightness-90 duration-200"
              >
                Remove
              </button>
            </div>
          ))
        )}
        {/* <input
          required
          id="status"
          type="text"
          name="status"
          placeholder="e.g. 2 Day LD (010124-020123)"
          onChange={handleChange}
        /> */}
        <FormHeading>Incident Details</FormHeading>
        <label htmlFor="idate">
          Date of Incident<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="idate"
          type="text"
          name="idate"
          placeholder="DDMMYY: 010123"
          onChange={handleChange}
        />
        <label htmlFor="itime">
          Time of Incident<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="itime"
          type="text"
          name="itime"
          placeholder="HHMM: 0730"
          onChange={handleChange}
        />
        <label htmlFor="ilocation">
          Location of Incident<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="ilocation"
          type="text"
          name="ilocation"
          placeholder="e.g. Home, Jurong Point Shopping Mall, etc."
          onChange={handleChange}
        />
        <label htmlFor="involved">
          Unit Involved/Affected<span className="text-red-500">*</span>
        </label>
        <input
          required
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
        <label htmlFor="idetails">Details of Civilian Involved</label>
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
        <FormHeading>Signing Off</FormHeading>
        <label htmlFor="ro">
          Reporting Officer<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="ro"
          type="text"
          name="ro"
          placeholder="e.g. PS, 3SG XXX, etc."
          onChange={handleChange}
        />
        <label htmlFor="vo">
          Vetting Officer<span className="text-red-500">*</span>
        </label>
        <input
          required
          id="vo"
          type="text"
          name="vo"
          placeholder="e.g. PWO/PC, etc."
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
