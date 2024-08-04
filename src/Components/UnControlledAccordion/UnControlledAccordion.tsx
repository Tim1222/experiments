import React, {useState} from "react";

type TitlePropsType = {
    titleValue: string

}

const UnControlledAccordion = (props: TitlePropsType) => {

    let [collapsed, setCollapsed] = useState(true)

    return <div>
        <AccordionTitle title={props.titleValue} onClickAccordion={()=> {setCollapsed(!collapsed)}} />
        {!collapsed && <AccordionBody/>}
    </div>

}

type AccordionPropsType = {
    title: string
    onClickAccordion: () => void
}
const AccordionTitle = (props: AccordionPropsType) => {
    return <h3 onClick={() => {props.onClickAccordion()}}>{props.title}</h3>

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