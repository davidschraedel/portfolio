import Paragraph from "../Paragraph";
import circle from "../../assets/CircleTwo.svg";

function Body() {
  const paragraphs = [
    {
      id: crypto.randomUUID(),
      text: "Music, Design, Film, and Philosophies Blog.",
    },
  ];

  let paragraphComponents = paragraphs.map((p) => {
    return <Paragraph key={p.id} text={p.text} />;
  });

  return (
    <>
      <div className="w-full py-20 mx-auto">
        {paragraphs && paragraphComponents}
        <img className="mx-auto w-1/6 my-10" src={circle} />
        <img className="mx-auto w-1/6 my-10" src={circle} />
        <img className="mx-auto w-1/6 my-10" src={circle} />
      </div>
    </>
  );
}

export default Body;
