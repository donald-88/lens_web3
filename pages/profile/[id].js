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
        <div className="flex flex-col items-center w-full h-[239px]">
          <div className="w-full h-[204px] bg-black"></div>
          <div className="flex justify-center w-[70px] h-[70px] overflow-hidden bg-orange-600 rounded-full -mt-[35px]">
            {
              profile.picture ? (
                <Image src={profile.picture.original.url} width="70px" height="70px"/>
              ) : (<div className="w-40 h-40 bg-black"/>)
            }
          </div>
        </div>

        <div className="flex flex-col items-center w-full text-center px-[16px] py-[8px]">
          <h2 className="font-bold">{profile.name}</h2>
          <p>@{profile.handle}</p>
          <p className="pt-[4px]">{profile.bio}</p>
        </div>


        <div className="flex text-center justify-evenly">
          <div>
            <p>Posts</p>
            <p>10</p>
          </div>
        
          <div>
            <p>Followers</p>
            <p>{profile.stats.totalFollowers}</p>
          </div>


          <div>
            <p>Following</p>
            <p>{profile.stats.totalFollowing}</p>
          </div>

        </div>





        <div className="flex justify-center my-[8px] mx-[16px]">
          <MyButton onClick={followAcc} title={"Follow"}/>
          <span className="w-[4px]"/>
          <div className="w-[46px] flex">
            <MyButton onClick={connect} title={"C"}/>
          </div>
          <span className="w-[4px]"/>
          <div className="w-[46px] flex">
            <MyButton title={"P"}/>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="flex w-full justify-evenly">
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
