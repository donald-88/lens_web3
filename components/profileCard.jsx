const ProfileCard = (props) => {
  return(
    <div className="w-[80px] h-[80px] ml-[16px] -mr-[8px] inline-block cursor-pointer">
      <div className="w-full h-full">
        <div className="w-full h-full flex items-center overflow-hidden justify-center bg-gray-600 rounded-full p-[3px]">
          <div className="w-full h-full flex juistify-center items-center rounded-full bg-accent">
          </div>
        </div>

      </div>
      <h4 className="w-full truncate flex justify-center font-medium mt-1">
        {props.name}
      </h4>
    </div>
  )
}

export default ProfileCard
