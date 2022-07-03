import Image from 'next/link'

const Avatar = ({children}) =>{
  return(
    <div className="rounded-full w-full h-full bg-secondary p-[2px]">
      <div className="rounded-full w-full h-full bg-accent overflow-hidden">
        {children}
      </div>
    </div>
  )
}


export default Avatar
