import React from 'react';
import '../style/pageAbout.css'

function PageAbout() {

  const techOptions = [
    {
      'Text': 'JavaScript',
      'Icon': ''
    },
    {
      'Text': 'HTML 5',
      'Icon': ''
    },
    {
      'Text': 'CSS',
      'Icon': ''
    },
    {
      'Text': 'SQL',
      'Icon': ''
    },
    {
      'Text': 'React',
      'Icon': ''
    },
    {
      'Text': 'Python 3',
      'Icon': ''
    },
    {
      'Text': 'SQL Server',
      'Icon': ''
    }
  ];

  const techMapper = techOptions.map((techOption, index) => {
    return (
      <li className='technologyItem' key={index}>
        <p className='pageAboutMainText'>{techOption['Text']}</p>
      </li>
    )
  })

  const workXpOptions = [
    {
      'MainText': 'Data Technician',
      'SubText': 'Jacobs / 2022 - Present'
    }
  ];

  const workXpMapper = workXpOptions.map((WorkXpOption, index) => {
    return (
      <li className='trainingItem'>
        <p className='pageAboutMainText'>{WorkXpOption['MainText']}</p>
        <p className='pageAboutSubText'>{WorkXpOption['SubText']}</p>
      </li>
    )
  })

  const trainingOptions = [
    {
      'MainText': 'Professional Software Development',
      'SubText': 'CodeClan / 2022'
    }
  ];

  const trainingMapper = trainingOptions.map((trainingOption, index) => {
    return (
      <li className='trainingItem'>
        <p className='pageAboutMainText'>{trainingOption['MainText']}</p>
        <p className='pageAboutSubText'>{trainingOption['SubText']}</p>
      </li>
    )
  })

  return (
    <>
      <div className='pageAbout'>
        <div className='pageAboutText'>
          <p className='pageAboutHeading'>Recent Technologies</p>
          <ul className='pageAboutList'>
            {techMapper}
          </ul>
          <br />
          <br />
          
          <p className='pageAboutHeading'>Industry Experience</p>
          <ul className='pageAboutList'>
            {workXpMapper}
          </ul>
          <br />
          <br />

          <p className='pageAboutHeading'>Professional Training</p>
          <ul className='pageAboutList'>
            {trainingMapper}
          </ul>
        </div>
      </div>       
    </>
  )
};

export default PageAbout;