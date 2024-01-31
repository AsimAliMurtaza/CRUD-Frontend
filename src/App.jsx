import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
