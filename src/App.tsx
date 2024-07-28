import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UnControlledAccordion from "./Components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./Components/UnControlledRating/UnControlledRating";

function App() {
    return (
        <>
            {/*<Accordion title={'First title'} collapsed={true}/>*/}
            {/*<Accordion title={'Seccond title'} collapsed={false}/>*/}
            <UnControlledAccordion title={'Menu'} />
            <UnControlledAccordion title={'Users'}/>
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <UnControlledRating />
            <OnOff />
            <OnOff />
            <OnOff />
        </>
    );
}


export default App;
