import { useState } from "react"
import EventList from "./EventList"

const EventForm = () => {

    const [ itemsArray, setItemsArray ] = useState([{
        user: 'You',
        client: 'John Doe',
        note: 'test note',
        type: 'drink',
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
            user: 'You',
            client: 'John Doe',
            note: note,
            type: type

        }])
        console.log(itemsArray,'itemsData2')

    }

    console.log(itemsArray,'itemsData3')
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                note
            <input type="text" value={note} onChange={(e) => setNote(e.target.value)}/>
            </label>
            <div onChange={(e)=>setType(e.target.value)}>
                <input type="radio" name="type" id="coffee" value="coffee" />
                <input type="radio" name="type" id="meeting" value="meeting" />
                <input type="radio" name="type" id="beer" value="beer" />
                <input type="radio" name="type" id="note" value="note" />
            </div>
            <input type="submit" />
        </form>
        <EventList eventData={itemsArray} />
        </>
    )
}

export default EventForm
