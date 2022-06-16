

const PostCard = (props) => {
  return(
      <div className="flex flex-col justify-evenly items-center rounded-xl p-4 my-3 bg-gray-400">

        <div className="flex flex-col items-start pt-3 w-full">
          <p className="text-red-700 leading-3">{props.name}</p>
          <p className="text-gray-600">{props.handle}</p>
        </div>

        <div className="flex justify-start w-full py-2">
          <p className="text-base">{props.post}</p>
        </div>

        <div className="flex w-full justify-evenly">
          <div className="flex items-center">
            <p>Mirrors - {props.mirrors}</p>
            <button className="w-3 h-3 mx-1 bg-black"></button>
          </div>

          <div className="flex items-center">
            <p>Collects - {props.collects}</p>
            <button className="w-3 h-3 mx-1 bg-red-700"></button>
          </div>

          <div className="flex items-center">
            <p>Comments - {props.comments}</p>
            <button className="w-3 h-3 mx-1 bg-black"></button>
          </div>
        </div>


      </div>
  )
}

export default PostCard
