import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Card = ({ title, info }) => {
  const [showInfo, setShow] = useState(false);
  return (
    <div className="singleQuestion">
      <div className="question">
        <h4>{title}</h4>
        <button type="button" onClick={() => setShow(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {showInfo && <p>{info}</p>}
    </div>
  );
};

export default Card;
