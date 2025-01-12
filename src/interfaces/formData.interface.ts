import type { UseFormRegister } from "react-hook-form";
import { User } from ".";

export interface FormInputProps {
  name: keyof User;
  placeholder: string;
  register: UseFormRegister<User>;
  type?: string;
  error?: string;
}