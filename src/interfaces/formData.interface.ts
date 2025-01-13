import type { UseFormRegister } from "react-hook-form";
import { User } from ".";

export interface FormInputProps {
  name: keyof User;
  register: UseFormRegister<User>;
  label: string;
  isRequired?: boolean;
  type?: string;
  error?: string;
}