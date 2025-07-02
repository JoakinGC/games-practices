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
  const [resultScore, setResultScore] = useState(0)
  const [targetWord, setTargetWord] = useState<null|PropsCard>(null)
  


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

  const resetGame = useCallback(() =>{
    setResultScore(0)
    setWordSelected(null)
    setTargetWord(null)
    setStateAllWords({state:false})
    setWatch({minutes:0,seconds:0})
    setTogleButton(prev => ({...prev, stateMessage: false}))
  },[togleButton])


  const checkWordSelected = useCallback(({ word }: { word: PropsCard }) => {
  if (!targetWord) return;

  if (word.id === targetWord.id) {
    setStateWord({ state: true, word });
    setResultScore(prev => prev + 1);

    setWordSelected(prev => {
      const updated = prev ? [...prev, word] : [word];

      const selectedIds = updated.map(w => w.id);
      const remainingWords = words.filter(w => !selectedIds.includes(w.id));

      if (remainingWords.length === 0) {
        alert("¡Completaste todas las palabras!");
        updateScore({score:resultScore})
        resetGame();
        return updated;
      }

      const next = remainingWords[Math.floor(Math.random() * remainingWords.length)];
      setTargetWord(next);

      return updated;
    });
  } else {
  
    setStateWord({ state: true, word });
    alert("¡Palabra incorrecta!");
    resetGame();
  }
}, [targetWord, words, resetGame, setStateWord]);



  const setStateAllWords = useCallback(({state}:{state:boolean}) =>{
    setWords(ramdomWords.map((e) =>{
      return {
        ...e,
        state
      }
    }))
  },[])

  const startGame = useCallback(() =>{
    setTargetWord((prev) =>{return words[Math.floor(Math.random() * words.length)]})


    setWatch({minutes:0,seconds:3})
    setTogleButton({stateDisabled:!togleButton.stateDisabled,stateMessage:!togleButton.stateMessage})
  },[])


  useEffect(() =>{
    if(watch.seconds>1)setStateAllWords({state:true})
    
  },[watch])

  useEffect(() =>{
      //console.log(wordSelected)
      //console.log(togleButton);
      console.log("words: ",words);
      
      
  },[words])

  useEffect(() => {
  if (!togleButton.stateMessage) return;

  refWatch.current = setInterval(() => {
    setWatch(prev => {
      if (prev.seconds === 1) {
        clearInterval(refWatch.current);
        setStateAllWords({ state: false });
        setTogleButton({ stateDisabled: false, stateMessage: true });
        return { minutes: 0, seconds: 0 };
      }

      return { ...prev, seconds: prev.seconds - 1 };
    });
  }, 1000);

  return () => clearInterval(refWatch.current);
}, [togleButton.stateMessage]);


  return (
    <>
    <div className='header'>
      <h2>Game {name&&name}</h2>
      <h2>Score: {resultScore} </h2>
      <h2>Total Score:{score&&score}</h2>
    </div>
      <h3>{(targetWord&&watch.seconds===0)&&targetWord.word}</h3>
      <Watch
        minutes={watch.minutes}
        seconds={watch.seconds}
      />
      <CardContainer
        stateGame={togleButton.stateMessage}
        words={words}
        checkfunction={checkWordSelected}
      />
      {(togleButton.stateMessage) ? (
        <button disabled={togleButton.stateDisabled} onClick={() =>{resetGame()}}>Reset</button>
      ):
      (
        <button  onClick={()=>startGame()}>Start</button>
      )}
    </>
  )
}

export default App
