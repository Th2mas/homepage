import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EducationEntry } from './EducationEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'EducationEntry',
  component: EducationEntry,
} as ComponentMeta<typeof EducationEntry>;

const Template: ComponentStory<typeof EducationEntry> = (args) => <EducationEntry {...args} />;

export const Minf = Template.bind({});
Minf.args = {
  curriculum: "Media Informatics and Visual Computing",
  university: "TU Vienna"
};
