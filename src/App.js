import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes";

export default function App() {
  return (
  
      <RouterProvider router={router} />
  
  );
}
