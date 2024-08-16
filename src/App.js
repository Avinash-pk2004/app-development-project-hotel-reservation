import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Hotel0 from "./pages/hotel/Hotel0";
import Hotel2 from "./pages/hotel/Hotel2";
import PaymentForm from "./components/paymentform/PaymentForm";
import BookingSuccess from "./components/paymentsuccess/BookingSuccess";
import OtpPopup from "./components/otppopup/OtpPopup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/see" element={<Hotel/>}/>
        <Route path="/see0" element={<Hotel0/>}/>
        <Route path="/see2" element={<Hotel2/>}/>
        <Route path="/pay" element={<PaymentForm/>}/>
        <Route path="/pays" element={<BookingSuccess/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
