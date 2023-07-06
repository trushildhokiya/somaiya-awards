import React from 'react'
import Navbar from '../../../components/Navbar'
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms'
import FeedbackTeachingPeerForm from '../../../data/FeedbackTeachingPeerForm'
import FeedbackPeerTeaching from '../../../components/utils/data/FeedbackPeerTeaching'

const FeedbackTeachingPR = () => {
  
  const headings = ["Basic Information", "Nominee Ratings", "Review"]
  const limit = headings.length-1
  const aboutForm = "The peers' feedback form for teaching enables colleagues to provide valuable insights on teaching effectiveness. This form fosters collaboration, encourages professional growth, and promotes a culture of continuous improvement. By collecting feedback from peers, teaching staff gain valuable perspectives to refine their teaching approaches and enhance the learning experience for students.";
  return (
    <div>
      <Navbar/>

      <FormInfo
      title="Peers Feedback Form for Teaching"
      info={aboutForm}
      />

      <Forms
      pageHeadings={headings}
      pageCount={limit}
      data={FeedbackTeachingPeerForm}
      stages={FeedbackPeerTeaching}
      />
    </div>
  )
}

export default FeedbackTeachingPR