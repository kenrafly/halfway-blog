import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center item-center rounded-tl-3xl rounded-br-3xl">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Want to know more about the author of this site?
        </h2>
        <p className="text-gray-500 my-2">Check out his intagram!</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-t-xl rounded-bl-none"
        >
          <a
            href="https://www.instagram.com/kenrafly/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to visit
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://lh4.googleusercontent.com/proxy/TIEzkrDX46iMbqGhwPdrlF1A1jy-Wa9eHj6WNX5FMaSu76MY32kzM72TdtRzsQySqVcvc_Xk_Dexyi7xWBGT8HM_4JLIlQNpRS7LpDdBHIfpAGGSxtGC2TAf76gWsjLDrIAH1e7-BImHORGwAS2SS9A1C4UzPtjdAHjBUlLxuBAd3lvbGzuz1BNf63wAcGel08EUl6pN"
          alt=""
        />
      </div>
    </div>
  );
};

export default CallToAction;
