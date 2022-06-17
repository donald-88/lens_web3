import { client, recommendedProfiles } from '../api'
import Link from 'next/link'
import Image from 'next/image'
import PostCard from '../components/postCard'
import BottomNav from '../components/bottomNav'
import Header from '../components/header'
import ProfileCard from '../components/profileCard'


export const getStaticProps = async () => {
  const response = await client.query(recommendedProfiles).toPromise()
  const data = await response.data.recommendedProfiles

  return {
    props: { profiles: data}
  }
}


const Home = ({profiles}) => {
  return (
    <div>
        <Header/>
        <h2 className="text-lg py-4 px-4">Recommended</h2>
        <div className="relative flex items-center">
          <div id="slider" className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth">
            {
              profiles.map(profile => (
              <Link href={'/profile/' + profile.id} key={profile.id}>
                <a>
                  <ProfileCard name={profile.name} handle={profile.handle}/>
                </a>
              </Link>
            ))}
          </div>
        </div>
        <h2 className="text-lg py-4 px-4">Explore</h2>
        <div className="px-4">
          <PostCard/>
        </div>

      <BottomNav/>
    </div>
  )
}

export default Home
