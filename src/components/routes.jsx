import { createBrowserRouter } from "react-router-dom";
import Layout  from "./Layout"

export const ROOT = "/";
export const router = createBrowserRouter([
  { path: ROOT, element: <Layout/>},]);