import type { PropsTimer } from "../types" 

const Watch = ({seconds,minutes}:PropsTimer) => {
  return (
    <div className="watch-timer">
        {seconds}
        :
        {minutes}


    </div>
  )
}

export default Watch