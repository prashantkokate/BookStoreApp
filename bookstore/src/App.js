
import './App.css';
import AboutUS from './components/AboutUS';
import AllBooks from './components/AllBooks';
import AddBook from './components/AddBook';
import Header from './components/Header';
import BookDetails from './components/BookDetails';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
<div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/addbook' element={<AddBook/>}/>
      <Route path='/allbooks' element={<AllBooks/>}/>
      <Route path='/aboutus' element={<AboutUS/>}/>
      <Route path='/book/:id' element={<BookDetails/>}/>
    </Routes>
  </BrowserRouter>
   </div>
   
  );
}

export default App;
