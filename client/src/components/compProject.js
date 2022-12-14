import React from 'react';
import '../style/pageProjects.scss';

import CSSLogo from '../media/icons/CSSLogo.png'
import DartLogo from '../media/icons/DartLogo.png'
import ExpressLogo from '../media/icons/ExpressLogo.png'
import FlaskLogo from '../media/icons/FlaskLogo.png'
import FlutterLogo from '../media/icons/FlutterLogo.png'
import HTMLLogo from '../media/icons/HTMLLogo.png'
import JavaLogo from '../media/icons/JavaLogo.png'
import JavaScriptLogo from '../media/icons/JavaScriptLogo.png'
import PostgreSQLLogo from '../media/icons/PostgreSQLLogo.png'
import PythonLogo from '../media/icons/PythonLogo.png'
import ReactLogo from '../media/icons/ReactLogo.png'
import SpringLogo from '../media/icons/SpringLogo.png'
import SQLiteLogo from '../media/icons/SQLiteLogo.png'
import SQLServerLogo from '../media/icons/SQLServerLogo.png'

function CompProject({project}) {

  const techList = [
    {
      'Name': 'CSS',
      'Icon': CSSLogo
    },
    {
      'Name': 'Dart',
      'Icon': DartLogo
    },
    {
      'Name': 'Express',
      'Icon': ExpressLogo
    },
    {
      'Name': 'Flask',
      'Icon': FlaskLogo
    },
    {
      'Name': 'Flutter',
      'Icon': FlutterLogo
    },
    {
      'Name': 'HTML',
      'Icon': HTMLLogo
    },
    {
      'Name': 'Java',
      'Icon': JavaLogo
    },
    {
      'Name': 'JavaScript',
      'Icon': JavaScriptLogo
    },
    {
      'Name': 'PostgreSQL',
      'Icon': PostgreSQLLogo
    },
    {
      'Name': 'Python',
      'Icon': PythonLogo
    },
    {
      'Name': 'React',
      'Icon': ReactLogo
    },
    {
      'Name': 'Spring',
      'Icon': SpringLogo
    },
    {
      'Name': 'SQLite3',
      'Icon': SQLiteLogo
    },
    {
      'Name': 'SQL Server',
      'Icon': SQLServerLogo
    },
  ]

  const techMapper = project['Tech'].map((tech, index) => {

    let logo = techList.find(e => e['Name'] == tech);

    return (
      <>
     
          <li className='cPTech' key={index}>
            <img className='cPTechLogo' src={logo['Icon']} alt='techLogo' />
            <p className='cPTechText'>{tech}</p>
          </li>
          
      </>
    )
  })

  return (
    <>
      <div className='cPProjectContainer'>
        <img class='cPImage' src={project['Logo']} width='200'></img>
        <ul className='cPTechList'>
          {techMapper}
        </ul>
        <div className='cPContent'>
          <p className='cPSubTitle'>{project['SubTitle']} <span className='cPHighlight'>/</span> {project['Date']}</p>
          <p className='cPTitle'>{project['Title']} </p>
        
          <p className='cPBlurb'>{project['Description']}</p>
          <div className='cPButtonsContainer'>
          {
            project['LiveLink'] === '' ? 
              '' 
            : 
              <a className='cPButton' >
                Visit Site
              </a>
          }  
          {
            project['GitLink'] === '' ? 
              '' 
            : 
              <a className='cPButton' href={project['GitLink']} target='blank' rel='noopener noreferrer'>
                View on GitHub
              </a>
          }  
          </div>
        </div>
      </div>
    </>
  )
};

export default CompProject;