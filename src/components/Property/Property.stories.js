import React from 'react';
import Property from './Property';

export default {
  title: 'MangoAds/Atoms/Property',
  component: Property,
}

const Template = (args) => <Property {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

