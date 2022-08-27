import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { EducationEntry } from './EducationEntry';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'EducationEntry',
  component: EducationEntry,
} as ComponentMeta<typeof EducationEntry>;

const Template: ComponentStory<typeof EducationEntry> = (args) => <EducationEntry {...args} />;

export const StudyWithCompletion = Template.bind({});
StudyWithCompletion.args = {
  study: {
    curriculum: "Media Informatics and Visual Computing",
    university: "TU Vienna",
    startDate: new Date(2014, 9)
  },
  title: "Bachelor of Science",
  thesis: {
    name: "An interactive dashboard approach for the visual analysis of rocket flight data",
    link: "https://th2mas.github.io/pdf/FMS.pdf"
  }
};

export const StudyOnGoing = Template.bind({});
StudyOnGoing.args = {
  study: {
    curriculum: "Media Informatics and Visual Computing",
    university: "TU Vienna",
    startDate: new Date(2014, 9)
  },
  title: "Bachelor of Science"
};

export const StudyCompletedWithOneExchangeSemester = Template.bind({});
StudyCompletedWithOneExchangeSemester.args = {
  study: {
    curriculum: "Electrical Engineering and Information Technology",
    university: "TU Vienna",
    startDate: new Date(2018, 9)
  },
  title: "Bachelor of Science",
  exchangeSemesters: [
    {
      curriculum: "Industrial Engineering",
      university: "Universitat Politècnica de València",
      startDate: new Date(2020, 2),
      endDate: new Date(2020, 6)
    }
  ]
};
