import React from 'react';
import Icon from './Icon';

export default {
  title: 'MangoAds/Atoms/Icon',
  component: Icon,
}

const Template = (args) => <Icon {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

