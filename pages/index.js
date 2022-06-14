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
            <div className="m-4 p-8 bg-gray-400">
              {
                profile.picture ? (
                  <Image src={profile.picture.original.url} width="60px" height="60px"/>
                ) : (<div className="w-20 h-20 bg-black"/>)
              }

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
