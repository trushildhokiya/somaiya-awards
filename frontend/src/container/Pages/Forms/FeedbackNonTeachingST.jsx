import React from 'react'
import Navbar from '../../../components/Navbar';
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms';
import StudentNonTeachingFeedback from '../../../components/utils/data/StudentNonTeachingFeedback';
import StudentNonTeachingFeedbackForm from '../../../data/StudentNonTeachingFeedbackForm';

const FeedbackNonTeachingST = () => {

  const headings = ["Student Details", "Details of the employee to be evaluated" , "Your feedback about the employee","Review"]
  const limit = headings.length -1;

  const aboutForm = "Student feedback on non-teaching staff is a valuable tool for continuous improvement, as it allows for addressing concerns, recognizing outstanding service, enhancing support services, fostering a positive and supportive learning environment, and ultimately ensuring a high-quality student experience. This feedback empowers non-teaching staff to adapt and grow, meeting the evolving needs of students and providing them with the best possible educational journey.";
  
  return (
    <div>
      
      <Navbar /> 
      <FormInfo
        title="Student's Feedback: Non-Teaching Staff"
        info={aboutForm}
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
