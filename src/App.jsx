import { Route, Routes } from 'react-router-dom'

import StarshipList from './pages/StarshipList/StarshipList'
import StarshipPage from './pages/StarshipPage/StarshipPage'
import FilmList from './pages/FilmList/FilmList'

import './App.css'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:starshipId' element={<StarshipPage />} />
        <Route path='/films' element={<FilmList />} />
      </Routes>
    </>
  )
}

export default App
