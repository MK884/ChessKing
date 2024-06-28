import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GamePage, LandingPage, Login } from './views'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route element={<LandingPage/>}  path='/'/>
            <Route element={<Login />}  path='/login'/>
            <Route element={<GamePage/>}  path='/game'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
