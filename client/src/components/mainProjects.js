import React from "react";
import Baton from '../media/images/Baton.png'
import Dillon from '../media/images/dillon.jpeg'
import TopTrumps from '../media/images/toptrumps.png'

const MainProjects = () => {

  return (
    <>
      <p class='sectionhead'>Projects</p>
      <div class='mainprojectscontentleft'>
          <img class='mainprojectsimage' src={Baton} width='200'></img>
          <div>
            <p class='subhead'>Music Elepahant</p>
            <p class='subheadtagline'>CAPSTONE GROUP PROJECT</p>
            <p>An iOS app used to teach music theory through interactive lessons and quizzes, as well as allowing users 
              <br/>to create and edit profiles.
              <br/>Built using:
              <br/> - Dart
              <br/> - Flutter
              <br/> - Java
              <br/> - Spring
              <br/> - PostgreSQL
            </p>
          </div>
      </div>
      <div class='mainprojectscontentleft'>
          <img class='mainprojectsimage' src={TopTrumps} width='200' height='200'></img>
          <div>
            <p class='subhead'>top_trumps</p>
            <p class='subheadtagline'>GROUP PROJECT</p>
            <p>An app that allows users to play a version of the card game, Top Trumps. In addition to playing the game, 
              <br/>users can also create and update profiles and custom decks of cards, as well as see play statistics 
              <br/>and league tables.
              <br/>Built using:
              <br/> - JavaScript
              <br/> - React
              <br/> - Express.js
              <br/> - Node.js
              <br/> - MongoDB
              <br/> - Insomnia
              <br/> - HTML
              <br/> - CSS
              
            </p>
          </div>
      </div>
      <div class='mainprojectscontentleft'>
          <img class='mainprojectsimage' src={Dillon} width='200' height='130'></img>
          <div>
            <p class='subhead'>project_gym</p>
            <p class='subheadtagline'>Solo Project</p>
            <p>A web application designed to manage fitness classes and member bookings for a gym built with an MVC 
              <br/>design pattern.

              <br/>Built using:
              <br/> - Python3
              <br/> - Flask
              <br/> - SQLite3
              <br/> - HTML
              <br/> - CSS

              
            </p>
          </div>
      </div>
    </>
  );
}

export default MainProjects;