import React from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import { Icon } from '@iconify/react';

export default {
  ...MDXComponents,
  Icon, // Now <Icon /> is available in MDX.
};
