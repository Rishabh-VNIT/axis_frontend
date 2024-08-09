import React from "react";
import neto from "./networking (1).png";
import goodies from "./goodies.png";
import mentor from "./mentoring.png";
import pass from "./ticket.png";
import certificate from "./certificate.png";
import mer from "./t-shirt-64.png"
import { ResponsibilityCard } from "../Card/Card";

const whats = () => {
  return (
    <section className=" text-white" id="whats">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            What's in it for you?
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="text-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:scale-105 hover:no-underline flex flex-col items-center justify-center"
            href="/"
          >
            <img src={certificate} alt=""/>

            <h2 className="mt-4 text-xl font-bold text-white">Certificate</h2>
            
            <div className="mt-1 text-sm text-gray-300">
              Each ambassador would be getting certificates from AXIS, VNIT Nagpur based on performance.
            </div>
          </a>

          <a
            className="text-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:scale-105 hover:no-underline flex flex-col items-center justify-center"
            href="/"
          >
            <img src={goodies} alt="" />

            <h2 className="mt-4 text-xl font-bold text-white">
              Exciting Prizes
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Top performing CA's will be given AXIS goodies.
            </p>
          </a>

          <a
            className="text-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:scale-105 hover:no-underline flex flex-col items-center justify-center"
            href="/"
          >
            <img src={neto} alt="" />

            <h2 className="mt-4 text-xl font-bold text-white">Networking</h2>

            <p className="mt-1 text-sm text-gray-300">
              CAs are from around the country, forming a diverse network.
            </p>
          </a>

          <a
            className="text-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:scale-105 hover:no-underline flex flex-col items-center justify-center"
            href="/"
          >
            <img src={mentor} alt=""  />

            <h2 className="mt-4 text-xl font-bold text-white">
              Guidance and Mentoring
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Each CA is mentored personally by a team member from AXIS VNIT Nagpur.
            </p>
          </a>

          <a
            className="text-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:scale-105 hover:no-underline flex flex-col items-center justify-center"
            href="/"
          >
            <img src={pass} alt="" />

            <h2 className="mt-4 text-xl font-bold text-white">
              Access to the all the Workshop
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Best performing CAs will get AXIS 2024 passes and will be invited to the VNIT campus.
            </p>
          </a>

          <a
            className="text-center rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:scale-105 hover:no-underline flex flex-col items-center justify-center"
            href="/"
          >
            <img src={mer} alt=""/>

            <h2 className="mt-4 text-xl font-bold text-white">
              Merchandise
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Best performing CA's will get EXCLUSIVE AXIS'24 Merchandise
            </p>
          </a>
        </div>

      </div>
    </section>
  );
};

export default whats;
