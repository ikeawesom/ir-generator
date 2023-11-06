import DefaultForm from "./Forms/DefaultForm";

export default function FormContainer({ option }: { option: string }) {
  return (
    <div className="bg-white md:p-8 sm:p-6 p-4 rounded-lg shadow-md sm:w-[580px] w-[85vw]">
      <p className="text-red-500 text-sm text-start mb-4">*Required fields</p>
      {option === "keat-hong-camp" ? <DefaultForm /> : ""}
    </div>
  );
}
