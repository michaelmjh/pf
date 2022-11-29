import React, { useState } from 'react';
import '../style/pageProjects.css';

import Modal from './modalProject';

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
      'SubTitle': 'CodeClan Capstone Group Project / 2022',
      'Icon': '',
      'Link': '/project'
    },
    {
      'Title': 'project_gym',
      'SubTitle': 'CodeClan Solo Project / 2022',
      'Icon': '',
      'Link': '/project'
    }
  ];

  const projectMapper = projectOptions.map((projectOption, index) => {
    
    return (
      <>
        
          <br/>
          <li className='pPProject toggleModal' key={index} onClick={toggleModal}>
            <p className='pPProjectTitle'>{projectOption['Title']}</p>
            <p className='pPProjectSubTitle'>{projectOption['SubTitle']}</p>
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
      <Modal modalState={modalState} toggleModal={toggleModal}/>
    </>
  )

};

export default PageProjects;