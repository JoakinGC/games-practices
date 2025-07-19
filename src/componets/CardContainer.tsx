import Card from "../componets/Card";
import type { PropsCard } from "../types";

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
                  className={`border-card ${
                    (e.wasSuccessful===null)? ""
                    :e.wasSuccessful ? "error-card": "success-card"
                  
                  }`} 
                  onClick={() =>{checkfunction({word:e})}}
                  
                  >
                  <Card 
                    cardData={e}
                  />
                </span>
              )
            })
          ):(
            words.map((__,i) =>{
              return(
                <span 
                  key={i}
                  className="border-card"  
                  >
                  
                </span>
              )
            })
          )}
    </div>
  )
}

export default CardContainer;