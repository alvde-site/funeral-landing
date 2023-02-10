function ReviewCard({ review }) {
  return (
    <li className="reviews__content">
      <img
        className="reviews__avatar"
        src={review.avatar}
        alt={review.name}
      ></img>
      <h3 className="reviews__cardtitle">{review.name}</h3>
      <p className="reviews__subtitle">{review.location}</p>
      <p className="reviews__text">{review.text}</p>
    </li>
  );
}

export default ReviewCard;
