import { RegisterForm } from "@/components/forms/RegisterForm";

export const metadata = {
  title: 'Registrate en WePlot!',
  description: 'Registrate en WePlot!',
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 fixed left-0 h-full overflow-hidden">
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="relative z-10 p-8">
            <h1 className="text-white font-bold text-4xl font-sans">WePlot</h1>
            <p className="text-white mt-1">The most popular peer to peer lending at SEA</p>
            <button
              type="button"
              className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
            >
              Read More
            </button>
          </div>

          <div className="absolute bottom-0 left-0 w-64 h-64 border-4 rounded-full border-opacity-30 border-t-8 transform -translate-x-1/2 translate-y-1/4"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 border-4 rounded-full border-opacity-30 border-t-8 transform translate-y-1/3"></div>
          <div className="absolute top-0 right-0 w-64 h-64 border-4 rounded-full border-opacity-30 border-t-8 transform translate-x-1/2 -translate-y-1/4"></div>
          <div className="absolute top-1/4 right-0 w-64 h-64 border-4 rounded-full border-opacity-30 border-t-8 transform translate-x-1/3"></div>
        </div>
      </div>

      <div className="flex-1 md:ml-[50%] min-h-screen bg-white">
        <RegisterForm />
      </div>
    </div>
  );
}