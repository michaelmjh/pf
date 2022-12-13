import React from 'react';
import '../style/pageAbout.css'

function PageAbout() {

  const techOptions = [
    {
      'Text': 'CSS',
      'Icon': ''
    },
    {
      'Text': 'HTML 5',
      'Icon': ''
    },
    {
      'Text': 'JavaScript',
      'Icon': ''
    },
    {
      'Text': 'Python 3',
      'Icon': ''
    },
    {
      'Text': 'React',
      'Icon': ''
    },
    {
      'Text': 'SQL Server',
      'Icon': ''
    },
    {
      'Text': 'XML',
      'Icon': ''
    }
  ];

  const techMapper = techOptions.map((techOption, index) => {
    return (
      <li className='technologyItem' key={index}>
        <p className=''>{techOption['Text']}</p>
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
        <p className='pageAboutSubText'>{workXpOption['SubText']} <span className='highlight'>/</span> {workXpOption['Date']}</p>
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
        <p className='pageAboutSubText'>{trainingOption['SubText']} <span className='highlight'>/</span> {trainingOption['Date']}</p>
      </li>
    )
  })

  return (
    <>
      <div className='pAContainer'>
        <div className='pAText'>
          <p className='pAHeading'>Recent Technologies</p>
          <ul className='pATechList'>
            {techMapper}
          </ul>
          <br />
          <br />
          
          <p className='pAHeading'>Industry Experience</p>
          <ul className='pAList'>
            {workXpMapper}
          </ul>
          <br />
          <br />

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