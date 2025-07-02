import { useEffect, useState,useCallback, useRef,use } from 'react'
import './App.css'
import CardContainer from './CardContainer'
import Watch from './Watch'
import { ramdomWords } from './constants'
import type { PropsCard } from './types'
import { UserContext } from './context/userContex'

function App() {
  const [togleButton, setTogleButton] = useState({stateDisabled:false, stateMessage:false})
  const [watch, setWatch] = useState({seconds:0,minutes:0})
  const [words, setWords] = useState(ramdomWords)
  const [wordSelected, setWordSelected] = useState<Array<PropsCard>|null>(null)
  const refWatch = useRef<any>(null);
  const {name,score,updateName,updateScore} = use(UserContext);


  const setStateWord = useCallback(({state,word}:{state:boolean,word:PropsCard}) =>{
    setWords((prev) => prev.map((e) =>{
      const updateWord:PropsCard = (word&&e.id===word.id)
       ? {...e,state}
       : {...e} 


        //console.log(e.id==word?.id)
        //console.log(word?.id)
        //console.log(e.id)
       //console.log(word)
       

      return updateWord
    }))
    //console.log(words)
  },[])


  const checkWordSelected = useCallback(async ({word} :{word:PropsCard}) =>{
    
    console.log(wordSelected===null);
    console.log(wordSelected);
    
    setWordSelected((prev) =>{
      if(prev===null)return  [word];
      else {
        const wordExist = prev.filter(e => word.id === e.id)

        if(wordExist.length>0) return [...prev]
        
        return [...prev,word]
      }
      //[...prev,word]
      
    })
    setStateWord({state:true,word});
  },[])

  const setStateAllWords = useCallback(({state}:{state:boolean}) =>{
    setWords(ramdomWords.map((e) =>{
      return {
        ...e,
        state
      }
    }))
  },[])

  const startGame = useCallback(() =>{
    setWatch({minutes:0,seconds:3})
    setTogleButton({stateDisabled:!togleButton.stateDisabled,stateMessage:!togleButton.stateMessage})
  },[])

  useEffect(() =>{

      if(watch.seconds === 3){
        setStateAllWords({state:true});
        setTogleButton({...togleButton,stateDisabled:true})
      }

      if(watch.seconds===0&&refWatch.current) {
        clearInterval(refWatch.current)
        setStateAllWords({state:false})
        setTogleButton({stateDisabled:false,stateMessage:true})
      }
      

      //se mantiene nullo la referencia hasta que se alla iniciado
      if(togleButton.stateMessage){
        refWatch.current = setInterval(()=>{
        if(watch.seconds>0) {
          setWatch({...watch,seconds:--watch.seconds})
          setTogleButton({stateDisabled:true,stateMessage:true})
        }

          
      },1000)
      }
    //console.log(refWatch);


  },[watch])

  useEffect(() =>{
      console.log(wordSelected)
      //console.log(togleButton);
      console.log("words: ",words);
      
      
  },[wordSelected])

  return (
    <>
    <div className='header'>
      <h2>Game {name&&name}</h2>
      <h2>Score:{score&&score}</h2>
    </div>
      <Watch
        minutes={watch.minutes}
        seconds={watch.seconds}
      />
      <CardContainer
        words={words}
        checkfunction={checkWordSelected}
      />
      {(togleButton.stateMessage) ? (
        <button disabled={togleButton.stateDisabled} onClick={() =>{setTogleButton({...togleButton,stateMessage:!togleButton.stateMessage})}}>Reset</button>
      ):
      (
        <button  onClick={()=>startGame()}>Start</button>
      )}
    </>
  )
}

export default App
