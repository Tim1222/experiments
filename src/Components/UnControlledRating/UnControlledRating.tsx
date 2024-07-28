import React, {useState} from "react";

type StarPropsType = {
    selected: boolean
}

const UnControlledRating = () => {


    let [value, setValue] = useState(0 | 1 | 2 | 3 | 4 | 5)

    const onClickHandler = () => {

    }

    return (
        <div>
            <Star selected={value > 0}/><button onClick={() => setValue(value = 1)}>1</button>
            <Star selected={value > 1}/><button onClick={() => setValue(value = 2)}>2</button>
            <Star selected={value > 2}/><button onClick={() => setValue(value = 3)}>3</button>
            <Star selected={value > 3}/><button onClick={() => setValue(value = 4)}>4</button>
            <Star selected={value > 4}/><button onClick={() => setValue(value = 5)}>5</button>
        </div>
    )
}

const Star = (props: StarPropsType) => {

    return props.selected ? <span><b>star </b></span> : <span>star </span>

}
export default UnControlledRating;