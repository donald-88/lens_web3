const ProfileCard = (props) => {
  return(
    <div className="w-[135px] h-[192px] ml-4 inline-block cursor-pointer bg-gray-400 rounded-[22px] px-[5px]">
      <div className="flex flex-col items-center">
        <div className="w-[125px] h-[144px] rounded-[22px] mt-[5px] bg-orange-600"></div>
        <div className="w-full h-[39px] flex items-center justify-between px-[5px]">
            <p className="truncate leading-4">{props.name}</p>
            <span className="w-[10px] h-[10px] rounded-full bg-green-700"/>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
