import StoryCard from './StoryCard'

const tales = [
    {username: "Ryan", 
    src:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.modellbahnshop-lippe.com%2FLandscape%2B%2526%2BDecoration%2FFarm%2FModel-Scene-96519%2Fgb%2Fmodell_300493.html&psig=AOvVaw0m3nwevJDtm5cslEAHJ2h0&ust=1645474026683000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIjL48uKj_YCFQAAAAAdAAAAABAD", 
    pfp: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkids.nationalgeographic.com%2Fanimals%2Fmammals%2Ffacts%2Fpig&psig=AOvVaw1fAKnKCc6HNvznxDFOAPz_&ust=1645473865113000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCeoP-Jj_YCFQAAAAAdAAAAABAD"},
    {username: "Pig1", 
    src:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kuow.org%2Fstories%2Fwhy-are-potbellied-pigs-banned-seattle-schools&psig=AOvVaw246pqaMq5yCC8hdRxRVR8e&ust=1645473942033000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjW26GKj_YCFQAAAAAdAAAAABAe", 
    pfp: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FVietnamese_Pot-bellied&psig=AOvVaw246pqaMq5yCC8hdRxRVR8e&ust=1645473942033000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjW26GKj_YCFQAAAAAdAAAAABAD"},
    {username: "Wolf2", 
    src:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fmodernfarmer.com%2F2014%2F03%2Fpigs-eat-las-vegas-buffets%2F&psig=AOvVaw1213s_V9Zin8_6I1av2ft6&ust=1645474004796000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjN7L-Kj_YCFQAAAAAdAAAAABAD", 
    pfp: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fcartoon-pig.html&psig=AOvVaw3OxBPkEG69oBMfQ8NVRvLI&ust=1645473904352000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJiBo5CKj_YCFQAAAAAdAAAAABAD"},
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
                />
            ))
        }
  </div>;
}

export default Stories;
