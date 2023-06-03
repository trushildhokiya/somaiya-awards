import React from 'react'
import Navbar from '../../../components/Navbar';
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms';
import StudentNonTeachingFeedback from '../../../components/utils/data/StudentNonTeachingFeedback';
import StudentNonTeachingFeedbackForm from '../../../data/StudentNonTeachingFeedbackForm';

const FeedbackNonTeachingST = () => {

  const headings = ["Student Details", "Details of the employee to be evaluated" , "Your feedback about the employee","Review"]
  const limit = headings.length -1;

  return (
    <div>
      
      <Navbar /> 
      <FormInfo
        title="Student's Feedback: Non-Teaching Staff"
      />
      
      <Forms
        pageHeadings={headings}
        pageCount={limit}
        data={StudentNonTeachingFeedbackForm}
        stages={StudentNonTeachingFeedback}
      />

    </div>
  )
}

export default FeedbackNonTeachingST
