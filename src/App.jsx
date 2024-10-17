
//Form, Table, some JS to push data from the form to the table
// create an App component to render as our main component

import './App.css'
import Table from './components/Table'
import Form from './components/Form'

import { useState } from 'react'





function App(){ //Capitalize component names

  // all components have to return some JSX -- that's it

  const[favLinks, setFavLinks] = useState([])


  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data])
  }
  
  return(
    <div>
      <h1 className="testClass"> Submit your fav links!</h1>

      <Form onNewSubmit={handleNewSubmission}/>  

      <Table links={favLinks} />

    </div>
  ) 

}

export default App