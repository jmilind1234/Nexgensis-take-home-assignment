import './App.css';
import FeedbackForm from './Components/FeedbackForm';
import Header from './Components/Header';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<><Home/></>}></Route>
        <Route path="about" element={<h1>Dummy about page</h1>}></Route>
        <Route path="contact" element={<h1>Dummy contact page</h1>}></Route>
        <Route path="feedback" element={<><FeedbackForm/></>}></Route>
      </Routes>
    </>
  );
}

export default App;
