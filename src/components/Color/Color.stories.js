import React from 'react';
import Color from './Color';

export default {
  title: 'MangoAds/Atoms/Color',
  component: Color,
}

const Template = (args) => <Color {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

