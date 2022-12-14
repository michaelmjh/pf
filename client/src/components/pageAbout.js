import React from 'react';
import '../style/pageAbout.scss'

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

function PageAbout() {

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
    }
  ]

  const recentTechOptions = [
    'CSS', 'HTML', 'JavaScript', 'Python', 'React', 'SQL Server'];

  const techMapper = recentTechOptions.map((techOption, index) => {
    let logo = techList.find(e => e['Name'] == techOption);
    console.log(logo)
    
    return (
      <li className='pATechItem' key={index}>
        <img className='pATechLogo' src={logo['Icon']}/>
        <p className='pATechText'>{logo['Name']}</p>
      </li>
    )
  })

  const workXpOptions = [
    {
      'MainText': 'Data Technician',
      'SubText': 'Jacobs',
      'Date': '2022 - Present'
    }
  ];

  const workXpMapper = workXpOptions.map((workXpOption, index) => {
    return (
      <li className='trainingItem'>
        <p className='pageAboutMainText'>{workXpOption['MainText']}</p>
        <p className='pageAboutSubText'>{workXpOption['SubText']} <span className='pAHighlight'>/</span> {workXpOption['Date']}</p>
      </li>
    )
  })

  const trainingOptions = [
    {
      'MainText': 'Professional Software Development',
      'SubText': 'CodeClan',
      'Date': '2022'
    }
  ];

  const trainingMapper = trainingOptions.map((trainingOption, index) => {
    return (
      <li className='trainingItem'>
        <p className='pageAboutMainText'>{trainingOption['MainText']}</p>
        <p className='pageAboutSubText'>{trainingOption['SubText']} <span className='pAHighlight'>/</span> {trainingOption['Date']}</p>
      </li>
    )
  })

  return (
    <>
      <div className='pAContainer'>
        
        <div className='pASection'>
          <p className='pAHeading'>Recent Technologies</p>
          <ul className='pATechList'>
            {techMapper}
          </ul>
        </div>
        <div className='pASection'> 
          <p className='pAHeading'>Industry Experience</p>
          <ul className='pAList'>
            {workXpMapper}
          </ul>
        </div>
        <div className='pASection'>
          <p className='pAHeading'>Professional Training</p>
          <ul className='pAList'>
            {trainingMapper}
          </ul>
        </div>
      </div>       
    </>
  )
};

export default PageAbout;