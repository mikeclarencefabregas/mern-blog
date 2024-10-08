import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <div
      className="flex flex-col sm:flex-row p-3 border border-teal-400 justify-center items-center 
      rounded-tl-3xl rounded-br-3xl text-center"
    >
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want more to learn javasctipt?</h2>
        <p className="text-gray-500 my-2">Click this link</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            Google
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DmLCy9PSJfFqO55mNTYOQLx3x8THsbokkw&s" />
      </div>
    </div>
  );
};

export default CallToAction;
