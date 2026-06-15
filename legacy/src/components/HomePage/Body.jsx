import Paragraph from "../Paragraph";

function Body() {
  const paragraphs = [
    {
      id: crypto.randomUUID(),
      text: 'Flexible and receptive, seeking other perspectives. curiosity. A good listener, detail-oriented, and level-headed. "Never said the same thing twice."',
    },
    {
      id: crypto.randomUUID(),
      text: "BYU IS Alumni ChoiceAward for Integrity. Negotiator, collaborator. UX conscious Developer. Creative. Musician. Open-minded. Reader. I always have advice on how to be unique.",
    },
    {
      id: crypto.randomUUID(),
      text: "UX conscious. collaboration. sweating the details. versatility. negotiation. perceptiveness.",
    },
  ];

  let paragraphComponents = paragraphs.map((p) => {
    return <Paragraph key={p.id} text={p.text} />;
  });

  return (
    <>
      <div className="w-full py-20 mx-auto ">{paragraphs && paragraphComponents}</div>
    </>
  );
}

export default Body;
