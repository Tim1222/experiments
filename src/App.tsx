import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";

function App() {
    return (
        <>
            <Accordion title={'First title'} collapsed={true}/>
            <Accordion title={'Seccond title'} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </>
    );
}


export default App;
