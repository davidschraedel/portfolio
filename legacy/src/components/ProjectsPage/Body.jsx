import Paragraph from "../Paragraph";
import stopwatch from "../../assets/portfolio/stopwatch/clockflower.svg";
import familySense from "../../assets/portfolio/familysense/Logo.svg";
import { Link } from "react-router-dom";

function Body() {
  const paragraphs = [
    {
      id: crypto.randomUUID(),
      text: "These are my projects.",
    },
    {
      id: crypto.randomUUID(),
      text: "Another.",
    },
  ];

  let paragraphComponents = paragraphs.map((p) => {
    return <Paragraph key={p.id} text={p.text} />;
  });

  return (
    <>
      {/* <div className="w-full py-20 mx-auto">{paragraphs && paragraphComponents}</div> */}

      <h3 className="w-full pb-6 pt-8 mx-auto text-center text-2xl font-semibold">StopWatch</h3>
      <Link
        className="block rounded-full mb-10 w-1/2 sm:w-1/3 mx-auto"
        to={"https://davidschraedel.github.io/stopwatch/"}
        target="_blank">
        <img className="mx-auto" src={stopwatch} alt="stopwatch logo" />
      </Link>

      <h3 className="w-full pb-6 pt-8 mx-auto text-center text-2xl font-semibold">Family Sense</h3>
      <Link className="block rounded-full mb-10 w-1/2 sm:w-1/3 mx-auto" target="_blank">
        <img className="mx-auto" src={familySense} alt="stopwatch logo" />
      </Link>
    </>
  );
}

export default Body;
