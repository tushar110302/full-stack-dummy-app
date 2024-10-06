import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
