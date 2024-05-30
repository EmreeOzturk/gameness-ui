import React from "react";

type MissionCardProps = {
    title: string;
    description: string;
    image?: string;
    points: number;
    onClick?: () => void;
}

const MissionCard = () => {
  return <div>MissionCard</div>;
};

export default MissionCard;
