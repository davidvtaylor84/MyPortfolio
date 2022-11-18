import React from 'react'
import './PythonProject.css';


const JavaScriptProject = () => {
  return (
      <>
      <div className='videoDiv'>
        <iframe className='video' src="https://player.vimeo.com/video/762919755?h=762278e92a&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="YouTube video player" border="0px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='pythonBrief'>
      <h2>Holy Shiitake</h2>
      <p>This healthy eating app was built using:</p>
      <li>HTML/CSS</li>
      <li>Javascript</li>
      <li>React</li>
      <li>Express</li>
      <li>Node.js</li>
      <li>MongoDB</li>
      <h3>Brief</h3>
      <p>Identify a habit you'd like to help someone break or build (e.g. alcohol consumption, smoking, calories, exercise, healthy eating...) and make an app to help. This app that our team of four built in one week can:</p>
      <li>Allow a user to search for recipes based on a key word, e.g. ingredient</li>
      <li>Fetches a random recipe from the API and re-fetches based on a button press</li>
      <li>Presents each recipe with ingredients, an external link and an 'add to entry' button</li>
      <li>Create a diary entry including the recipe name, a date and notes from the user</li>
      <li>Displays the dates a user has entered a diary entry on</li>
      <li>Counts the overall number of entries and shows the user a 'level' of cooking they've achieved</li>
      <h3>My contributions</h3>
      <li>Full CRUD actions on the app - add, delete, edit.</li>
      <li>Navbar/hamburger menu.</li>
      <li>Mindfulness tip and reward system.</li>
    </div>
    </>
  )
}

export default JavaScriptProject