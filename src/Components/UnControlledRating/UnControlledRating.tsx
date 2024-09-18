import React, {useState} from "react";
import Rating from "../Rating/Rating";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void

}

const UnControlledRating = (props: RatingPropsType) => {


    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div>
            <Star selected={value > 0} value={1}  setValue={() => {setValue(1); props.onChange(1)}}/>
            <Star selected={value > 1} value={2} setValue={() => {setValue(2); props.onChange(2)}}/>
            <Star selected={value > 2} value={3} setValue={() => {setValue(3); props.onChange(3)}}/>
            <Star selected={value > 3} value={4} setValue={() => {setValue(4); props.onChange(4)}}/>
            <Star selected={value > 4} value={5} setValue={() => {setValue(5); props.onChange(5)}}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

const Star = (props: StarPropsType) => {
    // const [rating, setRating] = useState<RatingValueType>(3)
    // return <Rating value={rating} onClick={setRating} />

    return <span onClick={() => {props.setValue(props.value)}}>
            {props.selected ? <b>star </b> : 'star '}
        </span>

}
export default UnControlledRating;
