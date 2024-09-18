import type {Meta} from '@storybook/react';
import Accordion from './Accordion';
import React, {useState} from "react";
import {StoryObj} from "@storybook/react";
import {action} from '@storybook/addon-actions'


// const meta: Meta<typeof Accordion> = {
//     component: Accordion
// }
// export default meta;

export default {
    title: "Accordion",
    component: Accordion
}

type Story = StoryObj<typeof Accordion>
export const FirsStory: Story = {
    args: {
        title: 'Hello',
        collapsed: true,
    },
}

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion title={'Collapsed Accordion'}
                      onChange={onChangeHandler}
                      collapsed={true}/>
}

export const OpenAccordion = () => {
    return <Accordion title={'Open Accordion'}
                      onChange={() => {
                      }}
                      collapsed={false}/>
}

export const DemoAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion title={'Accordion'}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}