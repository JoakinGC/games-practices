import {createContext,useState,useCallback, useEffect} from 'react'
import type { UserData } from '../types';
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

export const UserContext = createContext<UserData>({name: null,score:0,updateName:null,updateScore:null})

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}


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
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
		    <UserContext value={{name,score,updateName,updateScore}}>
			    {children}
		    </UserContext>
        </ClerkProvider>
	)
}