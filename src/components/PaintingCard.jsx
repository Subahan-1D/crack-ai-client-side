import React from 'react';
import { Link } from 'react-router-dom';

const PaintingCard = ({painting}) => {
    return (
      <div className="relative hover:mt-2 transition-all duration-200">
        <img className="rounded-lg" src={painting?.url} alt="" />
        <div className="detail absolute transition-all duration-200 inset-0 w-full h-full hover:opacity-80 bg-stone-600 text-white flex-col gap-3 opacity-5 rounded-lg flex justify-center items-center">
          <p className="text-2xl text-center">{painting?.title}</p>
          <button>
            <Link to={`/paintings/${painting?._id}`}>Details</Link>
          </button>
        </div>
      </div>
    );
};

export default PaintingCard;