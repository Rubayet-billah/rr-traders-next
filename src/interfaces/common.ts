import { Dispatch, SetStateAction } from "react";

export interface ReusableModalProps {
  modalState?: boolean;
  setModalState?: Dispatch<SetStateAction<boolean>>;
  modalContent?: React.ReactElement;
  setModalContent?: Dispatch<SetStateAction<any>>;
}
