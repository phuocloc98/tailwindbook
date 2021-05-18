import React from 'react';
import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'MangoAds/Atoms/Breadcrumbs',
  component: Breadcrumbs,
}

const Template = (args) => <Breadcrumbs {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

