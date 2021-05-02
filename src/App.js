import {
  Container,
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ChooseScreen from "./Screens/ChooseScreen";
import HomeScreen from "./Screens/HomeScreen";
import OrderScreen from "./Screens/OrderScreen";
import ReviewScreen from "./Screens/ReviewScreen";
import SelectPaymentScreen from "./Screens/SelectPaymentScreen";
import PaymentScreen from "./Screens/PaymentScreen";
import CompleteOrderScreen from "./Screens/CompleteOrderScreen";

const theme = createMuiTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "#fff",
    },
  },
  palette: {
    primary: { main: "#ff1744" },
    secondary: {
      main: "#118e16",
      contrastText: "#ffffff",
    },
  },
});
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <Paper>
            <Route path="/" component={HomeScreen} exact={true}></Route>
            <Route path="/choose" component={ChooseScreen} exact={true}></Route>
            <Route path="/order" component={OrderScreen} exact={true}></Route>
            <Route path="/review" component={ReviewScreen} exact={true}></Route>
            <Route
              path="/select-payment"
              component={SelectPaymentScreen}
              exact={true}
            ></Route>
            <Route
              path="/payment"
              component={PaymentScreen}
              exact={true}
            ></Route>
            <Route
              path="/complete"
              component={CompleteOrderScreen}
              exact={true}
            ></Route>
          </Paper>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
