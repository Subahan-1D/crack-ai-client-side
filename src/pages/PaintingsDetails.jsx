import React from "react";
import { useLoaderData } from "react-router-dom";

const PaintingsDetails = () => {
  const data = useLoaderData();
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <img className="w-full" src={data?.url} alt="" />
        </div>
        <div className="space-y-4">
            <h2 className="text-2xl">{data?.title}</h2>
            <p>{data?.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default PaintingsDetails;
