import { useState } from "react"
export default function Player({name, symbol}){
    const [input, setInput]=useState(false)
    const [playerName, setPlayerName]=useState(name)

   function handleClick(){
        setInput((edit)=> !edit)
    }

   function handleChange(event){
    setPlayerName(event.target.value)
}
    return (
        <li>
            <span className="player">
                {!(input) && <span className="player-name">{playerName}</span>}
                {(input) && <input value={playerName} onChange={handleChange}/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{!(input) ? 'Edit' : 'Save'}</button>

        </li>
    )
}