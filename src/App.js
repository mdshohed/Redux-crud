import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Error from "./pages/shared/Error";
import Navbar from "./pages/layouts/Navbar";
import AddBook from "./features/books/AddBook";
import BooksView from "./features/books/BooksView";
import Footer from "./pages/layouts/Footer";
import EditBook from "./features/books/EditBook";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/add-book" element={<AddBook></AddBook>}></Route>
        <Route path="/show-books" element={<BooksView></BooksView>}></Route>
        <Route path="//edit-book" element={<EditBook></EditBook>}></Route>
        <Route path="/error" element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>  
  );
}

export default App;

