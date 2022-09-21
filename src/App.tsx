import { ChakraProvider } from "@chakra-ui/react";
import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderLayout } from "./organisms/templates/HeaderLayout";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Page404 } from "./pages/Page404";
import { Setting } from "./pages/Setting";
import { UserManagement } from "./pages/UserManagement";
import theme from "./theme";

const homeRoutes = [
  { path: "/", element: <Login /> },
  { path: "home", element: <Home /> },
  { path: "home/user_management", element: <UserManagement /> },
  { path: "home/setting", element: <Setting /> },
];

const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        {homeRoutes.map((item) => {
          return (
            <Route
              key={item.path}
              path={item.path}
              element={<HeaderLayout>{item.element}</HeaderLayout>}
            />
          );
        })}

        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
});

const App: FC = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
});

export default App;
