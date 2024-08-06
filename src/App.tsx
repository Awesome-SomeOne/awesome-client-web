import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div>웹뷰 하이</div>
      <Outlet />
    </>
  );
}

export default App;
