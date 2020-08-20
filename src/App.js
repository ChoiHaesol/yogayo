import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import Booking from "./pages/Booking";
import Board from "./pages/Board";
import MyBookings from "./pages/MyBookings";
import Diary from "./pages/Diary";
import Voucher from "./pages/Voucher";
import Detail from "./pages/Detail";

//Read me
//컴포넌트 이름에 Styled 가 붙은 것들 ==> styled components 패키지로 css 적용된 컴포넌트임.
//material-ui 의 Link = <Link> / react-router-dom의 Link는 RouterLink로 표시.
function App() {
  return (
    <div>
      <Router>
        <ResponsiveDrawer>
          <Route path="/" component={Main} exact={true}></Route>
          <Route path="/login" component={Login} exact={true}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/main" component={Main}></Route>
          <Route path="/Booking" component={Booking}></Route>
          <Route path="/board" component={Board} exact={true}></Route>
          <Route path="/board/detail" component={Detail}></Route>
          <Route path="/diary" component={Diary}></Route>
          <Route path="/mypage/bookings" component={MyBookings}></Route>
          <Route path="/vouchers" component={Voucher}></Route>
        </ResponsiveDrawer>
      </Router>
    </div>
  );
}

export default App;
