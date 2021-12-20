import EventItem from "./EventItem";

const EventList = ({eventData}) => {
    console.log(eventData,'eventData')
  return (
    <div>
      {eventData.map((event) => {
          return (
              <EventItem event={event} />
          )
      })}
    </div>
  );
};

export default EventList;
