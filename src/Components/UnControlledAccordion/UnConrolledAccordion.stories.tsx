import {StoryObj} from "@storybook/react";
import React from "react";
import UnControlledAccordion from "./UnControlledAccordion";


export default {
    title: "UnControlledAccordion",
    component: UnControlledAccordion
}

type Story = StoryObj<typeof UnControlledAccordion>


export const ModeChanging = () => <UnControlledAccordion titleValue={'Some Title (click me)'}/>