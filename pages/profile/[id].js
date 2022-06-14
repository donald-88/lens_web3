import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { client, getProfiles } from '../../api'
import Image from 'next/image'

const Profile = () => {

  const [profile, setProfile] = useState([])
  const router = useRouter()
  const { id } = router.query
  useEffect(() => {
    if (id) {
      fetchProfile()
    }
  }, [id])

  async function fetchProfile() {
    try {
      const response = await client.query(getProfiles, { id }).toPromise()
      setProfile(response.data.profiles.items[0])
    } catch (error){
      console.log(error)
    }
  }
  if (!profile) return null

  return (
    <div>
      {
        profile.picture ? (
          <Image src={profile.picture.original.url} width="200px" height="200px"/>
        ) : (<div className="w-40 h-40 bg-black"/>)
      }

      <p className="text-xl text-red-700 p-2">{profile.name}</p>
      <p className="text-sm">{profile.bio}</p>
      {/*<p>Following - {profile.stats.totalFollowing}</p>
    <p>Followers - {profile.stats.totalFollowers}</p>*/}
    </div>
  )
}

export default Profile
