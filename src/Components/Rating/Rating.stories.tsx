import React, {useState} from "react";
import Rating, {RatingValueType} from "./Rating";


export default {
    title: "Rating stories",
    component: Rating
}

export const EmptyStar = () => <Rating value={0} setRatingValue={x => x}/>
export const EmptyStar1 = () => <Rating value={1} setRatingValue={x => x}/>
export const EmptyStar2 = () => <Rating value={2} setRatingValue={x => x}/>
export const EmptyStar3 = () => <Rating value={3} setRatingValue={x => x}/>
export const EmptyStar4 = () => <Rating value={4} setRatingValue={x => x}/>
export const EmptyStar5 = () => <Rating value={5} setRatingValue={x => x}/>
export const ChageRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
    return <Rating value={rating} setRatingValue={setRating}/>
}