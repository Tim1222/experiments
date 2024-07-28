import React from "react";

type StarPropsType = {
    selected: boolean
}
type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

const Rating = (props: RatingPropsType) => {

    // if (props.value === 1)


    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )
}

const Star = (props: StarPropsType) => {
    // if (props.selected === true) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }

    return props.selected ? <span><b>star </b></span> : <span>star </span>

}
export default Rating;