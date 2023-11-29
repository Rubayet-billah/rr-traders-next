import { Dispatch, SetStateAction } from "react";

export interface ReusableModalProps {
  modalState?: boolean;
  setModalState?: Dispatch<SetStateAction<boolean>>;
  modalContent?: React.ReactElement;
  setModalContent?: Dispatch<SetStateAction<any>>;
}

export interface IUser {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  // Add other properties as needed
}

export interface ICategory {
  id: number;
  categoryName: string;
  categoryImage: string;
  categoryDescription: string;
  createdAt: string;
  updatedAt: string;
}
