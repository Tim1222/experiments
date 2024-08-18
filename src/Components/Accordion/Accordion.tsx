import React from "react";

type TitlePropsType = {
    title: string
    collapsed?: boolean
    onChange: () => void
}

const Accordion = (props: TitlePropsType) => {

    return <div>
        <AccordionTitle title={props.title}   onChange={props.onChange}/>
        {!props.collapsed && <AccordionBody/>}
    </div>


}
const AccordionTitle = (props: TitlePropsType) => {
    return <h1 onClick={props.onChange}>{props.title}</h1>

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

export default Accordion;