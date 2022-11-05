
import './App.css';
import Header from './component/Header';
import NotesListPage from './pages/NotesListPage';
import {
  HashRouter as Router,
  Routes,
  Route,



} from "react-router-dom";
import Notepage from './pages/Notepage';
function App() {
  return (
    <Router>
      <div className="container dark">
        <div className='app'>
          <Header></Header>
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path='note/:id' element={<Notepage />}></Route>


          </Routes>

        </div>



      </div>
    </Router>
  );
}




export default App;
