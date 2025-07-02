import Card from "./Card";
import type { PropsCard } from "./types";

const CardContainer = ({words,checkfunction}:{words:Array<PropsCard>,checkfunction:any}) => {
  return (
    <div className="container-cards">
      

        {(  words && words.length>0)
          ?
          (
            words.map((e,i) =>{
              return(
                <span 
                  key={i}
                  className="borderCard"
                  onClick={() =>{checkfunction({word:e})}}
                  >
                  <Card 
                    checkWord={checkfunction}
                    cardData={e}
                  />
                </span>
              )
            })
          ):(
            <></>
          )}
    </div>
  )
}

export default CardContainer;