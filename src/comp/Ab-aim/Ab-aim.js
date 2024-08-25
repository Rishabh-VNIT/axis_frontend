import React from 'react';

const AboutAim = () => {
  return (
    <div className="font-inter antialiased" id="abam">
      <div className="p-4 lg:p-8 rounded-lg shadow-md">
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl lg:text-3xl text-center text-white">About Us</h2>
                <div className="w-6 h-1 bg-green-500 mx-auto"></div>
                <p className="text-lg lg:text-xl text-center leading-6 lg:leading-7 text-white">
                The AXIS'25 Campus Ambassador program is designed for students who wish to actively participate in and promote the AXIS'25 technical fest on their college campuses. The Campus Ambassador program is an excellent opportunity for students to actively engage with AXIS'25, gain valuable event management and promotion experience, and contribute to the success of the technical fest on their campus.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl lg:text-3xl text-center text-white">AIM</h2>
                <div className="w-6 h-1 bg-green-500 mx-auto"></div>
                <p className="text-lg lg:text-xl leading-6 text-center lg:leading-7 text-white">
                Our College Ambassador Program seeks to ignite a passion for leadership, innovation, and community-building among students. Through mentorship, networking, and hands-on experiences, we aim to nurture tomorrow's change-makers, providing a platform for them to amplify their voices, drive positive impact, and create lasting connections. Join us in shaping the future, one ambassador at a time.
                </p>
              </div>
            </div>
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutAim;
