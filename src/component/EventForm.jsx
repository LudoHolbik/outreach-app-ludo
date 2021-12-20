import { useState } from "react"





const EventForm = () => {

    const [ text, setText ] = useState("")
    const [ type, setType ] = useState("")

    console.log(text,"text")
    console.log(type,"type")


    return (
        <form>
            <label>
                Text
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            </label>

            <select value={type} onChange={e => setType(e.target.value)} id="eventType">
                <option value="note">note</option>
                <option value="coffee">coffee</option>
                <option value="meeting">meeting</option>
                <option value="beer">beer</option>
            </select>

            <input type="submit" value="submit" />

            
        </form>
    )
}

export default EventForm
