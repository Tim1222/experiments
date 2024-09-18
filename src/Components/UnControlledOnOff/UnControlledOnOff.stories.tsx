import React from "react";
import UnControlledOnOff from "./UnControlledOnOff";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import {action} from "@storybook/addon-actions";


export default {
    title: "UnControlled OnOff stories",
    component: UnControlledOnOff,
}

const callback = action('on or off clickekd')

export const OnMode = () => <UnControlledOnOff  onChange={callback} defaultOn={true} />
export const OffMode = () => <UnControlledOnOff onChange={callback} defaultOn={false} />


export const DefaultInputValue = ()=><input defaultValue={'yo'} />