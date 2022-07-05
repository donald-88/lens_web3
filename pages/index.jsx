import { client, explorePublications, recommendedProfiles } from './api/api'
import Link from 'next/link'
import Image from 'next/image'
import PostCard from '../components/postCard'
import Header from '../components/header'
import ProfileCard from '../components/profileCard'
import Avatar from '../components/avatar'
import { useEffect, useState } from 'react'


//export const getServerSideProps = async () => {
  //responses//
//  const profileRes = await client.query(recommendedProfiles).toPromise()
//  const exPubRes = await client.query(explorePublications).toPromise()

  //data//
//  const data = await profileRes.data.recommendedProfiles
//  const pubData = await exPubRes.data.explorePublications

//  return {
//    props: { profiles: data,
//      exPubs: pubData}
//  }
//}


const Home = () => {

  const [profiles, setProfiles] = useState([])
  const [searchString, setSearchString] = useState('')

  useEffect(() => {
    fetchProfiles()
  }, [])

  async function fetchProfiles() {
    try {
      const response = await client.query(recommendedProfiles).toPromise()
      setProfiles(response.data.recommendedProfiles)
    } catch (err) {
      console.log('error fetching recommended profiles: ', err)
    }
  }


  return (
    <div>
        <Header/>
        <h2 className="px-4 pb-4">Recommended</h2>
        <div className="relative flex items-center">
          <div id="slider" className="w-full h-full overflow-x-scroll no-scrollbar scroll whitespace-nowrap scroll-smooth">
            {
              profiles.map((profile, index) => (
              <Link href={'/profile/' + profile.id} key={index}>
                <a>
                  <ProfileCard name={profile.name} handle={profile.handle} image={profile.picture.original.url}/>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <h2 className="px-4 py-4">Explore</h2>
        <div className="px-[16px]">
          <PostCard image="/public/add-square.svg" post="Stop comparing me to people, no Iam not them" name="Saba" handle="sabalife"/>
          <PostCard image="/public/add-square.svg" post="Stop comparing me to people, no Iam not them" name="Saba" handle="sabalife"/>
        </div>
    </div>
  )
}

export default Home
