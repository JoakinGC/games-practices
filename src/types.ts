
export type PropsCard = {
    id:number,
    word:string,
    state:boolean,
    score:number,
    wasSuccessful:boolean
}

export type PropsTimer = {
    seconds:number,
    minutes:number,
}

export type UserData = {
    name: null|string,
    score:number,
    updateName:any,
    updateScore:any
}