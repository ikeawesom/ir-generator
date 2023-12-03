import { createContext, useState, useContext } from "react";

export type DetailsType = {
  submit: boolean;
  platform: string;
  unit: string;
  nature: string;
  desc: string;
  nric: string;
  name: string;
  svs: string;
  pes: string;
  status: string[];
  idate: string;
  itime: string;
  ilocation: string;
  involved: string;
  nok: string;
  nokdate: string;
  gsoc: string;
  esis: string;
  arm: string;
  ro: string;
};

type ContextType = {
  details: DetailsType;
  setDetails: React.Dispatch<React.SetStateAction<DetailsType>>;
};

const DetailsContext = createContext<ContextType | null>(null);

type ProviderTypes = {
  children: React.ReactNode;
};

export function DetailsProvider({ children }: ProviderTypes) {
  const [details, setDetails] = useState<DetailsType>({
    submit: false,
    platform: "ws",
    unit: "40SAR",
    nature: "",
    desc: "",
    nric: "",
    name: "",
    svs: "",
    pes: "",
    status: [],
    idate: "",
    itime: "",
    ilocation: "",
    involved: "",
    nok: "",
    nokdate: "",
    gsoc: "",
    esis: "",
    arm: "",
    ro: "",
  });

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
}

export function useDetails() {
  const context = useContext(DetailsContext);
  if (!context)
    throw new Error("useDetails must be used within DetailsContextProvider");
  return context;
}
