import React from 'react';
import Rating from './Rating';

export default {
  title: 'MangoAds/Atoms/Rating',
  component: Rating,
}

const Template = (args) => <Rating {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

