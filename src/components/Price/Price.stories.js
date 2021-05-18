import React from 'react';
import Price from './Price';

export default {
  title: 'MangoAds/Atoms/Price',
  component: Price,
}

const Template = (args) => <Price {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

