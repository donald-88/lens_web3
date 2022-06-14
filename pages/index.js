import { useState, useEffect } from 'react'
import { client, recommendedProfiles } from '../api'


export default function Home() {

  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    try {
      const response = await client.query(recommendedProfiles).toPromise()
      console.log({response})
    } catch (error) {
      console.log({error})
    }
  }
  return (
    <div>
    </div>
  )
}
