import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { displayMonth } from "../../helpers/Date";

import "./style.scss";


const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(false);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  const nextCard = () => {
  //   setTimeout(
  //     length = 3 alors que max index = 2
  //     // () => setIndex(index < byDateDesc.length-1 ? index+1  : 0),
  //     5000
  //   );
  };
  useEffect(() => {
    nextCard();
  });
const handleChangeRadio = (i) =>{
  setIndex(i)
  setCheck(true)
}







  return (
    
    <div className="SlideCardList">
      {byDateDesc?.map((event , idx) => (
        <>
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{displayMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
            {byDateDesc?.map((_, radioIdx )  => (
                 
                 <input
                 key={`${event.id}`}
                   type="radio"
                   name="radio-button"
                   checked= {radioIdx === index || check }
                   onChange={() => handleChangeRadio(radioIdx)}
                 />
               ))}
                
               
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;
