const SearchBar = () => {
  return(
    <div className="flex">
      <div className="relative flex justify-between w-full mx-4">
        <input
          className="w-full h-16 pl-8 text-lg placeholder-black bg-gray-300 border rounded-full border-custom-white xt-lg" placeholder="Search">
        </input>
        <span className="w-4"/>
        <div className="w-16 h-16 bg-black rounded-full"/>
      </div>
    </div>
  )
}


export default SearchBar
