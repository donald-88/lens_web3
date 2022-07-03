import SearchBar from '../components/searchBar'
import PostCard from '../components/postCard'
import { recommendedProfiles, searchProfiles } from '../api'
import { useState } from 'react'

const SearchPage = ()=>{
  const [searchString, setSearchString] = useState('')

  return(
    <div>
      <div className="h-4"/>
      <div className="m-4">
        <SearchBar onChange={e => setSearchString(e.target.value)} value={searchString}/>
      </div>
      <div className="px-4">
      </div>


    </div>
  )
}

export default SearchPage
