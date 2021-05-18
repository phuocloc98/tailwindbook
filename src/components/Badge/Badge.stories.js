import React from 'react';
import Badge from './Badge';

export default {
  title: 'MangoAds/Atoms/Badge',
  component: Badge,
}

const Template = (args) => <Badge {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

