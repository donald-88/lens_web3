import SearchBar from '../components/searchBar'
import PostCard from '../components/postCard'
import { recommendedProfiles, searchProfiles } from '../api'
import { useState } from 'react'

const SearchPage = ()=>{
  const [searchString, setSearchString] = useState('')

  return(
    <div>
      <div className="m-4 space-y-4">
        <h1>Search post or profile</h1>
        <SearchBar onChange={e => setSearchString(e.target.value)} value={searchString}/>
      </div>
      <div className="px-4 space-y-4">
        <h2>Popular</h2>
      </div>


    </div>
  )
}

export default SearchPage
