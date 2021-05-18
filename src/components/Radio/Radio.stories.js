import React from 'react';
import Radio from './Radio';

export default {
  title: 'MangoAds/Atoms/Form/Radio',
  component: Radio,
}

const Template = (args) => <Radio {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

