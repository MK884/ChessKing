import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GamePage, LandingPage } from './views'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<LandingPage/>}  path='/'/>
            <Route element={<GamePage/>}  path='/game'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
