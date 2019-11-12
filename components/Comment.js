import React from 'react'

const Comment = ({comment}) => console.log(comment) || (
    <div className="comment">
      <div className="comment-user">
        <div className="comment-content" dangerouslySetInnerHTML={{ __html:comment.content }}></div>
      </div>
    </div>
  )

export default Comment
