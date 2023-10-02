import Pagination from "./components/Pagination";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page from "./pages/Page";
import Navigation from "./components/Navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page />,
  },
]);
function App() {
  return (
    <div className="bg-[#ecf0f6] px-4 py-4">
      <Navigation />
      <RouterProvider router={router} />
      <Pagination />
    </div>
  );
}

export default App;
