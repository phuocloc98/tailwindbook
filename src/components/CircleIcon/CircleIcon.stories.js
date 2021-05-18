import React from 'react';
import CircleIcon from './CircleIcon';

export default {
  title: 'MangoAds/Atoms/CircleIcon',
  component: CircleIcon,
}

const Template = (args) => <CircleIcon {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

