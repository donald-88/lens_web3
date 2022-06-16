const ProfileCard = (props) => {
  return(
    <div className="w-36 h-48 ml-4 inline-block cursor-pointer bg-gray-400 rounded-3xl">
      <div className="w-full h-full flex items-end">
        <div className="w-full h-16 px-4">
          <p className="text-red-700 leading-4 truncate">{props.name}</p>
          <p className="truncate">{props.handle}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
