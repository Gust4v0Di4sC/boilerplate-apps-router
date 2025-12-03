import { Meta,StoryObj } from '@storybook/react';
import Main from '.';

export default {
    title:'Main',
    component: Main,
    parameters:{
        layout: 'fullscreen'
    }
} as Meta;

export const Default : StoryObj = {
    args: {
        title: "React avançado"
    }
}

export const Basic : StoryObj = {
    args:{
        title: 'Basic Main Component',
        description: 'This is a basic description for the Main component.'
    }
}