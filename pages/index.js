import { client, recommendedProfiles } from '../api'
import Link from 'next/link'
import Image from 'next/image'
import PostCard from '../components/postCard'


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
      <h1 className="flex justify-center">Explore</h1>
      {
        profiles.map(profile => (
        <Link href={'/profile/' + profile.id} key={profile.id}>
          <a>
            <PostCard name={profile.name} handle={profile.handle} post={profile.bio}/>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Home
