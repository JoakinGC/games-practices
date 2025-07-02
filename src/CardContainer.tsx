import Card from "./Card";
import type { PropsCard } from "./types";

const CardContainer = ({words,checkfunction,stateGame}:{words:Array<PropsCard>,checkfunction:any,stateGame:boolean}) => {
  return (
    <div className="container-cards">
      

        {(  words && words.length>0&&stateGame)
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
            words.map((e,i) =>{
              return(
                <span 
                  key={i}
                  className="borderCard"  
                  >
                  
                </span>
              )
            })
          )}
    </div>
  )
}

export default CardContainer;