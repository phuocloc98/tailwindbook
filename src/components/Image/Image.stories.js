import React from 'react';
import Image from './Image';

export default {
  title: 'MangoAds/Atoms/Image',
  component: Image,
}

const Template = (args) => <Image {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

