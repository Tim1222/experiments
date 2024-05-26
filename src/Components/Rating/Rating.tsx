import React from "react";

type StarPropsType = {
    selected: boolean
}
type RatingPropsType = {
    value: 1 | 2 | 3 | 4 | 5
}

const Rating = (
    props: RatingPropsType) => {

    // if (props.value === 1)


return (
    <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
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