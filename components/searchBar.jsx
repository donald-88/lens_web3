const SearchBar = (props) => {
  return(
      <div className="relative flex justify-between h-[40px]">
        <div className="absolute top-2.5 left-5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 22L20 20" stroke="#A5A5A5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <input
          onChange={props.onChange}
          value={props.value}
          className="w-full pl-12 bg-transparent border-2 border-secondary rounded-[16px]" placeholder="Search">
        </input>
      </div>
)
}

export default SearchBar
