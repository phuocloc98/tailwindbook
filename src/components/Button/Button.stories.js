import React from 'react';
import Button from './Button';

export default {
  title: 'MangoAds/Atoms/Button',
  component: Button,
}

const Template = (args) => <Button {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

