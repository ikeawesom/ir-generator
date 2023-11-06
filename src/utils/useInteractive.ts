import { useDetails } from "../contexts/DetailsContext";

export default function useInteractive() {
  const { details, setDetails } = useDetails();

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

  return {
    handleStatusAdd,
    handleStatusChange,
    handleStatusRemove,
  };
}
