import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexLayout from './layouts/IndexLayout'
import pages from './data/navigation'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexLayout />}>
          { pages.menus.map((menu) => {
              return <Route path={menu.path} element={menu.element} /> 
          })}
        </Route>
        { pages.subpages.map((subpage) => {
            return <Route path={subpage.path} element={subpage.element} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
