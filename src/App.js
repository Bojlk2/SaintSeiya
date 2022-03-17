import { useState, useEffect } from "react"
import api from './lib/api'
import FormSaint from "./Components/FormSaint"
import SaintCard from "./Components/Card"
import './App.scss'



function App() {
  const [saint, setSaint] = useState({})
  const [saintData, setSaintData] = useState({})

  useEffect(async () => {
    let data = await api.getAllSaint()
    setSaint(data)
  },[])

  const saintFormHandler = event => {
    let value = event.target.value
    let property = event.target.name
    setSaintData({...saintData, [property]: value})
  }

  const saveSaint = async () => {
    let saveResponse = await api.saveSaint(saintData)
    let data = await api.getAllSaint()
    setSaint(data)
  }

  const deleteSaint = async (event) => {
    let deleteResponse = await api.deleteSaint(saintData)
    let saintIndex = event.target.dataset.saintIndex
    console.log(saintIndex)
    let allSaint = saintData
    console.log(allSaint)
    allSaint.splice(saintIndex, 1)
    setSaint([...allSaint])
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-mb-6">
            <div className="row py-3">
              {Object.keys(saint).map(saintS => {
                return <SaintCard saintData={saint[saintS]}  handlers={{deleteSaint}} />
              })}
            </div>
          </div>
          <div className="col-12">
            <FormSaint handlers={{ saveSaint, saintFormHandler }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
