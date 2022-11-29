import React from 'react';
import '../style/pageProjects.scss';


function CompProject({project}) {

    const renderLiveButton = () => {
      if (project['LiveLink'] != '')
        return (
          <a className='cPButton' >
            Visit Site
          </a>
        )
    }

    

    return (
        <>
            <div className='cPProjectContainer'>
              <img class='cPImage' src={project['Logo']} width='200'></img>
              <div className='cPContent'>
                <p className='cPTitle'>{project['Title']} </p>
                <p className='cPSubTitle'>{project['SubTitle']} <span className='cPHighlight'>/</span> {project['Date']}</p>
              
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