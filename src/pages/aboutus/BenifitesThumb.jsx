import React from 'react'

const BenifitesThumb = (props) => {
  return (
    <div>
      <div className="benifitsthumb">
              <h2>{props.thumbno}</h2>
              <h2>{props.title}</h2>
              <p>
                {props.description}
              </p>
            </div>
    </div>
  )
}

export default BenifitesThumb
