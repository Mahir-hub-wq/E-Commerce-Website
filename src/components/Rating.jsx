const Rating = ({ rating, reviews }) => {
  return (
    <div className="flex justify-center items-center gap-1 my-5">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-xl ${
            star <= Math.round(rating)
              ? "text-yellow-400"
              : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}

      <span className="ml-2 text-gray-600 text-sm">
        ({reviews})
      </span>
    </div>
  );
};

export default Rating;