import React from 'react';
import Toggle from './Toggle';

export default {
  title: 'MangoAds/Atoms/Form/Toggle',
  component: Toggle,
}

const Template = (args) => <Toggle {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

