import Paragraph from "../Paragraph";

function Body() {
  const paragraphs = [
    {
      id: crypto.randomUUID(),
      text: "Descriptions of Me: Analytical, Diplomatic, Creative, Open-minded, Conscientious, Humorous, Curious, Honest, Imaginative, Perceptive, Respectful, Flexible, Authentic.",
    },
    {
      id: crypto.randomUUID(),
      text: "What other say: Level-headed, honest, real, detail-oriented, a good listener. thoughtful, sincere, calm, selective, passion.",
    },
    {
      id: crypto.randomUUID(),
      text: "Skills: Communication: editing, collaborating, listening, negotiation, mediation/conflict resolution, advocacy/understanding for the unseen, faciliting meetings. Creativity: AV production, design, brainstorming/ideation, visual arts, music composition, high artistic standards. Organization/Management/Leadership: flowchart, outline, project management, understand and keep policies and procedures, listen to ideas and reach consensus, identify goals or tasks to be accomplished. Tech: assemble components, handle instruments, software systems and computer language, data management, operating equipment, adapting to new tech. Analysis: identify problems/goals/conclusions, evaluate and synthesize data.",
    },
    {
      id: crypto.randomUUID(),
      text: "Hobbies: reading, hiking, cooking, contemplation, explorative discussion, music production, movies, photography.",
    },
    {
      id: crypto.randomUUID(),
      text: "Favorite Books: Piranesi - Susanna Clarke, Teachings on Love - Thich Nhat Hanh, Morality - Jonathan Sachs, How to Know a Person - David Brooks, Greater Than the Sum of Our Parts - Richard C. Schwartz.",
    },
    {
      id: crypto.randomUUID(),
      text: "movies/shows: 1917, Saving Private Ryan, The Farewell, Hunt for the Wilderpeople, A Silent Voice, Spirited Away.",
    },
  ];

  let paragraphComponents = paragraphs.map((p) => {
    return <Paragraph key={p.id} text={p.text} />;
  });

  return (
    <>
      <div className="w-full py-20 mx-auto">{paragraphs && paragraphComponents}</div>
    </>
  );
}

export default Body;
