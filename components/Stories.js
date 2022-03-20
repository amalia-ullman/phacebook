import StoryCard from './StoryCard'

const tales = [
    {username: "Ryan", 
    src:"/housepig.jpg", 
    pfp: "/pig44.jpg",
    caption:"pretty gnarly"},
    {username: "Pig1", 
    src:"/pig.jpeg", 
    pfp: "/pig2.jpg",
    caption:"i am a pig with a sweet new dig"},
    {username: "Wolf2", 
    src:"/house.jpg", 
    pfp: "/nicewolf.jpg",
    caption: "i bought this extremely realistic pig house construction plan to infiltrate my victims' houses"},
]

function Stories() {
  return <div className="flex justify-center space-x-3 mx-auto">
        {
            tales.map(story => (
                <StoryCard 
                key = {story.src}
                username = {story.username}
                src = {story.src}
                pfp = {story.pfp}
                caption = {story.caption}
                />
            ))
        }
  </div>;
}

export default Stories;
