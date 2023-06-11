import React from "react";
import OutstandingInstitution from "./container/Pages/Forms/OutstandingInstitution";
import SportsStar from './container/Pages/Forms/SportsStar'
import Teaching from './container/Pages/Forms/Teaching'
import Research from './container/Pages/Forms/Research'
import NonTeaching from './container/Pages/Forms/NonTeaching'
import FeedbackTeachingST from './container/Pages/Forms/FeedbackTeachingST'
import FeedbackTeachingPR from './container/Pages/Forms/FeedbackTeachingPR'
import FeedbackNonTeachingST from './container/Pages/Forms/FeedbackNonTeachingST'
import FeedbackNonTeachingPR from './container/Pages/Forms/FeedbackNonTeachingPR'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./container/Pages/Login";
import ForgotPassword from "./container/Pages/ForgotPassword";
import ResetPassword from "./container/Pages/ResetPassword";
import Card from "./container/Pages/Utility/Card";
import Admin from "./container/views/admin/Admin";
import Overview from "./container/Pages/View Pages/Overview";
import Responses from "./container/Pages/View Pages/Responses";
import Home from "./container/Pages/Home";
import Hoi from "./container/views/hoi/Hoi";
import PageNotFound from "./container/Pages/Utility/PageNotFound";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index  element={<Home />}  />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/:id/:token" element={<ResetPassword />} />
        <Route path="/forms/cards" element={<Card />} />
        <Route path='/hoi' element={<Hoi />} />
        <Route path='/admin/dashboard' element={<Admin />} />
        <Route path="/admin/:formtype/overview" element={<Overview />} />
        <Route path="/admin/:formtype/responses" element={<Responses />} />
        <Route path="/forms/outstanding-institution" element={<OutstandingInstitution />}  />
        <Route path="/forms/sports" element={<SportsStar />}  />
        <Route path="/forms/research" element={<Research />}  />
        <Route path="/forms/teaching" element={<Teaching />}  />
        <Route path="/forms/non-teaching" element={<NonTeaching />}  />
        <Route path="/forms/feedback-01" element={<FeedbackTeachingST />}  />
        <Route path="/forms/feedback-02" element={<FeedbackTeachingPR />}  />
        <Route path="/forms/feedback-03" element={<FeedbackNonTeachingST />}  />
        <Route path="/forms/feedback-04" element={<FeedbackNonTeachingPR />}  />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
