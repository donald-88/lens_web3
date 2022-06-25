const MyButton = (props) => {
  return(
    <button onClick={props.onClick} className="flex items-center justify-center flex-1 py-[12px] text-[12px] bg-gray-400 rounded-full">
      {props.title}
    </button>
  )
}

export default MyButton
