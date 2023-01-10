import React from "react";

const Display = ({ fuck }) => {
  return (
    <div className='input-group col-lm-7'>
      <input
        type='text'
        defaultValue={""}
        id='nombre'
        className='form-control border border-primary bg-primary bg-gradient fs-5 text-end text-white'
        aria-label="Recipient's username"
        aria-describedby='button-addon2'
      />
    </div>
  );
};

export default Display;
