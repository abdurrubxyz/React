import React from 'react'

const Feedback = ({feedback}) => {
  return (
    <div>
        {feedback.map((items => (
            <p key={items.id}>{items.text}</p>
        )))}
    </div>
  )
}

export default Feedback