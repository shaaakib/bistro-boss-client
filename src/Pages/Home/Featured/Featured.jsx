import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css';

export default function Featured() {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle subHeading={'check it ou'} heading={'featured items'} />

      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            repudiandae sequi tempora qui vero porro, vitae, modi id minus
            perspiciatis est eos quam voluptates cupiditate animi? Expedita
            pariatur quos animi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Totam, velit.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}
