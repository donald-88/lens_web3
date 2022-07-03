import Avatar from './avatar'
import Image from 'next/image'

const ProfileCard = (props) => {
  return(
    <div className="w-[70px] h-[70px] ml-[16px] -mr-[8px] inline-block cursor-pointer">
      <div className="w-full h-full">
        <Avatar>
          <Image src={props.image} width="68px" height="68px"/>
        </Avatar>
      </div>
      <h4 className="w-full truncate flex justify-center font-medium mt-1">
        {props.name}
      </h4>
    </div>
  )
}

export default ProfileCard
