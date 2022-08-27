import React from 'react';
import './EducationEntry.css';

interface ThesisProps {
  /**
   * The name of the thesis written to complete the study
   */
  name: string;

  /**
   * The link to the thesis (should be publicly available)
   */
  link: string;
}

type Semester = 'Summer semester' | 'Winter semester';

interface StudyProps {

  /**
   * The name of the curriculum
   */
  curriculum: string;

  /**
   * The name of the university the curriculum is offered
   */
  university: string;

  /**
   * The date when the curriculum was started
   * TODO: Can not be in the future!
   */
  startDate: Date;

  /**
   * The date when the curriculum was ended (not necessarily finished)
   * TODO: Can not be in the future!
   */
  endDate?: Date;
}

interface EducationEntryProps {

  /**
   * The basic information of the curriculum
   */
  study: StudyProps;

  /**
   * Title that is received after successful completion
   */
  title: string;

  /**
   * The thesis written to complete the study
   */
  thesis?: ThesisProps;

  /**
   * All exchange semesters that were completed during the studies
   */
  exchangeSemesters?: Array<StudyProps>;
}

export const EducationEntry = ({study, title, thesis, exchangeSemesters}: EducationEntryProps) => {

  const {curriculum, university, startDate, endDate} = study;

  const start = startDate.getFullYear();
  const end = endDate ? endDate.getFullYear() : 'Now';

  const thesisComponent = thesis
    ? <p>Thesis: <a href={thesis.link}>{thesis.name}</a></p>
    : <></>;

    // TODO: This should be its own component and should be properly tested
  const exchangeSemesterComponent = exchangeSemesters
    ? exchangeSemesters.map(study => {
      const startYear = study.startDate.getFullYear();
      const endYear = study.endDate?.getFullYear() || "Now";

      const isSameYear: boolean = startYear === endYear;
      const dateText = isSameYear ? startYear : `${startYear} - ${endYear}`;

      return (
        <div>
          <h2>{study.university}</h2>
          <h1>{study.curriculum}</h1>
          <h3>{dateText}</h3>
        </div>
      )
    }) : <></>;

  return (
    <div className="education-entry">
      <h2>{university}</h2>
      <h1>{curriculum}</h1>
      <h3>{title}</h3>
      <h3>{start} - {end}</h3>
      {thesisComponent}
      {exchangeSemesterComponent}
    </div>
  )
};
