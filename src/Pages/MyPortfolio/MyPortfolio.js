import React from "react";

const MyPortfolio = () => {
  return (
    <div>
      <div>
        <div class="hero  lg:h-[80vh] ">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card  bg-base-100 ">
              <figure class="px-10 pt-10">
                <img
                  src="https://i.ibb.co/0DcXmpt/IMG-1003.jpg"
                  alt="Shoes"
                  class="rounded-xl"
                />
              </figure>
            </div>

            <div className=" max-w-3xl">
              <h1 class="text-5xl font-bold">
                HELLO' THIS IS <br />
                Shadekul Shovo <br />
                <span className=" text-3xl">Expert in Development</span>{" "}
              </h1>
              <p class="py-6 text-xl font-mono ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                est! Iusto provident, fugiat molestias quia qui illum totam
                quae, reiciendis, ullam laudantium nesciunt accusantium nostrum
                officiis nemo voluptatem eum consectetur?
              </p>
              <p className="text-xl font-mono ">
                I am studying in Computer Science and Engineering Department at
                Daffodil International University.{" "}
              </p>
              <br />
              <p className="text-xl font-mono ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda ipsum soluta dicta quam itaque explicabo!
              </p>

              <br />
              <br />
              <p className="text-3xl font-bold"> My Three Project </p>
              <a
                href="https://shadekulshovo.github.io/webDay5Assignment/"
                target="_blank"
              >
                {" "}
                <span className="text-xl text-orange-500">
                  <p>
                    {" "}
                    <li>Projec-1</li>
                  </p>
                </span>
              </a>
              <a href="https://shadekulshovo.github.io/iCoder/" target="_blank">
                {" "}
                <span className="text-xl text-orange-500">
                  <p>
                    {" "}
                    <li>Projec-2</li>
                  </p>
                </span>
              </a>
              <a
                href="https://shadekulshovo.github.io/webDay16Assignment/"
                target="_blank"
              >
                {" "}
                <span className="text-xl text-orange-500">
                  <p>
                    {" "}
                    <li>Projec-3</li>
                  </p>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
