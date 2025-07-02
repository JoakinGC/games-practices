
import type {PropsCard} from './types';

const Card = ({cardData:{id,word,state},checkWord}:{cardData:PropsCard,checkWord:any}) => {
  return (
    <span key={id} className={` ${state ? (""): ("hidden")} card`}
    >
        {word}
    </span>
  )
}

export default Card