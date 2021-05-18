import React from 'react';
import Input from './Input';

export default {
  title: 'MangoAds/Atoms/Input',
  component: Input,
}

const Template = (args) => <Input {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

