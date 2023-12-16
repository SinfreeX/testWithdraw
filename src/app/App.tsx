import {Route, Routes} from "react-router-dom";
import {CssBaseline, ThemeProvider} from "@mui/material";

import {mainTheme} from "./themas/mainTheme.ts";

import {Layout} from "../shared/ui";
import {MultiWithdraw} from "../widgets/withdraw";

export const App = () => {

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MultiWithdraw />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

