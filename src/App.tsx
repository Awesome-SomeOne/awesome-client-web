import "./App.css";

import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <div>웹뷰 하이</div> */}
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
