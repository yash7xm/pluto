import './App.css'
import Nav from './Components/Nav'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'


function App() {

  return (
    <>
     <Nav />
     <div className="content">
      <Sidebar />
      <Content />
     </div>
    </>
  )
}

export default App
