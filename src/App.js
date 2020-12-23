import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from './Header'
import Generos from './Generos'
import NovoGenero from './NovoGenero'
import EditarGenero from './EditarGenero'


const Home = () => {
  return <h1>Home</h1>
}

function App() {
  const [data,setData] = useState({})
  useEffect(() => {
    axios
      .get('/api')
      .then(res => {
        setData(res.data)
    })
  }, [] )
  return (
    <Router> 
      <div>
        <Header />
        <Route exact path='/'  component={Home} />
        <Route exact path='/generos/:id/edit'  component={EditarGenero} />
        <Route exact path='/generos/novo' component={NovoGenero} />
        <Route exact path='/generos' component={Generos} />
        
        <br/><br/><br/><br/>
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  );
}

export default App
