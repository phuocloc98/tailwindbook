import React from 'react';
import Overlay from './Overlay';

export default {
  title: 'MangoAds/Atoms/Overlay',
  component: Overlay,
}

const Template = (args) => <Overlay {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

