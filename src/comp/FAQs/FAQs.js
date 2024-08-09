import React, { useRef, useState } from "react";
import "./faq.css";

const FaqsCard = ({ faq }) => {
  const answerElRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-5 border-b"id="faqs">
      <h4 className="cursor-pointer pb-3 flex items-center justify-between text-lg text-white font-medium" onClick={handleOpenAnswer}>
        {faq.q}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-500 ml-2 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d={isOpen ? "M20 12H4" : "M12 4v16m8-8H4"} />
        </svg>
      </h4>
      <div
        ref={answerElRef}
        className={`overflow-hidden transition-max-height duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <p className="text-white">{faq.a}</p>
      </div>
    </div>
  );
};

const FAQsSection = () => {
  const faqsList = [
    {
      q: "What skills can be gained through this program?",
      a: "They can gain valuable event management and promotion experience.",
    },
    {
      q: "Will all the participants receive a certificate?",
      a: "Only the participants having minimum required points will receive the Certificate.",
    },
    {
      q: "How long can candidates apply after we start the application process?",
      a: "Following the start of our application process, candidates will be able to submit their applications for up to three to four weeks.",
    },
    {
      q: "What incentives will I get from the program?",
      a: "The incentives you will get from the program are Internship Certificate, Exciting Prizes for top performing CA, Access to the all the Workshop, Merchandise, Free goodies and hampers form the sponsor.",
    },
    {
      q: "How many students can apply from a single college?",
      a: "Anyone can apply and no limit of application from any particular college.",
    },
    {
      q: "How many CAs are you planning to onboard this year?",
      a: "It will depend upon how many number of applications we receive and also on the selection process..",
    },
  ];

  return (
    <section className="faq-card-container max-w-screen-xl mt-6 mx-4 md:mx-auto px-4 md:px-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl text-white font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-lg md:max-w-lg md:mx-auto mt-2">
          Answered all frequently asked questions? Still confused? Feel free to contact us.
        </p>
      </div>
      <div className="mt-6 max-w-screen-md mx-auto">
        {faqsList.map((faq, idx) => (
          <FaqsCard key={idx} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQsSection;



 