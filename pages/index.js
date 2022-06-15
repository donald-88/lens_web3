import { client, recommendedProfiles } from '../api'
import Link from 'next/link'
import Image from 'next/image'


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
            <div className="my-4 p-4 bg-gray-400">

              <h2 className="text-xl text-red-700">{profile.name}</h2>
              <h2 className="text-sm py-2">{profile.handle}</h2>
              <p className="text-sm">{profile.bio}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Home
