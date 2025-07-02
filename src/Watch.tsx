import type { PropsTimer } from "./types"

const Watch = ({seconds,minutes}:PropsTimer) => {
  return (
    <div className="watch">
        {seconds}
        :
        {minutes}


    </div>
  )
}

export default Watch