import React from 'react';
import Divider from './Divider';

export default {
  title: 'MangoAds/Atoms/Divider',
  component: Divider,
}

const Template = (args) => <Divider {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

