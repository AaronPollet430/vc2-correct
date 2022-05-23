import React, { Fragment } from 'react'; //, useState
import './App.css';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Accommodaties from './components/pages/Accommodaties';
import Hostworden from './components/pages/Hostworden';
import Contact from './components/pages/Contact';
import Diensten from './components/pages/Diensten';
import Registreer from './components/pages/Registreer';
import Inloggen from './components/pages/Inloggen';
import DetailedPage from './components/pages/DetailedPage';
import History from './components/functions/History';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingPage from './components/pages/Booking';
import Payment from './components/pages/Payment';
import Dashboard from './components/pages/Dashboard';
import DashboardPage from './components/layout/dashboardPage/DashboardPage';
import HostAccommodations from './components/layout/dashboardPage/MyAccommodations';
import MyResults from './components/layout/dashboardPage/MyResults';
import UserProfile from './components/layout/dashboardPage/UserProfile';
import NewAccoStep1 from './components/layout/dashboardPage/newAccommodation/NewAccoStep1';
import NewAccoStep2 from './components/layout/dashboardPage/newAccommodation/NewAccoStep2';
import NewAccoStep3 from './components/layout/dashboardPage/newAccommodation/NewAccoStep3';
import NewAccoStep4 from './components/layout/dashboardPage/newAccommodation/NewAccoStep4';
import NewAccoStep5 from './components/layout/dashboardPage/newAccommodation/NewAccoStep5';
import NewAccoStep6 from './components/layout/dashboardPage/newAccommodation/NewAccoStep6';
import AdminDashboard from './components/layout/adminPage/adminDashboard/AdminDashboard';
import MyBookings from './components/layout/userPage/MyBookings';
import ViewMyBooking from './components/layout/userPage/MyBookingDetail';
import ViewFavourites from './components/layout/userPage/MyFavourites';
import EditAccoStep1 from './components/layout/dashboardPage/editAccommodation/EditAccoStep1';
import EditAccoStep2 from './components/layout/dashboardPage/editAccommodation/EditAccoStep2';
import EditAccoStep3 from './components/layout/dashboardPage/editAccommodation/EditAccoStep3';
import EditAccoStep4 from './components/layout/dashboardPage/editAccommodation/EditAccoStep4';
import EditAccoStep5 from './components/layout/dashboardPage/editAccommodation/EditAccoStep5';
import EditAccoStep6 from './components/layout/dashboardPage/editAccommodation/EditAccoStep6';
import BlockMyAcco from './components/layout/dashboardPage/BlockMyAccommodation';
import ViewMyAcco from './components/layout/dashboardPage/MyAccommodationDetail';
import EditUserProfile from './components/layout/dashboardPage/UserProfileEdit';
import ViewAccoRequest from './components/layout/adminPage/adminDashboard/AccoRequests';
import ViewIncome from './components/layout/adminPage/adminDashboard/AdminIncome';
import reactRouterToArray from 'react-router-to-array';
import AddService from './components/layout/adminPage/adminServices/AddService';
import AdminServices from './components/layout/adminPage/adminServices/AdminServices';
import ViewService from './components/layout/adminPage/adminServices/ViewService';
import EditService from './components/layout/adminPage/adminServices/EditService';
import BookingConfirmation from './components/layout/booking/BookingConfirmationPage';
import AdminUsers from './components/layout/adminPage/users/AdminUsers';
import EditUserRole from './components/layout/adminPage/users/EditUserRole';
import ViewUser from './components/layout/adminPage/users/ViewUser';
import AdminContent from './components/pages/AdminContent';
import UserContent from './components/pages/UserContent';
import PaymentPage from './components/layout/booking/PaymentPage';
import BookingConfirmationPage from './components/layout/booking/BookingConfirmationPage';

const App = () => {
  const routes = (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/homes' element={<Accommodaties />} />
      <Route exact path='/homes/detail/:id' element={<DetailedPage />} />
      <Route exact path='/hostworden' element={<Hostworden />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/Diensten' element={<Diensten />} />
      <Route exact path='/registreer' element={<Registreer />} />
      <Route exact path='/inloggen' element={<Inloggen />} />
      <Route exact path='/booking' element={<BookingPage />} />
      <Route exact path='/bookingconfirmed' element={<BookingConfirmation />} />
      <Route exact path='/payment' element={<Payment />} />
      <Route path='user-content' element={<UserContent />}>
        <Route path='my-bookings' element={<MyBookings />} />
        <Route path='my-booking-detail' element={<ViewMyBooking />} />
        <Route path='my-favourites' element={<ViewFavourites />} />
        <Route path='user-profile' element={<UserProfile />} />
        <Route path='edit-user-profile' element={<EditUserProfile />} />
      </Route>

      <Route exact path='/dashboard/' element={<Dashboard />}>
        <Route path='host-dashboard' element={<DashboardPage />} />

        <Route path='my-accommodations' element={<HostAccommodations />} />
        <Route path='my-accommodation-detail' element={<ViewMyAcco />} />

        <Route path='edit-accommodation-step-1' element={<EditAccoStep1 />} />
        <Route path='edit-accommodation-step-2' element={<EditAccoStep2 />} />
        <Route path='edit-accommodation-step-3' element={<EditAccoStep3 />} />
        <Route path='edit-accommodation-step-4' element={<EditAccoStep4 />} />
        <Route path='edit-accommodation-step-5' element={<EditAccoStep5 />} />
        <Route path='edit-accommodation-step-6' element={<EditAccoStep6 />} />

        <Route path='block-accommodation' element={<BlockMyAcco />} />

        <Route path='add-accommodation-step-1' element={<NewAccoStep1 />} />
        <Route path='add-accommodation-step-2' element={<NewAccoStep2 />} />
        <Route path='add-accommodation-step-3' element={<NewAccoStep3 />} />
        <Route path='add-accommodation-step-4' element={<NewAccoStep4 />} />
        <Route path='add-accommodation-step-5' element={<NewAccoStep5 />} />
        <Route path='add-accommodation-step-6' element={<NewAccoStep6 />} />

        <Route path='my-results' element={<MyResults />} />
      </Route>

      <Route path='admin-content' element={<AdminContent />}>
        <Route path='admin-dashboard' element={<AdminDashboard />} />
        <Route path='accommodation-request' element={<ViewAccoRequest />} />
        <Route path='admin-income' element={<ViewIncome />} />
        <Route path='admin-services' element={<AdminServices />} />
        <Route path='admin-add-service' element={<AddService />} />
        <Route path='admin-view-service' element={<ViewService />} />
        <Route path='admin-edit-service' element={<EditService />} />
        <Route path='admin-users-overview' element={<AdminUsers />} />
        <Route path='admin-view-user' element={<ViewUser />} />
        <Route path='admin-edit-role' element={<EditUserRole />} />
      </Route>
    </Routes>
  );

  const a = (
    <Router history={History}>
      <Fragment>
        <NavBar />
        {routes}
        <Footer />
      </Fragment>
    </Router>
  );
  return a;
};

export default App;
