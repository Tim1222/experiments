import React, {useState} from "react"
import {Simulate} from "react-dom/test-utils";
import change = Simulate.change;

type PropsType = {
    // on: boolean
}


function OnOff(props: PropsType) {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft: '3px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display:'inline-block',
        marginLeft:'10px',
        backgroundColor: on ? 'green' : 'red'
    }


    const changeColorButton = () => {
        setOn(!on)
    }

    return <div>
        <button style={onStyle} onClick={ ()=> { setOn(true) }}>On</button>
        <button style={offStyle} onClick={ ()=> { setOn(false) } }>Off</button>
        <div style={indicatorStyle} onClick={ changeColorButton }></div>
    </div>

}

export default OnOff;