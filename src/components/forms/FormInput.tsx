import { FormInputProps } from "@/interfaces";

export function FormInput({
  name,
  placeholder,
  register,
  type = "text",
  error
}: FormInputProps) {
  return (
    <>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <input
          type={type}
          className="pl-2 outline-none border-none flex-grow"
          {...register(name, { required: `El campo ${placeholder} es obligatorio` })}
          placeholder={placeholder}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </>
  )
}


