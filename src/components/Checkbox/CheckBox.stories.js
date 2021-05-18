import React from 'react';
import CheckBox from './CheckBox';

export default {
  title: 'MangoAds/Atoms/Form/CheckBox',
  component: CheckBox,
}

const Template = (args) => <CheckBox {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

