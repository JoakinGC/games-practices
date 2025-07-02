import {createContext,useState,useCallback} from 'react'
import type { UserData } from '../types';


export const UserContext = createContext<UserData>({name: null,score:0,updateName:null,updateScore:null})

export function UserContextProvider({children}:any){
	const [name,setName] =useState<string|null>(null)
    const [score, setScore] = useState<number>(0);

    const updateName = useCallback(({name}:{name:string|null}) =>{
        setName(name)
    },[name])
    const updateScore = useCallback(({score}:{score:number}) =>{
        setScore(prev => prev+score)
    },[score])

	return (
		<UserContext value={{name,score,updateName,updateScore}}>
			{children}
		</UserContext>
	)
}