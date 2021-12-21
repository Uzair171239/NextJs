import MeetupList from "../components/posts/all-posts"

export default function Home() {
  const dummy_meetup = [
    {
      id: 'm1',
      title: "A first Meetup",
      image: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg",
      address: "some address 5, 12345 some city",
      description: " This is a first meetup"
    },
    {
      id: 'm2',
      title: "A Second Meetup",
      image: "https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg",
      address: "some address 6, 54321 some other city",
      description: " This is a Second meetup"
    }
  ]

  return (
    <div>
      <MeetupList meetups={dummy_meetup} />
    </div>
  )
}
