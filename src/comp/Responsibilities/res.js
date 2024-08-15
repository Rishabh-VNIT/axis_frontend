import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const displayText = isTruncated ? text.split(' ').slice(0, maxLength).join(' ') : text;

  return (
    <div>
      <p style={{ color: 'white' }}>{displayText}</p>
      {text.split(' ').length >= maxLength && (
        <button onClick={toggleTruncate} className='text-white'>
          {isTruncated ? 'Read More' : 'Read Less'}
        </button>
      )}
    </div>
  );
};

const ResponsibilityCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-opacity-80 block rounded-lg border shadow-xl border-gray-800 p-4 sm:p-6 m-2 hover:scale-105 duration-150 transform cursor-pointer transition hover:border-pink-500/10 hover:shadow-pink-500/10" id="res">
      <img className="w-36 sm:w-40 h-32 sm:h-36 object-fill mx-auto mb-4" src={imageUrl} alt={title} />
      <h2 className="text-xl sm:text-2xl text-white font-semibold mb-2"><b>{title}</b></h2>
      <ReadMore text={description} maxLength={10} />
    </div>
  );
};

const ResponsibilitiesSection = () => {
  const responsibilities = [
    {
      title: "Promotion",
      description: "As a campus ambassador, your primary duty is to ignite enthusiasm and awareness about the technical fest. This entails employing a mix of marketing techniques, both online and offline, to ensure the event gains widespread exposure, and all students on campus are well-informed about the fest's details, schedule, and offerings.",
      imageUrl: `${process.env.PUBLIC_URL}/final_undraw_energizer.png`,
    },
    {
      title: "Recruitment",
      description: "Your role revolves around motivating fellow students to actively participate in the technical fest. This includes reaching out to potential participants, forming teams, and recruiting dedicated volunteers who can contribute to the fest's organization and successful execution. Your objective is to maximize student involvement.",
      imageUrl:`${process.env.PUBLIC_URL}/final_undraw_social.png`,
    },
    {
      title: "Event Coordination",
      description: " To ensure the fest runs seamlessly, you will play a pivotal role in planning and orchestrating various events, workshops, and competitions. This involves coordinating schedules, organizing venues, and ensuring that all activities progress as scheduled to create a positive experience for attendees.",
      imageUrl:`${process.env.PUBLIC_URL}/final_undraw_join.png`,
    },
    {
      title: "Content Creation",
      description: " Crafting engaging content is fundamental to building anticipation and excitement for the technical fest. You will be responsible for generating blog posts, videos, social media updates, and other captivating content to showcase the fest's unique technical challenges, innovations, and activities.",
      imageUrl: `${process.env.PUBLIC_URL}/final_undraw_projections.png`,
    },
    {
      title: " Logistics and Support",
      description: "In addition to your promotional and recruitment efforts, you will also assist with the practical aspects of the fest. This includes tasks such as venue setup, equipment readiness, and providing technical support to participants during competitions and challenges. Your role is to ensure a seamless experience for all involved.",
      
      imageUrl: `${process.env.PUBLIC_URL}/final_undraw_sharing.png`,
    },
    {
      title: "Task Completion and Incentives",
      description: "When you successfully complete your assigned tasks within the specified timeframes, you will earn points and have the opportunity to receive incentives as recognition for your dedicated efforts.",
      imageUrl:`${process.env.PUBLIC_URL}/final_undraw_solution_mindset.png`,
    }, 
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-opacity-80">
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-6 sm:mt-10 mb-4 sm:mb-10">Responsibilities of CA</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {responsibilities.map((responsibility, index) => (
            <ResponsibilityCard
              key={index}
              title={responsibility.title}
              description={responsibility.description}
              imageUrl={responsibility.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResponsibilitiesSection;




