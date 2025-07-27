
import type {PropsCard} from '../types';

const Card = ({cardData:{id,word,state}}:{cardData:PropsCard}) => {
  return (
    <div key={id} className={`${state ? (""): ("hidden")} card`}
    >
        {word}
    </div>
  )
}

export default Card