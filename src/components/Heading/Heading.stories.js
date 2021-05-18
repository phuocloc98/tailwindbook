import React from 'react';
import Heading from './Heading';

export default {
  title: 'MangoAds/Atoms/Heading',
  component: Heading,
}

const Template = (args) => <Heading {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

