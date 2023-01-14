import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuDisplay from "./screens/menuDisplay";
import HomeScreen from "./screens/homeScreen";
import AboutScreen from "./screens/aboutScreen";
import ContactScreen from "./screens/contactScreen";
import ErrorScreen from "./screens/errorScreen";
import SuccessScreen from "./screens/successScreen";
import NoPageScreen from "./screens/noPageScreen";
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutScreen />} />
        <Route path="contact" element={<ContactScreen />} />
        <Route path="error" element={<ErrorScreen />} />
        <Route path="success" element={<SuccessScreen />} />
        <Route path="*" element={<NoPageScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);