import React from 'react';
import '../style/menuContainer.css'

// IMAGES
import gitHubLogo from '../media/icons/GitHubLogo.png'
import linkedInLogo from '../media/icons/LinkedInLogo.png'

function MenuBlurb() {

    const socialButtonOptions = [
        {
          'Text': 'GitHub',
          'Icon': gitHubLogo,
          'Link': 'https://github.com/michaelmjh'
        },
        {
          'Text': 'LinkedIn',
          'Icon': linkedInLogo,
          'Link': 'https://linkedin.com/in/michaelmjh'
        },
    ];

    const buttonMapper = socialButtonOptions.map((buttonOption, index) => {
        return (
            <a href={buttonOption['Link']} key={index} target='blank' rel='noopener noreferrer'>
                <img className='socialLogo' src={buttonOption['Icon']} alt={buttonOption['Text']} />
            </a>
        )
    })

    return (
    <>
        <div className='menuBlurb'>
            <p className='nameHeader'>Michael Hughes</p>
            <p className='subtitleHeader'>Software Engineer</p>
            <div className='socialLinks'>
                {buttonMapper}
            </div>
        </div>
    </>
  )
};

export default MenuBlurb;