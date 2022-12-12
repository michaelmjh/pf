import React, { useState } from 'react';
import '../style/pageProjects.scss';

import CompProject from './compProject';

import Baton from '../media/images/Baton.png'
import BGGLogo from '../media/images/BGGLogo.png'
import MELogo from '../media/images/MELogo.png'
import TTLogo from '../media/images/TTLogo.png'

function PageProjects() {

  const projectOptions = [ 
    {
      'Title': 'michaelmjh.com Portfolio',
      'SubTitle': 'Personal Project',
      'Date': '2022',
      'Logo': Baton,
      'GitLink': 'https://github.com/michaelmjh/pf',
      'LiveLink': '',
      'Description': 'A showcase of my recent work',
      'Tech': ['CSS', 'HTML', 'JavaScript', 'React']
    },  
    {
      'Title': 'Music Elephant',
      'SubTitle': 'CodeClan Capstone Group Project',
      'Date': '2022',
      'Logo': MELogo,
      'GitLink': 'https://github.com/michaelmjh/capstoneMusicTheoryApp',
      'LiveLink': '',
      'Description': 'iOS app used to teach music theory through interactive lessons and quizzes, as well as allowing users to create and edit profiles',
      'Tech': ['Dart', 'Flutter', 'Java', 'PostgreSQL', 'Spring']
    },  
    {
      'Title': 'Code Clan Top Trumps',
      'SubTitle': 'CodeClan Group Project',
      'Date': '2022',
      'Logo': TTLogo,
      'GitLink': 'https://github.com/KRooney941/top_trumps_project',
      'LiveLink': '',
      'Description': 'Users can play a version of the popular card game, and also create profiles and custom decks of cards, as well as see play statistics',
      'Tech': ['CSS', 'Express', 'HTML', 'JavaScript', 'React']
    },
    {
      'Title': 'Big Guns Gym',
      'SubTitle': 'CodeClan Solo Project',
      'Date': '2022',
      'Logo': BGGLogo,
      'GitLink': 'https://github.com/michaelmjh/project_gym',
      'LiveLink': '',
      'Description': 'Web application designed to manage fitness classes and member bookings for a gym built with an MVC design pattern',
      'Tech': ['CSS', 'Flask', 'HTML', 'Python', 'SQLite3']
    }
  ];
 
  const projectMapper = projectOptions.map((project, index) => {

    return (
      <>
          <br/>
          <li className='pPProject' key={index}>
            <CompProject project={project}/>
          </li>
          
      </>
    )
  })

  return (
    <>
      <div className='pP'>
      
        <ul className='pPProjectList'>
          <li className='pPPadding'></li>
          {projectMapper}
        </ul>
      </div>
 
    </>
  )

};

export default PageProjects;