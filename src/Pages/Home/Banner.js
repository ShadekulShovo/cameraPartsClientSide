import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="hero ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/XJK5tC1/pexels-pixabay-51383-removebg-preview.png" />
          <div className=" max-w-3xl">
            <h1 class="text-5xl font-bold">Camera Parts</h1> <br />
            <h2 class="text-3xl">For All Of Photography Enthusiast.</h2>
            <h3 class="text-2xl font-bold">Choose Which PARTS you NEED!!!</h3>
            <p class="py-6">
              Show off your unique style with the best lenses and camera parts
              created by featured artists and influencers!!!
            </p>
            <button class="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
