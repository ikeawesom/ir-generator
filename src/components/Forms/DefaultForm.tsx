import React, { useState } from "react";
import FormHeading from "../FormHeading";
import Spinner from "../Spinner";
import { useDetails } from "../../contexts/DetailsContext";
import useInteractive from "../../utils/useInteractive";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import { twMerge } from "tailwind-merge";

export default function DefaultForm() {
  const { details, setDetails } = useDetails();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (details.nature === "") {
      alert("Please select the nature of incident.");
    } else {
      setLoading(true);
      setDetails({ ...details, submit: false });
      setTimeout(() => {
        setDetails({ ...details, submit: true });
        setLoading(false);
      }, Math.floor(Math.random() * 2000));
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const { handleStatusAdd, handleStatusChange, handleStatusRemove } =
    useInteractive();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <FormHeading>Personal Details</FormHeading>
      <label htmlFor="unit">
        Unit<span className="text-red-500">*</span>
      </label>
      <input
        required
        id="unit"
        type="text"
        name="unit"
        placeholder="e.g. 40SAR, 41SAR"
        onChange={handleChange}
      />
      <label htmlFor="involved">
        Company<span className="text-red-500">*</span>
      </label>
      <input
        required
        id="involved"
        type="text"
        name="involved"
        placeholder="e.g. Stallion Scout PL, Archer PL 2, etc."
        onChange={handleChange}
      />
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

      <FormHeading>Incident Details</FormHeading>

      <label htmlFor="nature">
        Nature of Incident<span className="text-red-500">*</span>
      </label>

      <div className="flex w-full items-center justify-between gap-4 mb-4">
        <SecondaryButton
          disabled={details.nature === "Training Related"}
          className={twMerge(
            details.nature === "Training Related" &&
              "cursor-default bg-violet-600 text-slate-50"
          )}
          onClick={() => setDetails({ ...details, nature: "Training Related" })}
        >
          Training Related
        </SecondaryButton>
        <SecondaryButton
          disabled={details.nature === "Non-Training Related"}
          className={twMerge(
            details.nature === "Non-Training Related" &&
              "cursor-default bg-violet-600 text-slate-50"
          )}
          onClick={() =>
            setDetails({ ...details, nature: "Non-Training Related" })
          }
        >
          Non-Training Related
        </SecondaryButton>
      </div>
      {/* <input
        required
        id="nature"
        type="text"
        name="nature"
        placeholder="Training Related/Non-Training Related"
        onChange={handleChange}
      /> */}
      <label htmlFor="idate">
        Date of Incident (DDMMYY)<span className="text-red-500">*</span>
      </label>
      <input
        required
        id="idate"
        type="number"
        name="idate"
        placeholder="e.g. 010123, 251223, etc."
        onChange={handleChange}
      />
      <label htmlFor="itime">
        Time of Incident (HHMM)<span className="text-red-500">*</span>
      </label>
      <input
        required
        id="itime"
        type="number"
        name="itime"
        placeholder="e.g. 0730, 2100, etc."
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
      <div className="w-full flex flex-col items-start justify-center">
        <label htmlFor="desc">
          Brief Description of Incident<span className="text-red-500">*</span>
        </label>
        <p className="text-slate-400 text-sm">
          Please include details like 5W1H of incident, reporting sick location,
          what happened at clinic, etc.
        </p>
      </div>
      <textarea
        required
        id="desc"
        className="h-[150px] field resize-none"
        name="desc"
        placeholder="e.g. On 01 Nov 2023 at about 2215hrs, REC JOHN TAN reported sick for fever at Changi General Hospital after he took his temperature which was 39.5 degrees. At the hospital, he took a blood test to test for dengue which was later confirmed."
        onChange={handleChange}
      />

      <label htmlFor="injury">
        Injuries/Damage<span className="text-red-500">*</span>
      </label>
      <input
        required
        id="injury"
        type="text"
        name="injury"
        placeholder="e.g. Diagnosed with flu, etc."
        onChange={handleChange}
      />

      <label htmlFor="actions">
        Follow Up Actions<span className="text-red-500">*</span>
      </label>
      <input
        id="actions"
        required
        type="text"
        name="actions"
        placeholder="e.g. Continue applying XX medication on wound, etc."
        onChange={handleChange}
      />

      <FormHeading
        onClick={handleStatusAdd}
        buttonContent="Add"
        buttonClass="bg-violet-600 text-slate-50 px-4 text-sm py-1 hover:opacity-80 duration-200 rounded-md"
      >
        Status Received
      </FormHeading>
      {details.status.length === 0 ? (
        <div className="w-full h-[80px] grid place-items-center bg-slate-50 rounded-md mb-2">
          <p className="text-slate-400 text-sm">No Status Added</p>
        </div>
      ) : (
        details.status.map((item, index) => (
          <div
            className="flex gap-3 items-center justify-between w-full mb-2"
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
              className="m-0 w-full"
            />
            <button
              type="button"
              onClick={() => handleStatusRemove(index)}
              className="bg-red-400 text-slate-50 w-[100px] px-2 py-1 rounded-md hover:brightness-90 duration-200"
            >
              Remove
            </button>
          </div>
        ))
      )}

      <FormHeading>Reporting</FormHeading>
      <label htmlFor="gsoc">
        Date/Time of Verbal Report to GSOC (DDMMYY/HHMM)
      </label>
      <input
        id="gsoc"
        type="text"
        name="gsoc"
        placeholder="e.g. 010123 1200, 020223 0900, etc."
        onChange={handleChange}
      />
      <label htmlFor="esis">Date/Time of ESIS Report (DDMMYY/HHMM)</label>
      <input
        id="esis"
        type="text"
        name="esis"
        placeholder="e.g. 010123 1200, 020223 0900, etc."
        onChange={handleChange}
      />

      <label htmlFor="arm">
        Date/Time Reported to 3 DIV/HQ Armour (DDMMYY/HHMM)
      </label>
      <input
        id="arm"
        type="text"
        name="arm"
        placeholder="e.g. 010123 1200, 020223 0900, etc."
        onChange={handleChange}
      />
      <FormHeading>Signing Off</FormHeading>
      <label htmlFor="ro">
        Reporting Officer (Rank/Name/Appointment)
        <span className="text-red-500">*</span>
      </label>
      <input
        required
        id="ro"
        type="text"
        name="ro"
        placeholder="e.g. CPT JOHN TAN, OC STALLION, etc."
        onChange={handleChange}
      />
      <PrimaryButton type="submit" disabled={loading}>
        {loading ? (
          <span className="flex flex-row gap-2 items-center justify-center">
            Generating <Spinner />
          </span>
        ) : (
          "Generate IR"
        )}
      </PrimaryButton>
    </form>
  );
}
