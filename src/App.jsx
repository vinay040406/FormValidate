import DummyArray from "./Components/DummyArray";
import Form from "./Components/Form";
import Input from "./Components/Input";
import { Routes, Route } from "react-router-dom";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Login from "./Components/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />}></Route>
      <Route path="/input" element={<Input />}></Route>
      <Route path="/dummyarray" element={<DummyArray />}></Route>
      <Route path="/" element={<Register />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default App;

export const HomePage = () => {
  return <h1>Home page</h1>;
};
