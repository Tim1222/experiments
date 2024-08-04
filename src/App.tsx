import React, {useState} from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating, {RatingValueType} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UnControlledAccordion from "./Components/UnControlledAccordion/UnControlledAccordion";
import UnControlledRating from "./Components/UnControlledRating/UnControlledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(2)

    return (
        <>
            {/*<Accordion title={'First title'} collapsed={true}/>*/}
            {/*<Accordion title={'Seccond title'} collapsed={false}/>*/}
            {/*<UnControlledAccordion titleValue={'Menu'}/>*/}
            {/*<UnControlledAccordion titleValue={'Users'}/>*/}

            <Rating value={ratingValue} setRatingValue={setRatingValue}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<UnControlledRating />*/}
            {/*<UnControlledRating />*/}
            {/*<UnControlledRating />*/}
            <OnOff/>
            <OnOff/>
            <OnOff/>
        </>
    );
}


export default App;
