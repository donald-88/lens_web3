

const PostCard = (props) => {
  return(
      <div className="flex flex-col items-center p-4 my-2 bg-gray-400 justify-evenly rounded-xl">

        <div className="flex items-center justify-start w-full">
          <div className="w-12 h-12 bg-orange-600 rounded-full"></div>

          <div className="flex flex-col items-start px-2">
            <p className="text-base text-red-700 leading-4">{props.name}</p>
            <p className="text-gray-600">@{props.handle}</p>
          </div>

        </div>

        <div className="flex justify-start w-full py-2">
          <p className="text-base truncate">{props.post}</p>
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
