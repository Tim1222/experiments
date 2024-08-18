import React, {useState} from "react"
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


function OnOff(props: PropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }


    const changeColorButton = () => {
        setOn(!props.on)
    }
    const onClicked = () => {
        props.onChange(true)
    }
    const offClicked = () => {
        props.onChange(false)
    }
    return <div>
        <button style={onStyle} onClick={onClicked}>On
        </button>
        <button style={offStyle} onClick={offClicked}>Off
        </button>
        <div style={indicatorStyle} onClick={changeColorButton}></div>
    </div>

}

export default OnOff;