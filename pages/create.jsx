const Create = () => {
  return(
    <div>
      <div className="flex justify-between items-center w-full p-4">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#000000" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <button className="p-[10px] bg-accent rounded-[16px] text-[12px] text-primary font-medium shadow-lg shadow-accent">
          Post
        </button>
      </div>
    </div>
  )
}

export default Create
