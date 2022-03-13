import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: "https://live.staticflickr.com/65535/48146091897_2b9194bf03_b.jpg",
    address: "Some address 5, 12345, Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://www.meetup.com/blog/wp-content/uploads/2020/01/ideas-for-creating-a-meetup-group_creating-a-meetup-group.webp",
    address: "Some address 5, 12345, Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://techcrunch.com/wp-content/uploads/2015/05/mundo2-980x500.jpg?w=1390&crop=1",
    address: "Some address 5, 12345, Some City",
    description: "This is a second meetup!",
  },
  {
    id: "m4",
    title: "A Fourth Meetup",
    image:
      "https://motivatedtomarry.com/wp-content/uploads/2011/04/meetup-dating.jpg",
    address: "Some address 5, 12345, Some City",
    description: "This is a second meetup!",
  },
];

/* https://images.app.goo.gl/oWs1h5zvS8vFwXJA8 */

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
