import Image from 'next/image'

function StoryCard({username, src, pfp}) {
  return <div className="relative">
      <Image className="absolute opacity-0 lg:opacity-100 rounded-fully z-50 top-10"
      src={pfp}
      width={40}
      height={40}
      layout="fixed"
      objectFit="cover"/>
  </div>;
}

export default StoryCard;
