import React from 'react';

function Card({ brand, title, price, tag, onClick, image, loading }) {
  const animation = loading ? 'animate-pulse' : '';

  return (
    <div className={`card card-compact w-80 bg-base-100 shadow-xl ${animation} `}>
      <figure>
        {loading ? (
          <div className=" bg-gray-300 h-40 w-full rounded-md "></div>
        ) : (
          <img src={image} alt={title} />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {loading ? <div className="w-36 bg-gray-300 h-6 rounded-md "></div> : brand}

          {loading ? (
            <div className="w-20 bg-gray-300 h-6 rounded-md "></div>
          ) : (
            <div className="badge badge-secondary">{tag}</div>
          )}
        </h2>
        {loading ? (
          <>
            <div className="w-full bg-gray-300 h-1 rounded-md "></div>
            <div className="w-full bg-gray-300 h-1 rounded-md "></div>
            <div className="w-full bg-gray-300 h-1 rounded-md "></div>
            <div className="w-full bg-gray-300 h-1 rounded-md "></div>
            <div className="w-full bg-gray-300 h-1 rounded-md "></div>
            <div className="w-full bg-gray-300 h-1 rounded-md "></div>
          </>
        ) : (
          <p>{title}</p>
        )}

        <div className="card-actions justify-between items-center mt-3">
          {loading ? (
            <>
              <div className="w-20 bg-gray-300 h-6 rounded-md "></div>
              <div className="w-full bg-gray-300 h-10 rounded-md "></div>
            </>
          ) : (
            <>
              <h6 className="text-xl font-semibold">{price}</h6>
              <button
                onClick={onClick}
                className="btn btn-primary capitalize btn-outline px-20 w-full">
                Detail Product
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
