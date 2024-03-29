import { createContext, useState, useContext } from "react";

export type TekongDetailsType = {
  submit: boolean;
  platform: string;
  involved: string;
  nature: string;
  desc: string;
  nric: string;
  name: string;
  svs: string;
  fourd: number;
  pes: string;
  status: string[];
  idate: string;
  itime: number;
  ilocation: string;
  injury: string;
  actions: string;
  nok: string;
  nokdate: string;
  noktime: string;
  gsoc: string;
  esis: string;
  arm: string;
  ro: string;
};

type ContextType = {
  tekongDetails: TekongDetailsType;
  setTekongDetails: React.Dispatch<React.SetStateAction<TekongDetailsType>>;
};

const TekongContext = createContext<ContextType | null>(null);

type ProviderTypes = {
  children: React.ReactNode;
};

export function TekongProvider({ children }: ProviderTypes) {
  const [tekongDetails, setTekongDetails] = useState<TekongDetailsType>({
    submit: false,
    platform: "ws",
    nature: "",
    idate: "",
    itime: 0,
    ilocation: "",
    desc: "",
    nric: "",
    name: "",
    fourd: 0,
    svs: "NSF",
    pes: "A",
    involved: "",
    injury: "",
    actions: "",
    status: [],
    nok: "",
    nokdate: "",
    noktime: "",
    gsoc: "",
    esis: "",
    arm: "",
    ro: "",
  });

  return (
    <TekongContext.Provider value={{ tekongDetails, setTekongDetails }}>
      {children}
    </TekongContext.Provider>
  );
}

export function useTekongDetails() {
  const context = useContext(TekongContext);
  if (!context)
    throw new Error("useTekongDetails must be used within TekongProvider");
  return context;
}
