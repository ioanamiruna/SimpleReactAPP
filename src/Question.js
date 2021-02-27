import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ id, title, info }) => {
  const [seeInfo, setSeeInfo] = useState(true)

  return (

    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          {seeInfo && <p>{info}</p>}

          <button className="btn" onClick={() => setSeeInfo(!seeInfo)}>
            {seeInfo ? '+' : 'x'}
          </button>
        </header>
      </article>
    </>

  );
};

export default Question;
