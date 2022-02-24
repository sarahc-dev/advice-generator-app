import { useEffect, useState} from 'react'
import ClipLoader from "react-spinners/ClipLoader";

import Quote from "./Quote"
import Button from "./Button"

export interface Slip {
    id: number,
    advice: string
  }
  
  interface Advice {
    slip: Slip
  }
  
  const getAdvice = async (): Promise<Advice> => {
    const dataResp = await fetch("https://api.adviceslip.com/advice")
    return dataResp.json()
  }

export default function Card() {
    const [advice, setAdvice] = useState<Slip | null>(null)

    async function getData() {
        const data = await getAdvice()
        setAdvice(data.slip)
      } 
  
    useEffect(() => {
      getData()
    }, [])

    return (
        <div className="card">
            {advice ? 
            <>
            <Quote id={advice.id} advice={advice.advice}/> 
            <Button ClickHandler={() => {
                setAdvice(null)
                getData()
            }}/>
            </>
            : 
            <ClipLoader color="hsl(150, 100%, 66%)"/> }
        </div>
    )
}
    
