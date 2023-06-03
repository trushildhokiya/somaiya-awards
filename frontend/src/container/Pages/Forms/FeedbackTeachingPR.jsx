import React from 'react'
import Navbar from '../../../components/Navbar'
import FormInfo from '../../../components/FormInfo'
import Forms from '../../../components/Forms'
import FeedbackTeachingPeerForm from '../../../data/FeedbackTeachingPeerForm'
import FeedbackPeerTeaching from '../../../components/utils/data/FeedbackPeerTeaching'

const FeedbackTeachingPR = () => {
  
  const headings = ["Basic Information", "Nominee Ratings", "Review"]
  const limit = headings.length-1
  
  return (
    <div>
      <Navbar/>

      <FormInfo
      title="Peers Feedback Form for Teaching"
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