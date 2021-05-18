import React from 'react';
import Arrow from './Arrow';

export default {
  title: 'MangoAds/Atoms/Arrow',
  component: Arrow,
}

const Template = (args) => <Arrow {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

