import React from 'react';
import '../style/pageProjects.css';

function PageProjects() {

  const projectOptions = [
    {
      'Title': 'Music Elephant',
      'SubTitle': 'CodeClan Capstone Group Project / 2022',
      'Icon': ''
    },
    {
      'Title': 'project_gym',
      'SubTitle': 'CodeClan Solo Project / 2022',
      'Icon': ''
    },
    {
      'Title': 'Music Elephant',
      'SubTitle': 'CodeClan Capstone Group Project / 2022',
      'Icon': ''
    },
    {
      'Title': 'project_gym',
      'SubTitle': 'CodeClan Solo Project / 2022',
      'Icon': ''
    },
    {
      'Title': 'Music Elephant',
      'SubTitle': 'CodeClan Capstone Group Project / 2022',
      'Icon': ''
    },
    {
      'Title': 'project_gym',
      'SubTitle': 'CodeClan Solo Project / 2022',
      'Icon': ''
    },
    {
      'Title': 'Music Elephant',
      'SubTitle': 'CodeClan Capstone Group Project / 2022',
      'Icon': ''
    },
    {
      'Title': 'project_gym',
      'SubTitle': 'CodeClan Solo Project / 2022',
      'Icon': ''
    },
    {
      'Title': 'Music Elephant',
      'SubTitle': 'CodeClan Capstone Group Project / 2022',
      'Icon': ''
    },
    {
      'Title': 'project_gym',
      'SubTitle': 'CodeClan Solo Project / 2022',
      'Icon': ''
    }
  ];

  const projectMapper = projectOptions.map((projectOption, index) => {
    return (
      <>
        <li className='pPProject' key={index}>
          <p className='pPProjectTitle'>{projectOption['Title']}</p>
          <p className='pPProjectSubTitle'>{projectOption['SubTitle']}</p>
        </li>
        <br/>
      </>
    )
  })

  return (
    <>
      <div className='pP'>
          <ul className='pPProjectList'>
            {projectMapper}
          </ul>
          <br />
          <br />
        </div>    
    </>
  )

};

export default PageProjects;