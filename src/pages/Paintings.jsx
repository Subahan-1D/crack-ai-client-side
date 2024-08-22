import React from "react";
import { useLoaderData } from "react-router-dom";
import PaintingCard from "../components/PaintingCard";

const Paintings = () => {
  const data = useLoaderData();
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5">
        {
            data.map(painting => <PaintingCard key={painting._id} painting={painting}></PaintingCard>)
        }

      </div>
    </div>
  );
};

export default Paintings;
