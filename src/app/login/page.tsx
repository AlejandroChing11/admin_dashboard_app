import { LoginForm } from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-blue-400 flex justify-center items-center h-full">
      <div className="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
      <div className="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
      <form className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <div>
          <p className="text-3xl w-80 font-bold text-gray-700 text-center mb-4">
            Ingresar a WePlot
          </p>
        </div>
        <LoginForm />
        <div
          className="flex justify-center items-center mt-4"
        >
          <span className="text-sm text-slate-700">
            ¿Olvidaste tu contraseña?
            <span className="text-blue-500 ml-2 cursor-pointer">¡Recuperala!</span>
          </span>
        </div>
      </form>
      <div className="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
      <div className="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
    </div>
  );
}