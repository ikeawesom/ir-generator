import React, { useEffect, useState } from "react";
import FormHeading from "../FormHeading";
import Spinner from "../Spinner";
import { useTekongDetails } from "../../contexts/TekongContext";
import useTekongInteractive from "../../utils/useTekongInteractive";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import { twMerge } from "tailwind-merge";

export default function TekongForm() {
  const { tekongDetails, setTekongDetails } = useTekongDetails();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tekongDetails.nature === "") {
      alert("Please select the nature of incident.");
    } else {
      setLoading(true);
      setTekongDetails({ ...tekongDetails, submit: false });
      setTimeout(() => {
        setTekongDetails({ ...tekongDetails, submit: true });
        setLoading(false);
      }, Math.floor(Math.random() * 2000));
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTekongDetails({ ...tekongDetails, [e.target.name]: e.target.value });
  };

  const { handleStatusAdd, handleStatusChange, handleStatusRemove } =
    useTekongInteractive();

  const [doi, setDoi] = useState({
    day: "01",
    month: "JAN",
    year: "24",
  });

  const [nokDoi, setNokDoi] = useState({
    day: "01",
    month: "JAN",
    year: "24",
  });

  useEffect(() => {
    setTekongDetails({
      ...tekongDetails,
      idate: `${doi.day} ${doi.month} ${doi.year}`,
    });
  }, [doi]);

  useEffect(() => {
    setTekongDetails({
      ...tekongDetails,
      nokdate: `${nokDoi.day} ${nokDoi.month} ${nokDoi.year}`,
    });
  }, [nokDoi]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <FormHeading>Personal Details</FormHeading>
      <label htmlFor="involved">
        Unit and Company<span className="text-red-500">*</span>
      </label>
      <input
        required
        id="involved"
        type="text"
        name="involved"
        placeholder="e.g. BMTC3/40 SAR/BMT Coy A, etc."
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
      <label htmlFor="nric">
        Full NRIC<span className="text-red-500">*</span>
      </label>
      <input
        required
        id="nric"
        type="text"
        name="nric"
        placeholder="T1234568A"
        onChange={handleChange}
      />

      <label htmlFor="svs">
        Service Status<span className="text-red-500">*</span>
      </label>
      {/* <input
        required
        id="svs"
        type="text"
        name="svs"
        placeholder="NSF, REG, etc."
        onChange={handleChange}
      /> */}
      <select
        className="w-full"
        id="svs"
        name="svs"
        required
        onChange={handleChange}
      >
        <option value="NSF">NSF</option>
        <option value="REG">REG</option>
        <option value="NSMEN">NS MEN</option>
      </select>
      <label htmlFor="fourd">
        4D Number<span className="text-red-500">*</span>
      </label>
      <input
        required
        id="fourd"
        type="number"
        name="fourd"
        placeholder="1111"
        maxLength={4}
        minLength={4}
        onChange={handleChange}
      />
      <label htmlFor="pes">
        PES Status<span className="text-red-500">*</span>
      </label>
      {/* <input
        required
        id="pes"
        type="text"
        name="pes"
        placeholder="A, B1, B2, etc."
        onChange={handleChange}
      /> */}

      <select
        className="w-full"
        id="pes"
        name="pes"
        required
        onChange={handleChange}
      >
        <option value="A">A</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
        <option value="B3">B3</option>
        <option value="B4">B4</option>
        <option value="BP">BP</option>
        <option value="C2">C2</option>
        <option value="C9">C9</option>
        <option value="D">D</option>
        <option value="E1">E1</option>
        <option value="E9">E9</option>
        <option value="F">F</option>
      </select>

      <FormHeading>Incident Details</FormHeading>
      <label htmlFor="nature">
        Nature of Incident<span className="text-red-500">*</span>
      </label>

      <div className="flex w-full items-center justify-between gap-x-4 gap-y-2 mb-4 flex-col sm:flex-row">
        <SecondaryButton
          disabled={tekongDetails.nature === "Training Related"}
          className={twMerge(
            tekongDetails.nature === "Training Related" &&
              "cursor-default bg-violet-600 text-slate-50"
          )}
          onClick={() =>
            setTekongDetails({ ...tekongDetails, nature: "Training Related" })
          }
        >
          Training Related
        </SecondaryButton>
        <SecondaryButton
          disabled={tekongDetails.nature === "Non-Training Related"}
          className={twMerge(
            tekongDetails.nature === "Non-Training Related" &&
              "cursor-default bg-violet-600 text-slate-50"
          )}
          onClick={() =>
            setTekongDetails({
              ...tekongDetails,
              nature: "Non-Training Related",
            })
          }
        >
          Non-Training Related
        </SecondaryButton>
      </div>
      <label htmlFor="idate">
        Date of Incident (DD-MONTH-YY)<span className="text-red-500">*</span>
      </label>
      <div className="flex items-center gap-2 justify-between w-full">
        {/* <input
          className="w-full"
          required
          type="number"
          maxLength={2}
          placeholder="Day"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDoi({ ...doi, day: Number.parseInt(e.target.value) });
          }}
        /> */}
        <select
          className="w-full"
          id="day"
          name="day"
          required
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setDoi({ ...doi, day: e.target.value });
          }}
        >
          {new Array(31).fill(1).map((item: number, index: number) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <select
          className="w-full"
          id="months"
          name="months"
          required
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setDoi({ ...doi, month: e.target.value });
          }}
        >
          <option value="JAN">JAN</option>
          <option value="FEB">FEB</option>
          <option value="MAR">MAR</option>
          <option value="APR">APR</option>
          <option value="MAY">MAY</option>
          <option value="JUN">JUN</option>
          <option value="JUL">JUL</option>
          <option value="AUG">AUG</option>
          <option value="SEP">SEP</option>
          <option value="OCT">OCT</option>
          <option value="NOV">NOV</option>
          <option value="DEC">DEC</option>
        </select>

        <select
          id="year"
          name="year"
          required
          className="w-full"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setDoi({ ...doi, year: e.target.value });
          }}
        >
          {new Array(5).fill(1).map((item: number, index: number) => (
            <option key={index} value={index + 24}>
              {index + 24}
            </option>
          ))}
        </select>
      </div>
      <label htmlFor="itime">
        Time of Incident (HHMM)<span className="text-red-500">*</span>
      </label>
      <input
        required
        id="itime"
        type="number"
        maxLength={4}
        minLength={4}
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
          Please include details like the 5W1H of incident, reporting sick
          location, what happened at the clinic, etc.
        </p>
        <p className="text-slate-400 text-sm italic">
          {
            "e.g. On 01 Nov 2023 at about 2215hrs, REC JOHN TAN reported sick for fever at Changi General Hospital after he took his temperature which was 39.5 degrees. At the hospital, he took a blood test to test for dengue which was later confirmed."
          }
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
        Follow Up Updates<span className="text-red-500">*</span>
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
      {tekongDetails.status.length === 0 ? (
        <div className="w-full h-[80px] grid place-items-center bg-slate-50 rounded-md mb-2">
          <p className="text-slate-400 text-sm">No Status Added</p>
        </div>
      ) : (
        tekongDetails.status.map((item, index) => (
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

      <label htmlFor="nok">
        Name and Relationship of Next of Kin (NOK)
        <span className="text-red-500">*</span>
      </label>
      <input
        required
        id="nok"
        type="text"
        name="nok"
        placeholder="e.g. John Tan (Father), Mary Lim (Mother), etc."
        onChange={handleChange}
      />
      <label htmlFor="nokdate">
        Date Reported to NOK (DD-MONTH-YY)
        <span className="text-red-500">*</span>
      </label>
      <div className="flex items-center gap-2 justify-between w-full">
        {/* <input
          className="w-full"
          required
          type="number"
          maxLength={2}
          placeholder="Day"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setDoi({ ...doi, day: Number.parseInt(e.target.value) });
          }}
        /> */}
        <select
          className="w-full"
          id="day"
          name="day"
          required
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setNokDoi({ ...nokDoi, day: e.target.value });
          }}
        >
          {new Array(31).fill(1).map((item: number, index: number) => (
            <option key={index} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <select
          className="w-full"
          id="months"
          name="months"
          required
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setNokDoi({ ...nokDoi, month: e.target.value });
          }}
        >
          <option value="JAN">JAN</option>
          <option value="FEB">FEB</option>
          <option value="MAR">MAR</option>
          <option value="APR">APR</option>
          <option value="MAY">MAY</option>
          <option value="JUN">JUN</option>
          <option value="JUL">JUL</option>
          <option value="AUG">AUG</option>
          <option value="SEP">SEP</option>
          <option value="OCT">OCT</option>
          <option value="NOV">NOV</option>
          <option value="DEC">DEC</option>
        </select>

        <select
          id="year"
          name="year"
          required
          className="w-full"
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setNokDoi({ ...nokDoi, year: e.target.value });
          }}
        >
          {new Array(5).fill(1).map((item: number, index: number) => (
            <option key={index} value={index + 24}>
              {index + 24}
            </option>
          ))}
        </select>
      </div>
      <label htmlFor="noktime">
        Time Reported to NOK (HHMM)
        <span className="text-red-500">*</span>
      </label>
      <input
        required
        id="noktime"
        type="text"
        name="noktime"
        placeholder="e.g. 1200, 0900, etc."
        onChange={handleChange}
      />
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

      <label htmlFor="arm">Date/Time Reported to 8SAB CDOO (DDMMYY/HHMM)</label>
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
