import React from 'react';
import Link from './Link';

export default {
  title: 'MangoAds/Atoms/Link',
  component: Link,
}

const Template = (args) => <Link {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    type: 'primary',
}

