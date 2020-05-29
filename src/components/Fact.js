import React from 'react'

const Fact = ({ fact }) => {
  return (
    <div className="d-flex justify-content-center">
        <div className="card fact">
          <div className="card-body">
            <h5 className="card-title">{fact.fact}</h5>
          </div>
        </div>
      
    </div>
  )
};
export default Fact