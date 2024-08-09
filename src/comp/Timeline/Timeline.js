// Timeline.js
import React from 'react';

const Timeline = () => {
  return (
    <div className="relative font-inter antialiased"id="timeline">
      <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="flex items-center justify-center mt-9">
          <p className="text-7xl text-fuchsia-800 font-caveat font-bold">Timeline</p>
        </div>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-4 py-4">
          <div className="flex flex-col justify-center divide-y divide-slate-200 ">
            <div className="w-full max-w-3xl mx-auto"> 
              {/* Vertical Timeline #1 */}
              <div className="-my-2">
                {/* Item #1 */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  {/* Purple label */}
                  <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The origin</div>
                  {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2020</time>
                    <div className="text-xl font-bold text-fuchsia-800">Acme was founded in Milan, Italy</div>
                  </div>
                  {/* Content */}
                  <div className="text-white">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                </div>
                {/* Item #2 */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  {/* Purple label */}
                  <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The milestone</div>
                  {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</time>
                    <div className="text-xl font-bold text-fuchsia-800">Reached 5K customers</div>
                  </div>
                  {/* Content */}
                  <div className="text-white">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                </div>
                {/* Item #3 */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  {/* Purple label */}
                  <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The acquisitions</div>
                  {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2022</time>
                    <div className="text-xl font-bold text-fuchsia-800">Acquired various companies, including Technology Inc.</div>
                  </div>
                  {/* Content */}
                  <div className="text-white">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                </div>
                {/* Item #4 */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  {/* Purple label */}
                  <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The IPO</div>
                  {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-800 bg-emerald-100 rounded-full">May, 2023</time>
                    <div className="text-xl font-bold text-fuchsia-800">Acme went public at the New York Stock Exchange</div>
                  </div>
                  {/* Content */}
                  <div className="text-white">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-3xl mx-auto">
              {/* Vertical Timeline #2 */}
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {/* Item #1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timeline;
