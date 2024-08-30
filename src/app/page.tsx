import Accordion from "@components/Accordion";

export default function Home() {
  type Question = {
    question: string;
    answer: string;
  };

  const questions: Question[] = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-dvh">
        <h1>FAQs</h1>

        {questions.map(({ question, answer }) => (
          <Accordion key={question} title={question}>
            <p>{answer}</p>
          </Accordion>
        ))}
      </main>
      <footer className="absolute w-full text-center bottom-4">
        Challenge by{" "}
        <a
          className="hover:underline"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="hover:underline" href="#">
          Your Name Here
        </a>
        .
      </footer>
    </>
  );
}
