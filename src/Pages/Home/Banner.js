import React from "react";

const Banner = () => {
  return (
    <div>
      <div class="hero ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/XJK5tC1/pexels-pixabay-51383-removebg-preview.png" />
          <div className=" max-w-3xl">
            <h1 class="text-5xl font-bold">Camera Parts </h1>
            <h2 class="text-3xl">For All Of Photography Enthusiast.</h2>
            <h3 class="text-2xl font-bold">Choose Which PARTAS you NEED!!!</h3>

            <p class="py-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium dignissimos possimus molestiae corporis quod illum
              saepe? Quod earum cumque ipsam pariatur nisi excepturi delectus
              dignissimos!
            </p>
            <button class="btn btn-primary">Get an Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
