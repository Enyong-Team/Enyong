import React, { useState } from "react";

function Rating({ onRate }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="w-full max-w-md overflow-hidden rounded-3xl shadow-lg font-FD">
        {/* Header */}
        <div className="bg-[#012F65] py-5">
          <h2 className="text-center text-white text-2xl ">
            Enjoying the experience?
          </h2>
        </div>

        {/* Rating Area */}
        <div className="bg-[#084E99] p-6">
          <div className="flex justify-center gap-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => {
                    if (star === 1 && rating === 1) {
                        setRating(0);
                    } else {
                        setRating(star);
                    }
                     
                    setTimeout(() => {
                        onRate?.(star);
                    }, 500);
                    }}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(0)}
                className="transition-transform duration-200 hover:scale-110"
              >
                <svg
                  className="w-14 h-14"
                  viewBox="0 0 24 24"
                  fill={
                    star <= (hover || rating)
                      ? "#F4B400"
                      : "transparent"
                  }
                  stroke="white"
                  strokeWidth="1.5"
                >
                  <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.56L12 17.52l-5.88 3.1 1.12-6.56L2.48 9.42l6.58-.96L12 2.5z" />
                </svg>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Rating;