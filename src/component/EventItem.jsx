import '../css/EventItem.css'

const EventItem = ({data}) => {
    return (
        <div className="itemWrapper">
            <p>{data.description}</p>
        </div>
    )
}

export default EventItem
