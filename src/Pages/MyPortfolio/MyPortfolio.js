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
              <h2 class="text-4xl font-bold">
                As Salamu Alaykum <br />
              </h2>
              <h2 className=" text-5xl font-bold text-green-500">
                I am S. K. M Shadekul Islam{" "}
              </h2>
              <br />
              <h3>
                <span className=" text-3xl text-yellow-500">
                  Expert in Content Writing and Development
                </span>{" "}
              </h3>
              <p class="py-6 text-xl font-mono ">
                I am proficient in blog, article and web content writing. I am
                also good at SERP analysis and keyword research. I also do web
                development. The skills I have is HTML, CSS, Javascript, Python,
                Django, MySQL, MongoDB etc.
              </p>
              <p className="text-xl font-mono ">
                I am studying in Computer Science and Engineering Department at
                Daffodil International University.{" "}
              </p>
              <br />
              <p className="text-xl font-mono ">
                My dream is to be the{" "}
                <span className="text-red-500">Prime Minister</span> of
                Bangladesh one day.
              </p>
              <br />
              <br />
              <p className="text-3xl font-bold"> My Three Project </p> <br />
              <a
                href="https://shadekulshovo.github.io/webDay5Assignment/"
                target="_blank"
              >
                {" "}
                <span className="text-xl text-orange-500">
                  <p>
                    {" "}
                    <li>Project-3</li>
                  </p>
                </span>
              </a>
              <a href="https://shadekulshovo.github.io/iCoder/" target="_blank">
                {" "}
                <span className="text-xl text-orange-500">
                  <p>
                    {" "}
                    <li>Project-2</li>
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
                    <li>Project-1</li>
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
