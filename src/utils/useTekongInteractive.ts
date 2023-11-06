import { useTekongDetails } from "../contexts/TekongContext";

export default function useTekongInteractive() {
  const { tekongDetails, setTekongDetails } = useTekongDetails();

  const handleStakeAdd = () => {
    var temp = tekongDetails.stake;
    temp.push("");
    setTekongDetails({ ...tekongDetails, stake: temp });
  };

  const handleStakeRemove = (index: number) => {
    var temp = tekongDetails.stake;
    console.log(index);
    temp.splice(index, 1);
    setTekongDetails({ ...tekongDetails, stake: temp });
  };

  const handleStakeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    var temp = tekongDetails.stake;
    temp[index] = e.target.value;
    setTekongDetails({ ...tekongDetails, stake: temp });
  };
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
    handleStakeAdd,
    handleStakeChange,
    handleStakeRemove,
  };
}
