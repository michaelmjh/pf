import React from 'react';
import '../style/pageFun.css'

function PageFun() {

  const funOptions = [
    {
      'Title': 'Capoeira',
      'SubTitle': 'Lead Instructor, Grupo Senzala Glasgow / 2012 - 2022',
      'Icon': ''
    },
    {
      'Title': 'Design',
      'SubTitle': 'Standing Out in a Crowd',
      'Icon': ''
    },
    {
      'Title': 'Photography',
      'SubTitle': 'Capturing Memories',
      'Icon': ''
    },
    {
      'Title': 'Playlists',
      'SubTitle': 'Music for (Almost) Any Occasion',
      'Icon': ''
    }
  ];

  const funMapper = funOptions.map((funOption, index) => {
    return (
      <>
        <li className='pFSection' key={index}>
          <p className='pFSectionTitle'>{funOption['Title']}</p>
          <p className='pFSectionSubTitle'>{funOption['SubTitle']}</p>
        </li>
        <br/>
      </>
    )
  })

  return (
    <>
      <div className='pF'>
        <ul className='pFSectionList'>
          {funMapper}
        </ul>
        
      
      </div>  
      
    </>
  )

};

export default PageFun;