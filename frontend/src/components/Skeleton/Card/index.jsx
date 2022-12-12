import React from 'react';

function CardSkeleton() {
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl animate-pulse">
      <figure>
        <div className=" bg-gray-300 h-40 w-full rounded-md "></div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <div className="w-36 bg-gray-300 h-6 rounded-md "></div>{' '}
          <div className="">
            <div className="w-20 bg-gray-300 h-6 rounded-md "></div>
          </div>
        </h2>
        <div className="w-full bg-gray-300 h-1 rounded-md "></div>
        <div className="w-full bg-gray-300 h-1 rounded-md "></div>
        <div className="w-full bg-gray-300 h-1 rounded-md "></div>
        <div className="w-full bg-gray-300 h-1 rounded-md "></div>
        <div className="w-full bg-gray-300 h-1 rounded-md "></div>
        <div className="w-full bg-gray-300 h-1 rounded-md "></div>

        <div className="card-actions justify-between items-center mt-3">
          <div className="w-20 bg-gray-300 h-6 rounded-md "></div>
          <div className="w-full bg-gray-300 h-10 rounded-md "></div>
        </div>
      </div>
    </div>
  );
}

export default CardSkeleton;
