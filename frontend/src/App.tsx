import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UploadPage from './pages/uploadPage'
import ResultsPage from './pages/ResultsPage';

function App() {
  return (
    <>
      <div style={{ padding: "2rem"}}>
        <h1>CV Scanner</h1>
        <Router>
          <Routes>
            <Route path='/' element={<UploadPage/>}></Route>
            <Route path='/results' element={<ResultsPage/>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
