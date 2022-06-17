import { client, getProfiles, getPublications, recommendedProfiles } from '../../api'
import Image from 'next/image'
import { ethers } from 'ethers'
import PostCard from '../../components/postCard'
import MyButton from '../../components/myButton'
import BottomNav from '../../components/bottomNav'

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
      <div className="">
        <div className="flex justify-center items-end h-64 w-full">
          <div className="flex justify-center w-24 h-24 overflow-hidden bg-orange-600 rounded-full">
            {
              profile.picture ? (
                <Image src={profile.picture.original.url} width="200px" height="200px"/>
              ) : (<div className="w-40 h-40 bg-black"/>)
            }
          </div>
        </div>

        <p className="flex justify-center text-xl text-red-700 pt-3">{profile.name}</p>

        <div className="flex justify-center p-4">
          <MyButton onClick={connect} title={"Connect"}/>
          <span className="w-4"/>
          <MyButton onClick={followAcc} title={"Follow"}/>
        </div>

        <p className="flex justify-center text-sm">{profile.bio}</p>

        <div className="flex justify-evenly px-6 py-2">
          <p>Following - {profile.stats.totalFollowing}</p>
          <p>Followers - {profile.stats.totalFollowers}</p>
        </div>


        <div className="flex flex-col items-center">
          <div className="flex justify-evenly w-full py-4">
            <h2>Posts</h2>
            <h2>Media</h2>
            <h2>Collections</h2>
          </div>

          <div className="flex flex-col mx-4">
            {
              pubs.map(pub => (
                <PostCard post={pub.metadata.content} name={profile.name} handle={profile.handle} mirrors={pub.stats.totalAmountOfMirrors} collects={pub.stats.totalAmountOfCollects} comments={pub.stats.totalAmountOfComments}/>))
            }
          </div>

        </div>
      </div>
      <BottomNav/>
    </div>
  )
}

export default Profile
