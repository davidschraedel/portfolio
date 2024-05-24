// import headshotVector from "../assets/DAVID_SUBTRACTED_RING.svg";
import headshotVector from "../assets/DavidRingTwoLight.svg";

function Hero() {
  return (
    <>
      <div className="px-4 pb-6 pt-10 bg-gray-900 bg-gradient-to-tr from-yellow-950 dark:from-indigo-200 to-indigo-200 dark:to-yellow-950 ">
        <img
          className=" mx-auto md:p-3 lg:p-8 w-3/6 rounded-full max-h-[35rem]"
          src={headshotVector}
          alt="vector image of David Schraedel"
        />
      </div>
    </>
  );
}

export default Hero;
