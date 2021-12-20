import EventItem from "./EventItem";
import EventForm from "./EventForm";

const eventItems = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima officia necessitatibus optio.",
    
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima officia necessitatibus optio.",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima officia necessitatibus optio.",
  },
];

const data = {
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima officia necessitatibus optio.",
};

const EventList = () => {
  return (
    <div>
    <EventForm />
    

      {eventItems.map((event) => {
          return (
              <EventItem data={event} />
          )
      })}
    </div>
  );
};

export default EventList;
