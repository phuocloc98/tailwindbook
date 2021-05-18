import React from 'react';
import Select from './Select';

export default {
  title: 'MangoAds/Atoms/Form/Select',
  component: Select,
}

const Template = (args) => <Select {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

