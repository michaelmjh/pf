import React, { useState } from 'react';
import '../style/pageProjects.scss';

import CompProject from './compProject';
import Modal from './modalProject';

import Baton from '../media/images/Baton.png'
import Dillon from '../media/images/dillon.jpeg'
import TT from '../media/images/toptrumps.png'

function PageProjects() {

  const [modalState,setModalState] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const toggleModal = () => {
    setModalState(!modalState);
  }

  const toggleSelectedProject = (project) => {
    setSelectedProject()
  }

  const projectOptions = [ 
    {
      'Title': 'Music Elephant',
      'SubTitle': 'CodeClan Capstone Group Project',
      'Date': '2022',
      'Logo': Baton,
      'GitLink': 'https://github.com/michaelmjh/capstoneMusicTheoryApp',
      'LiveLink': '',
      'Description': 'iOS app used to teach music theory through interactive lessons and quizzes, as well as allowing users to create and edit profiles.',
      'Tech': ['Dart', 'Flutter', 'Java', 'PostgreSQL', 'Spring']
    },  
    {
      'Title': 'Big Guns Gym',
      'SubTitle': 'CodeClan Solo Project',
      'Date': '2022',
      'Logo': Dillon,
      'GitLink': 'https://github.com/michaelmjh/project_gym',
      'LiveLink': '',
      'Description': 'Web application designed to manage fitness classes and member bookings for a gym built with an MVC design pattern.',
      'Tech': ['Dart', 'Flutter', 'Java', 'PostgreSQL', 'Spring']
    }
  ];
 
  const projectMapper = projectOptions.map((project, index) => {

    return (
      <>
        
          <br/>
          <li className='pPProject toggleModal' key={index} onClick={toggleModal}>
            <CompProject project={project}/>
          </li>
          
      </>
    )
  })

  return (
    <>
      <div className='pP'>
        <ul className='pPProjectList'>
          {projectMapper}
        </ul>
      </div>
 
    </>
  )

};

export default PageProjects;