import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: string[]
}

export function Accordion(props: AccordionPropsType) {
    return <div>
        <Accordion titleValue={props.titleValue}  onChange={props.onChange} collapsed={true} items={[]}/>
        {!props.collapsed && <AccordionBody items={props.items}/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
}

function AccordionTitle(props: AccordionTitlePropsType){
    return (
        <h3 onClick={(e)=>props.onChange()}> -- {props.title} --</h3>
    )
}
type AccordionBodyPropsType = {
    items: string[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <ul>
        {props.items.map( i => <li>{i}</li>)}
    </ul>
}


export default Accordion;