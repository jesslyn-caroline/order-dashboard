import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexLayout from './layouts/IndexLayout'
import menus from './data/navigation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexLayout />}>
          { menus.map((menu) => {
              return <Route path={menu.path} element={menu.element} /> 
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
