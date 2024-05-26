import React from "react";

type TitlePropsType = {
    title: string
    collapsed: boolean
}

const Accordion = (props: TitlePropsType) => {

    return <div>
        <AccordionTitle title={props.title} collapsed={props.collapsed}/>
        { props.collapsed === false && <AccordionBody/> }
    </div>

    // return props.collapsed ? <AccordionTitle title={props.title} collapsed={props.collapsed}/> : <>
    //     <AccordionTitle title={props.title} collapsed={props.collapsed}/>
    //     <AccordionBody/>
    // </>

    // if(props.collapsed === true) {
    //     return   <AccordionTitle title={props.title} collapsed={props.collapsed}/>
    // }
    //
    // return (
    //     <>
    //         <AccordionTitle title={props.title} collapsed={props.collapsed}/>
    //         <AccordionBody/>
    //     </>
    // )
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

export default Accordion;