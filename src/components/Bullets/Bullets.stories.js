import React from 'react';
import Bullets from './Bullets';

export default {
  title: 'MangoAds/Atoms/Bullets',
  component: Bullets,
}

const Template = (args) => <Bullets {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

