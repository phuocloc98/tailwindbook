import React from 'react';
import Chevron from './Chevron';

export default {
  title: 'MangoAds/Atoms/Chevron',
  component: Chevron,
}

const Template = (args) => <Chevron {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

