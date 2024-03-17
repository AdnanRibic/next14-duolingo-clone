import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/banner-llm.svg"
            alt="Croatian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          Hallucination in Large Language Models
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/certification-exam.svg"
            alt="Croatian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          AI-900: Azure AI Fundamentals
        </Button>
        <Button size="lg" variant="ghost" className="w-full">
          <Image
            src="/certification-exam.svg"
            alt="Croatian"
            height={32}
            width={40}
            className="mr-4 rounded-md"
          />
          AI-102: Designing and Implementing AI Solution
        </Button>
      </div>
    </footer>
  );
};
