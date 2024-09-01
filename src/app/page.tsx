import Accordion from "@components/Accordion";
import Image from "next/image";

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
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  return (
    <div className="relative flex items-center justify-center px-6 py-20 min-h-dvh">
      <Image
        className="absolute top-0 hidden w-full -z-10 sm:block"
        src="images/background-pattern-desktop.svg"
        alt="Abstract graphic"
        width={1440}
        height={320}
      />
      <Image
        className="absolute top-0 w-full -z-10 sm:hidden"
        src="images/background-pattern-mobile.svg"
        alt="Abstract graphic"
        width={1440}
        height={320}
      />

      <main className="flex flex-col max-w-lg p-4 bg-white rounded-xl">
        <div className="flex items-center gap-4 px-2 py-4">
          <svg
            className="size-6 sm:size-8"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            fill="none"
            viewBox="0 0 40 41"
          >
            <path
              fill="#AD28EB"
              d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
            />
          </svg>
          <h1 className="text-3xl font-bold sm:text-5xl">FAQs</h1>
        </div>

        <div className="divide-y-[1px]">
          {questions.map(({ question, answer }) => (
            <Accordion key={question} title={question}>
              <p>{answer}</p>
            </Accordion>
          ))}
        </div>
      </main>
      <footer className="absolute flex flex-col justify-center w-full gap-1 text-sm text-center bottom-4 sm:text-base sm:flex-row">
        <div>
          Challenge by{" "}
          <a
            className="font-semibold hover:underline text-purple"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          .
        </div>
        <div>
          Coded by{" "}
          <a className="font-semibold hover:underline text-purple" href="https://jrddp.me">
            Jared Peters
          </a>
          .
        </div>
      </footer>
    </div>
  );
}
