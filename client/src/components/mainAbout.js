import React from "react";
import Portrait from '../media/images/Portrait.png'

const MainAbout = () => {

  return (
    <>
      <div class='mainaboutcontainer'>
        <p class='sectionhead'>About Me</p>
        <div class='mainaboutcontent'>
          <div class='mainaboutimage'>
            <img src={Portrait} height='250'></img>
            <p class='subhead'>Methodologies</p>
            <p>Agile Development Processes
              <br/>Object Oriented Programming (OOP)
              <br/>Reactive Programming
              <br/>SOLID design principles 
              <br/>Test Driven Development (TDD) including: 
              <br/> - Unit testing
              <br/> - Integration testing
              <br/> - System Testing
            </p>
            <p class='subhead'>Technical Skills</p>
            <p>Python 3
              <br/>Javascript
              <br/>Java
              <br/>C#
              <br/>Swift
              <br/>Dart
              <br/>HTML
              <br/>CSS
              <br/>SQL
              <br/>Git and GitHub
              <br/>Flutter
              <br/>React
              <br/>Flask
              <br/>SQLite3
              <br/>PostgreSQL
              <br/>MongoDB
              <br/>Express
              <br/>Spring
              <br/>Node.js
              <br/>AWS
              <br/>REST API’s
            </p>
            <p class='subhead'>Software & Systems</p>
            <p>Mac OS
              <br/>Windows
              <br/>Adobe Illustrator & Photoshop
              <br/>Affinity Designer
              <br/>Procreate
              <br/>Asana
              <br/>Slack
              <br/>Trello
              <br/>Unity
              <br/>iWork
              <br/>MS Office
              <br/>Agresso ERP
            </p>
          </div>
          <div class='mainaboutblurb'>
            <p>Junior Software Engineer with a background in office management and administration 
              <br/>for the tech industry, as well as management, staff training and customer service 
              <br/>experience from 15 years working in the optics industry.
              <br/>
              <br/>Initially self taught in the fundamentals of programming, I recently completed 
              <br/>CodeClan’s Professional Software Development bootcamp and am looking for my first 
              <br/>developer role in the tech industry. During this 16 week intensive course, I learned how to 
              <br/>design and create full-stack applications using OO fundamentals following SOLID principles 
              <br/>and look forward to developing these skills in a professional environment.
              <br/>
              <br/>An excellent communicator with an eye for detail, I also make the most of opportunities to 
              <br/>learn and develop, from completing courses in Psychology with the Open University to 
              <br/>ISO 9001 Quality Auditing Training.
            </p>
          </div>
        </div>
      </div>
      
      
    </>
  );
}

export default MainAbout;