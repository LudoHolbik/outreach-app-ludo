import '../css/EventItem.css'

const EventItem = ({event}) => {

    return (
        <div className="itemWrapper">
            <p>{event.user} had a {event.type} with {event.client}</p>
            <p>{event.note}</p>
            <p>{event.type}</p>
        </div>
    )
}

export default EventItem
