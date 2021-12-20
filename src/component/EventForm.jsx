import { useState } from "react"

const EventForm = () => {

    const [ itemsArray, setItemsArray ] = useState([{
        note: 'test note',
        type: 'drink',
        user: 'John Doe',
        timestamp: '',
    }])


    const [ note, setNote ] = useState("")
    const [ type, setType ] = useState("")

    console.log(note,"note")
    console.log(type,"type")


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(note,'note')
        console.log(type,'type')
        console.log(itemsArray,'itemsData1')
        // setItemsData({...itemsData}, note)
        setItemsArray([...itemsArray, {
            note: note,
            type: type

        }])
        console.log(itemsArray,'itemsData2')

    }

    console.log(itemsArray,'itemsData3')
    return (
        <form onSubmit={handleSubmit}>
            <label>
                note
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
            </label>

            <select value={type} onChange={(e)=>setType(e.target.value)} id="eventType">
                <option value="note">note</option>
                <option value="coffee">coffee</option>
                <option value="meeting">meeting</option>
                <option value="beer">beer</option>
            </select>



            <input type="submit" />

            
        </form>
    )
}

export default EventForm
