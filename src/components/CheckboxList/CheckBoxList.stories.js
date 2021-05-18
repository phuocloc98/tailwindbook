import React from 'react';
import CheckBoxList from './CheckBoxList';

export default {
  title: 'MangoAds/Atoms/Form/CheckBoxList',
  component: CheckBoxList,
}

const Template = (args) => <CheckBoxList {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

