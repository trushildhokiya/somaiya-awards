import React from 'react'
import FormInfo from '../../../components/FormInfo'
import Navbar from '../../../components/Navbar'
import Forms from '../../../components/Forms'
import PeerNonTeachingFeedbackForm from '../../../data/PeerNonTeachingFeedbackForm'
import FeedbackPeerNonTeaching from '../../../components/utils/data/FeebackPeerNonTeaching'

const FeedbackNonTeachingPR = () => {

  const title= "Peers Feedback Form for Non Teaching"
  const headings = ["Basic Information", "Nominee Ratings" ,"Review"]
  const limit = headings.length -1;

  return (
    <div>

      <Navbar />
      <FormInfo 
       title={title}
      />
      <Forms 
        pageHeadings={headings}
        pageCount={limit}
        data={PeerNonTeachingFeedbackForm}
        stages={FeedbackPeerNonTeaching}
      />
    </div>
  )
}

export default FeedbackNonTeachingPR