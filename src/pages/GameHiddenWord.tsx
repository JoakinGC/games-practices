import { useEffect, useState,useCallback, useRef,use } from 'react'
import '../styles/GameHideWords.css'
import CardContainer from '../componets/CardContainer'
import Watch from '../componets/Watch'
import { ramdomWords } from '../constants'
import type { PropsCard } from '../types'
import { UserContext } from '../context/userContex'

function GameHiddenWord() {
  const [togleButton, setTogleButton] = useState({stateDisabled:false, stateMessage:false})
  const [watch, setWatch] = useState({seconds:0,minutes:0})
  const [words, setWords] = useState(ramdomWords)
  const [wordSelected, setWordSelected] = useState<Array<PropsCard>|null>(null)
  const refWatch = useRef<any>(null);
  const {name,score,updateScore} = use(UserContext);
  const [resultScore, setResultScore] = useState(0)
  const [targetWord, setTargetWord] = useState<null|PropsCard>(null)
  


  const setStateWord = useCallback(({stateViewWord,word,stateAnimationWord}:{stateViewWord:boolean,word:PropsCard,stateAnimationWord:boolean}) =>{
    setWords((prev) => prev.map((e) =>{
      const updateWord:PropsCard = (word&&e.id===word.id)
       ? {...e,state:stateViewWord,wasSuccessful:stateAnimationWord}
       : {...e} 

        console.log(word.id);
        
        console.log(updateWord)
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
    setStateWord({ stateViewWord: true, word,stateAnimationWord:false});
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
    
    setStateWord({ stateViewWord: true, word,stateAnimationWord:true });
    setTimeout(() => {
        alert("¡Palabra incorrecta!");
        resetGame();
      }, 1000);
  }
}, [targetWord, words, resetGame, setStateWord]);



  const setStateAllWords = useCallback(({state}:{state:boolean}) =>{
    setWords(ramdomWords.map((e) =>{
      return {
        ...e,
        state,
      }
    }))
  },[])

  const startGame = useCallback(() =>{
    setTimeout(() => {
      setTargetWord(() =>{return words[Math.floor(Math.random() * words.length)]})
    },3000)
    setWatch({minutes:0,seconds:3})
    setTogleButton({stateDisabled:!togleButton.stateDisabled,stateMessage:!togleButton.stateMessage})
  },[])


  useEffect(() =>{
    if(watch.seconds>1)setStateAllWords({state:true})
    
  },[watch])

  useEffect(() =>{
      console.log(wordSelected)
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
    <section className="container-gamer">
      <h1>Hidden Words</h1>
      <h2>{name&&name}</h2>
    <div className='header-game'>
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
        <button className="btn" disabled={togleButton.stateDisabled} onClick={() =>{resetGame()}}>Reset</button>
      ):
      (
        <button className="btn" onClick={()=>startGame()}>Start</button>
      )}
    </section>
  )
}

export default GameHiddenWord
