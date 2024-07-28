import React, {useState} from "react";

type TitlePropsType = {
    title: string
}

const UnControlledAccordion = (props: TitlePropsType) => {

    let [collapsed, setCollapsed] = useState(true)

    const AccordionBodyHandler = () => {
        setCollapsed(!collapsed)
    }

    return <div onClick={AccordionBodyHandler}>
        <AccordionTitle title={props.title} />
        {/*<button onClick={AccordionBodyHandler}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>

}
const AccordionTitle = (props: TitlePropsType) => {
    return <h1>{props.title}</h1>

}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UnControlledAccordion;