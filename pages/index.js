import { useState, useEffect } from 'react'
import { client, recommendedProfiles } from '../api'
import Link from 'next/link'
import Image from 'next/image'


export default function Home() {

  const [profiles, setProfiles] = useState([])
  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    try {
      const response = await client.query(recommendedProfiles).toPromise()
      console.log({response})
      setProfiles(response.data.recommendedProfiles)

    } catch (error) {
      console.log({error})
    }
  }
  return (
    <div>
      {
        profiles.map((profile, index) => (
        <Link href={`/profile/${profile.id}`} key={index}>
          <a>
            <div>
              {
                profile.picture ? (<Image src={profile.picture.original.url} width="60px" height="60px"/>) : (<p>no pic</p>)
              }
              <h2>{profile.handle}</h2>
              <p>{profile.bio}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
