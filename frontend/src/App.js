import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/getUser/User";
import AddUser from './pages/addUser/AddUser'
import UpdateUser from './pages/updateUser/UpdateUser'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/add-user" element={<AddUser/>} />
          <Route path="/update/:id" element={<UpdateUser/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
