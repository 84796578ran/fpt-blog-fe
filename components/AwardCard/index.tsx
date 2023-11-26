import React from "react";
import Image from "next/image";
import { UserAwards } from "@/utils/types"; // Import the type for user awards
//import TrophyIcon from "@image/trophy.png"; // Import an icon for the award, replace with your own
import Button from "@/components/Button";

interface IProps {
 value: UserAwards;
}

function AwardCard({ value }: IProps) {
  return (
    <div className="md:max-w-[calc((100%-60px)/3)] sm:w-full rounded-lg overflow-hidden w-full drop-shadow-lg shadow-lg">
      <div className="relative h-[200px]">
        {/* Assuming there is an image associated with the award, replace with your own */}
       
      </div>
      <div className="w-full flex gap-2 flex-col p-4">
      
       
        <div className="w-full flex justify-between items-center">
          <Button
            textContent="Details"
            icon="arrowRight"
            iconPosition="right"
            backgroundColor="bg-[#0066B2]"
            // Assuming there is a route for the award details page, replace with your own
            href={`/awards/detail/${value.award_id}`}
  
            tailwind="hover:opacity-80"
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default AwardCard;
