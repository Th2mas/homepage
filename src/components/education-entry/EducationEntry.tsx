import React from 'react';
import './EducationEntry.scss';

interface EducationEntryProps {
  /**
   * The name of the curriculum
   */
  curriculum: string;

  /**
   * The name of the university the curriculum is offered
   */
  university: string;
}

export const EducationEntry = ({curriculum, university, ...props}: EducationEntryProps) => (
  <div
    {...props}
  >
    <h1>{curriculum}</h1>
    <h2>{university}</h2>
  </div>
);
