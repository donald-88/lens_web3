const MyButton = (props) => {
  return(
    <button onClick={props.onClick} className="flex justify-center items-center w-20 rounded-lg p-2 mb-2 bg-gray-400 text-sm">
      {props.title}
    </button>
  )
}

export default MyButton
