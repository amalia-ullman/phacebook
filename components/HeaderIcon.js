function HeaderIcon({Icon, active}) {
  return (
  <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-green-200 rounded-xl active:border-b-2 active:border-red-500 group transition-all">
      <Icon className={`h-5 text-center text-gray-200 sm:h-7 mx-auto group-hover:text-red-500 ${active && 'text-red-500'}`} />
  </div>
  );
}

export default HeaderIcon;
