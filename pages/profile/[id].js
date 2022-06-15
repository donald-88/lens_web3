import { client, getProfiles, getPublications, recommendedProfiles } from '../../api'
import Image from 'next/image'
import { ethers } from 'ethers'

import ABI from '../../abi.json'
const address = "0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d"


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
  const publicationsRes = await client.query(getPublications, {id}).toPromise()
  const publicationsData = await publicationsRes.data.publications.items
  return {
    props: {
      profile: data,
      pubs: publicationsData}
  }
}


async function connect() {
  const account = await window.ethereum.request({
    method: "eth_requestAccounts"
  })
}



const Profile = ({profile, pubs}) => {

  async function followAcc() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const sign = provider.getSigner()
    const contract = new ethers.Contract( address, ABI, sign)
    try {
      const transaction = contract.follow([profile.id.toString()], [0x0]).toPromise()
      await transaction.wait()
      console.log("Account followed")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>

      <div className="flex justify-center">
        {
          profile.picture ? (
            <Image src={profile.picture.original.url} width="200px" height="200px"/>
          ) : (<div className="w-40 h-40 bg-black"/>)
        }
      </div>

      <p className="flex justify-center text-xl text-red-700 my-2">{profile.name}</p>

      <div className="flex justify-evenly m-4">
        <button onClick={connect} className="flex justify-center items-center w-20 p-1 mb-2 bg-gray-400 text-sm">
          Connect
        </button>
        <button onClick={followAcc} className="flex justify-center items-center w-20 p-1 mb-2 bg-gray-400 text-sm">
          Follow
        </button>
      </div>

      <p className="text-sm">{profile.bio}</p>

      <div className="flex justify-evenly mx-6 my-2">
        <p>Following - {profile.stats.totalFollowing}</p>
        <p>Followers - {profile.stats.totalFollowers}</p>
      </div>


      <div className="flex flex-col items-center">
        <div className="flex justify-evenly w-full">
          <h2>Posts</h2>
          <h2>Media</h2>
          <h2>Collections</h2>
        </div>
        {
          pubs.map(pub => (
            <div className="flex flex-col bg-gray-400 p-4 my-4 w-full"key={pub.id}>
              {pub.metadata.content}
              <div className="flex justify-evenly items-center pt-4">

                <div className="flex items-center">
                  <p>Mirrors-{pub.stats.totalAmountOfMirrors}</p>
                  <button className="w-3 h-3 mx-1 bg-black"></button>
                </div>

                <div className="flex items-center">
                  <p>Collects-{pub.stats.totalAmountOfCollects}</p>
                  <button className="w-3 h-3 mx-1 bg-black"></button>
                </div>

                <div className="flex items-center">
                  <p>Comments-{pub.stats.totalAmountOfComments}</p>
                  <button className="w-3 h-3 mx-1 bg-black"></button>
                </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Profile
