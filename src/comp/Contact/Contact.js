import React from 'react';

const ContactCard = ({ name, phoneNumber, email }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-lg border-2 border-blue-500 bg-transparent hover:bg-blue-100/50 dark:hover:bg-gray-700/50 transform hover:scale-105 transition-transform duration-300 ease-in-out backdrop-blur-sm">
      <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100 dark:bg-gray-700 mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </span>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h2>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        <a href={`tel:${phoneNumber}`} className="hover:underline">{phoneNumber}</a>
      </p>
      <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
        <a href={`mailto:${email}`} className="hover:underline">{email}</a>
      </p>
    </div>
  );
};

const contact = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-medium text-5xl text-blue-500 dark:text-blue-400 mb-2">Contact Us</p>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">We'd love to hear from you</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Chat to our friendly team.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <ContactCard
            name="Aditya Shahale"
            phoneNumber="+91 8956190786"
            email="aditya.shahale@axisvnit.in"
          />
          <ContactCard
            name="Ali Shadan"
            phoneNumber="+91 8408928792"
            email="ali.shadan@axisvnit.in"
          />
        </div>
      </div>
    </section>
  );
};

export default contact;
