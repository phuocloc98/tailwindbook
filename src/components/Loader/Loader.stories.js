import React from 'react';
import Loader from './Loader';

export default {
  title: 'MangoAds/Atoms/Loader',
  component: Loader,
}

const Template = (args) => <Loader {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

