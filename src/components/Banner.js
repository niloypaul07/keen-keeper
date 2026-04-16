import React from "react";
import { VscAdd } from "react-icons/vsc";

const Banner = () => {
  return (
    <section className=" py-16 md:py-24 px-6 rounded-3xl mt-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black text-base-content tracking-tight mb-6">
          Friends to keep close <br className="hidden md:block" />
          <span className=" text-[#244D3F]">in your life</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        
        <div className="flex justify-center">
          <button className="btn  bg-[#244D3F] btn-lg gap-2 shadow-lg text-white  ">
            <VscAdd className="text-2xl" />
            Add a Friend
          </button>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300">
            <h3 className="text-3xl font-[#244D3F] mb-1">12</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-base-content/50">
              Total Friends
            </p>
            
          </div>
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300 ">
            <h3 className="text-3xl font-[#244D3F] mb-1">3</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-base-content/50">
              On Track
            </p>
            
          </div>
          <div className="bg-base-100 p-6 rounded-2xl shadow-sm border border-base-300 ">
            <h3 className="text-3xl font-[#244D3F] mb-1">6</h3>
            <p className="text-xs font-bold uppercase tracking-wider text-base-content/50">
             Need Attention
            </p>
            
          </div>
          <div className="bg-base-100 ms:p-6 pt-6 rounded-2xl shadow-sm border border-base-300 ">
            <h3 className="text-3xl font-[#244D3F] mb-1">12</h3>
            <p className="text-xs uppercase tracking-wider font-bold text-base-content/50">
              Interactions This Month
            </p>
            
          </div>
          
        </div>
      </div>
      <hr className="border-[#E9E9E9] my-10"></hr>
    </section>
  );
};

export default Banner;
