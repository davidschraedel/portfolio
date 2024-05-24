import Hero from "./Hero";
import NavBar from "./NavBar";

function Head() {
  return (
    <>
      <div className="bg-offWhite dark:text-offWhite dark:bg-gray-900 text-center">
        <Hero />
        <h1 className="text-3xl  sm:text-[2.5rem] pt-10 sm:pt-14  sm:pb-4">David Schraedel</h1>
        <NavBar />
      </div>
    </>
  );
}

export default Head;
