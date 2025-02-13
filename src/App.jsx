import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateMetting from './CreateMetting'
import Metting from './Metting'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<CreateMetting/>} />
          <Route path='/metting/:roomid' element={<Metting/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App