import Image from 'next/image'

function StoryCard({username, src, pfp, caption}) {
  return <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
      <Image className="absolute opacity-0 lg:opacity-100 rounded-full z-40 top-10"
      src={pfp}
      width={40}
      height={40}
      layout="fixed"
      objectFit="cover"/>
      <Image className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
      src={src}
      layout="fill" />
      <p className="pt-[11rem] z-50 opacity-0 hover:opacity-100 transition duration-1000">{caption}</p>
  </div>;
}

export default StoryCard;
