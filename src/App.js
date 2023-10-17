import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import SignupMUI from "./screens/SignupMUI";
import SignupSaving from "./components/saving";
import Login from "./screens/Login";
import TermsConditions from "./screens/TermsConditions";
import ResetPassword from "./screens/ResetPassword";
import ContactNo from "./screens/ContactNo";
import NumberInput from "./screens/test";
import CheckEmail from "./screens/CheckEmail";
import NewPassword from "./screens/NewPassword";
import MobileCode from "./screens/MobileCode";
import Congratulations from "./screens/Congratulations";
import Topbar from "./screens/Topbar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            <Topbar />
            <Routes>
              {/* <Route path="/" element={<Signup />} /> */}
              <Route path="/" element={<SignupMUI />} />
              <Route path="/login" element={<Login />} />
              <Route path="/termsandcondtions" element={<TermsConditions />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/contactno" element={<ContactNo />} />
              <Route path="/test" element={<NumberInput />} />
              <Route path="/checkemail" element={<CheckEmail />} />
              <Route path="/newpassword" element={<NewPassword />} />
              <Route path="/mobilecode" element={<MobileCode />} />
              <Route path="/congratulations" element={<Congratulations />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
