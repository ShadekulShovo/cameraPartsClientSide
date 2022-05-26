import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="px-14">
        <div className="p-3">
          <p className="font-bold text-3xl">
            1 How will you improve the performance of a React Application?
          </p>
          <p className="text-2xl">
            <span className="font-bold text-xl">
              {" "}
              i. Using Immutable Data Structures
            </span>
            <br />
            <span className="font-bold text-xl">
              ii. Function/Stateless Components and React.PureComponent
            </span>
            <br />
            <span className="font-bold text-xl">
              iii.Using Production Mode Flag in Webpack
            </span>
            <br />
          </p>
        </div>
      </div>

      <div className="px-14 py-10">
        <div className=" p-3">
          <h1 className="font-bold text-3xl">
            2 What are the different ways to manage a state in a React
            application?
          </h1>
          <ol className="text-2xl list-disc">
            <li>
              <span className="font-bold text-xl">Local (UI) state</span> –
              Local state is component-managed data. React's useState hook
              manages local state. Local state is used to show or hide a modal
              component or to track values for a form component, such as form
              submission and input values.
            </li>

            <li>
              <span className="font-bold text-xl">Global (UI) state</span> –
              Global state is multi-component data. Global state is needed to
              retrieve and change app data anywhere or in different components.
              Authenticated user state is global state. If a user is logged into
              our app, we must get and alter their info. Sometimes small states
              go worldwide.
            </li>

            <li>
              <span className="font-bold text-xl">Server state</span> – External
              server data must be linked into our UI. Server state is easy but
              difficult to manage with local and global UI state. When fetching
              or updating data from an external server, loading and error status
              must be controlled.
            </li>

            <li>
              <span className="font-bold text-xl">URL state</span> – Pathname
              and query parameters on URLs. URL state is an often-missed state
              category. Many of our application's primary elements rely on URL
              state.
            </li>
          </ol>
        </div>
      </div>

      <div className="px-14 py-10 ">
        <div className="p-3">
          <h1 className="font-bold text-3xl">
            3 How does prototypical inheritance work
          </h1>
          <p className=" text-2xl">
            JavaScript is confusing for class-based language developers (like
            Java or C++) because it's dynamic and lacks a class implementation
            (the class keyword is introduced in ES2015, but is syntactical
            sugar, JavaScript remains prototype-based).
            <br />
            JavaScript only has object inheritance. Each object's private
            attribute points to its prototype. This prototype object has a
            prototype of its own, and so on until null. Null has no prototype
            and operates as the chain's last link.
            <br />
            Nearly all objects in JavaScript are instances of Object, which has
            null as its prototype.
          </p>
        </div>
      </div>

      <div className="px-14 py-10">
        <div>
          <p className="font-bold text-3xl">
            4. Why you do not set the state directly in React. For example, if
            you have const [products, setProducts] = useState([]). Why you do
            not set products = [...] instead, you use the setProducts
          </p>
          <div className="">
            <p className="text-2xl py-5">
              Never directly change state for these reasons: SetState() may
              overwrite your update if you change it directly. Directly updating
              the state doesn't instantly affect this.state. Instead, it
              generates a pending state transition that returns the current
              value. All components lose state control. Class-based and
              functional components, including hooks, should be known. Instead
              of studying React hooks directly, learn class-based components
              first. You may use useState hook as much as you need to use
              variables. Example: There's an email and password form. Each will
              have its own state variable.
            </p>
          </div>
        </div>
      </div>

      <div className="px-14 py-10 ">
        <div className=" p-3">
          <div>
            <h1 className="font-bold text-3xl">
              5. You have an array of products. Each product has a name, price,
              description, etc. How will you implement a search to find products
              by name?
            </h1>
            <ul className=" text-2xl">
              <li>1. First, I stringify the products object's data.</li>
              <li>2. Then construct a mongo database server and a POST API.</li>
              <li>
                3. When this data are sore this mongo data base the we can use
                it.
              </li>
              <li>4. Then make a '/product/:name' API using get Method .</li>
              <li>5. we can also collected this data.</li>
              <li>
                6. Then we can use useState to get this data, MAP data, and UI.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-14 py-10">
        <div className=" p-3">
          <p className="font-bold text-3xl">
            6 What is a unit test? Why should write unit tests?
          </p>
          <p className=" text-2xl">
            Developers use unit testing to test individual modules for bugs.
            It's about independent module functionality. Isolate each system
            unit to detect, evaluate, and remedy issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
