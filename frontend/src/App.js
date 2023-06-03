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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/outstanding-institution" element={<OutstandingInstitution />}  />
        <Route path="/sports-star" element={<SportsStar />}  />
        <Route path="/research" element={<Research />}  />
        <Route path="/teaching" element={<Teaching />}  />
        <Route path="/non-teaching" element={<NonTeaching />}  />
        <Route path="/feedback-t-st" element={<FeedbackTeachingST />}  />
        <Route path="/feedback-t-pr" element={<FeedbackTeachingPR />}  />
        <Route path="/feedback-nt-st" element={<FeedbackNonTeachingST />}  />
        <Route path="/feedback-nt-pr" element={<FeedbackNonTeachingPR />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
