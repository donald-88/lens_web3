import { client, getProfiles, recommendedProfiles } from '../../api'
import Image from 'next/image'


export const getStaticPaths = async () => {
  const response = await client.query(recommendedProfiles).toPromise()
  const data = await response.data.recommendedProfiles

  const paths = data.map(profile => {
    return {
      params: { id: profile.id.toString() }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const response = await client.query(getProfiles, { id }).toPromise()
  const data = await response.data.profiles.items[0]

  return {
    props: { profile: data}
  }
}


const Profile = ({profile}) => {
  return (
    <div>
      {
        profile.picture ? (
          <Image src={profile.picture.original.url} width="200px" height="200px"/>
        ) : (<div className="w-40 h-40 bg-black"/>)
      }

      <p className="text-xl text-red-700 p-2">{profile.name}</p>
      <p className="text-sm">{profile.bio}</p>
      <p>Following - {profile.stats.totalFollowing}</p>
      <p>Followers - {profile.stats.totalFollowers}</p>
      <p>Posts - {profile.stats.totalPosts}</p>
    </div>
  )
}

export default Profile
