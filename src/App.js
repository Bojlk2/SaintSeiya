import { useState, useEffect } from "react"
import api from './lib/api'
import JobForm from './Components/JobForm'
import Card from './Components/Card'
import './App.scss'



function App() {
  
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-mb-6">
            <h1>Hola</h1>
            <JobForm />
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
