import React from 'react';
import QuantitySelector from './QuantitySelector';

export default {
  title: 'MangoAds/Atoms/QuantitySelector',
  component: QuantitySelector,
}

const Template = (args) => <QuantitySelector {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

