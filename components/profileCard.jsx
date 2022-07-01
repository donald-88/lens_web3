const ProfileCard = (props) => {
  return(
    <div className="w-[135px] h-[192px] ml-[16px] -mr-[8px] inline-block cursor-pointer bg-gray-400 rounded-[22px] px-[5px]">
      <div className="w-full h-[39px] flex items-center justify-between px-[5px]">
        <p className="truncate">
          {props.name}
        </p>
      </div>
    </div>
  )
}

export default ProfileCard
