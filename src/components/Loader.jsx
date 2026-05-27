import { TailSpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#050816]">

      <div className="text-center">

        <TailSpin
          height="80"
          width="80"
          color="#00ffff"
          ariaLabel="loading"
        />

        <p className="mt-6 text-cyan-400 text-xl">
          Initializing Portfolio...
        </p>

      </div>

    </div>
  );
};

export default Loader;