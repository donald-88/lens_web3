const MyButton = (props) => {
  return(
    <button onClick={props.onClick} className="shadow shadow-accent flex items-center justify-center flex-1 py-[12px] text-[12px] text-primary bg-accent rounded-full">
      {props.title}
    </button>
  )
}

export default MyButton
