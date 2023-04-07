import React from "react";

const Feedback = () => {
  return (
    <div
      name="feedback"
      className="w-full h-screen bg-gradient-to-b from-white to-blue-500 p-4 "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Complain or Praise :D
          </p>
          <p className="py-6 text-2xl font-semibold">Share your kind words </p>
        </div>

        <div className=" flex justify-center items-center text-black">
          <form
            action="https://getform.io/f/9ff93ea3-5a6d-4c9b-8030-e071700a8465"
            target="_blank"
            rel="noferrer"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md  focus:outline-black"
            ></textarea>

            <button className="text-black-500 font-semibold bg-gradient-to-b  from-cyan-500 to-purple-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
