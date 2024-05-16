type SmartBrandlyStoreProps = {
  hint: string;
  setHint: (status: any) => void;
  selectedModel: string;
  setSelectedModel: (status: any) => void;
  brandNames: any[];
  setBrandNames: (status: any) => void;
  selectedExtensions: any[];
  setSelectedExtensions: (status: any) => void;
  domainData: any[];
  setDomainData: (status: any) => void;
  contentUseCases: {
    id: number;
    text: string;
    info: string;
    image: string;
    alt: string;
    link: string;
  }[];
  listedDomains: any[];
  setListedDomains: (status: any) => void;
  numberOfDomains: 'Set Number of Brand Names';
  setNumberOfDomains: (status: any) => void;
  numberOfDomainOptions: any[];
  isUserPremium: boolean;
  setIsUserPremium: (status: boolean) => void;
  hintMonitor: string;
  setHintMonitor: (status: any) => void;
  currentHintBrandNames: any[];
  setCurrentHintBrandNames: (status: any) => void;
  clearCurrentHintBrandNames: (status: any) => void;
  isBrandNameRequestInProgress: boolean;
  setIsBrandNameRequestInProgress: (status: boolean) => void;
  isAvailabilityCheckInProgress: boolean;
  setIsAvailabilityCheckInProgress: (status: boolean) => void;
  isLoginModalOpen: boolean;
  setIsLoginModalOpen: (status: boolean) => void;
  session: any[];
  setSession: (session: any) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
};

interface ToolCardProps {
  id: number;
  title: string;
  info: string;
  label: string;
}
