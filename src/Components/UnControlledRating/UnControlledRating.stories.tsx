import React, {useState} from "react";
import UnControlledRating from "./UnControlledRating";
import {RatingValueType} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: "UnControlledRating",
    component: UnControlledRating
}

const callback = action('rating changed')

export const EmptyStar = () => <UnControlledRating defaultValue={0} onChange={callback} />
export const EmptyStar1 = () => <UnControlledRating defaultValue={1} onChange={callback}/>
export const EmptyStar2 = () => <UnControlledRating defaultValue={2} onChange={callback}/>
export const EmptyStar3 = () => <UnControlledRating defaultValue={3} onChange={callback}/>
export const EmptyStar4 = () => <UnControlledRating defaultValue={4} onChange={callback}/>
export const EmptyStar5 = () => <UnControlledRating defaultValue={5} onChange={callback}/>
