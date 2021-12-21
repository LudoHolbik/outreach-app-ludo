import { useState } from "react"
import EventList from "./EventList"
import "../css/EventForm.css"

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
        <div>
            <form className="formWrapper" onSubmit={handleSubmit}>
                <input className="noteInput" type="text" placeholder="Add a note about Milton Romaguera..." value={note} onChange={(e) => setNote(e.target.value)}/>
                <div className="bottomSection">
                    <div onChange={(e)=>setType(e.target.value)}>
                        <input type="radio" name="type" id="coffee" value="coffee" />
                        <input type="radio" name="type" id="meeting" value="meeting" />
                        <input type="radio" name="type" id="beer" value="beer" />
                        <input type="radio" name="type" id="note" value="note" />
                    </div>
                    <input type="submit" />
                </div>
            </form>
            <EventList eventData={itemsArray} />
        </div>
    )
}

export default EventForm
