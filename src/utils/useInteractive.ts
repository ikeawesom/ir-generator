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

  const handleContactAdd = () => {
    var temp = details.idetails;
    temp.push("");
    setDetails({ ...details, idetails: temp });
  };

  const handleContactRemove = (index: number) => {
    var temp = details.idetails;
    temp.splice(index, 1);
    setDetails({ ...details, idetails: temp });
  };

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    var temp = details.idetails;
    temp[index] = e.target.value;
    setDetails({ ...details, idetails: temp });
  };

  return {
    handleStatusAdd,
    handleStatusChange,
    handleStatusRemove,
    handleContactAdd,
    handleContactRemove,
    handleContactChange,
  };
}
