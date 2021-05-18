import React from 'react';
import RadioList from './RadioList';

export default {
  title: 'MangoAds/Atoms/Form/RadioList',
  component: RadioList,
}

const Template = (args) => <RadioList {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

