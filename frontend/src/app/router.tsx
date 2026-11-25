import { createBrowserRouter } from "react-router";
import App from "./App";
import { StyleguidePage } from "../features/styleguide/StyleguidePage";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/styleguide", element: <StyleguidePage /> },
]);
