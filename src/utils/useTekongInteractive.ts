import { useTekongDetails } from "../contexts/TekongContext";

export default function useTekongInteractive() {
  const { tekongDetails, setTekongDetails } = useTekongDetails();

  const handleStatusAdd = () => {
    var temp = tekongDetails.status;
    temp.push("");
    setTekongDetails({ ...tekongDetails, status: temp });
  };

  const handleStatusRemove = (index: number) => {
    var temp = tekongDetails.status;
    console.log(index);
    temp.splice(index, 1);
    setTekongDetails({ ...tekongDetails, status: temp });
  };

  const handleStatusChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    var temp = tekongDetails.status;
    temp[index] = e.target.value;
    setTekongDetails({ ...tekongDetails, status: temp });
  };

  return {
    handleStatusAdd,
    handleStatusChange,
    handleStatusRemove,
  };
}
