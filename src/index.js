import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import rootReducer from "./redux/index";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const store = createStore(rootReducer, composeWithDevTools());
const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#333",
      white: "#fff",
    },
    primary: {
      main: "#cf556c",
      contrastText: "#fff",
      mainGradient:
        "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)",
    },
    secondary: {
      main: "#f99185",
    },
    button: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 2.5,
    },
  },
  typography: {
    fontFamily: [
      "Nanum Gothic",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
