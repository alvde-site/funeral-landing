import { reviewsList } from "../../../../utils/constants";
import ReviewCard from "./ReviewCard/ReviewCard";

function Reviews() {
  return (
    <section className="reviews" id={"reviews"}>
      <h2 className="reviews__title">Что говорят наши клиенты</h2>

      <ul className="reviews__list">
        {reviewsList.map((review, index) => {
          return <ReviewCard review={review} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Reviews;
