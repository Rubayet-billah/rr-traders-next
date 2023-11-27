import { Dispatch, SetStateAction } from "react";

export interface ReusableModalProps {
  modalState?: boolean;
  setModalState?: Dispatch<SetStateAction<boolean>>;
  modalContent?: React.ReactElement;
  setModalContent?: Dispatch<SetStateAction<any>>;
}

export interface User {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  // Add other properties as needed
}
