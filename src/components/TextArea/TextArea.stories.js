import React from 'react';
import TextArea from './TextArea';

export default {
  title: 'MangoAds/Atoms/TextArea',
  component: TextArea,
}

const Template = (args) => <TextArea {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

