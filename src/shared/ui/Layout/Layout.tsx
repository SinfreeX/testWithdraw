import {Stack} from "@mui/material";
import {Outlet} from "react-router-dom";

// Лэйаут
export const Layout = () => (
  <Stack height="100vh" justifyContent="center" alignItems="center">
    <Outlet/>
  </Stack>
)