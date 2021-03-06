
import Image from 'next/image'
import { ethers } from 'ethers'
import PostCard from '../../components/postCard'
import MyButton from '../../components/myButton'
import Avatar from '../../components/avatar'
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






const Profile = ({profile, pubs}) => {

//connect to metamask wallet
  async function connect() {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts"
    })
  }

//follow user and sign transaction
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
        <div className="flex flex-col items-center w-full h-[189px]">
          <div className="w-full h-[154px] bg-accent overflow-hidden relative">
            {
              profile.coverPicture ? (
                <Image
                  src={profile.coverPicture.original.url}
                  layout="fill"
                  objectFit="cover"/>
              ) : (
                <div className="bg-black h-full w-full"/>
              )
            }
          </div>
          <div className="w-[70px] h-[70px] -mt-[35px]">
            <Avatar>
              {
                profile.picture ? (
                  <Image
                    alt="profile picture"
                    src={profile.picture.original.url}
                    width="70px"
                    height="70px"/>
                ) : (
                  <div className="w-40 h-40 bg-black"/>
                )
              }
            </Avatar>
          </div>

        </div>

        <div className="flex flex-col items-center w-full text-center px-4 pt-4 pb-2">
          <h2 className="font-bold leading-4">{profile.name}</h2>
          <p className="text-secondary">@{profile.handle}</p>
        </div>


        <div className="flex text-center justify-center space-x-8 pb-2">
          <div className="flex flex-col justify-center">
            <p className="text-[14px] font-bold">{profile.stats.totalFollowers}</p>
            <p className="text-[10px] font-light text-secondary">Followers</p>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[14px] font-bold">{profile.stats.totalFollowing}</p>
            <p className="text-[10px] font-light text-secondary">Following</p>
          </div>
        </div>

        <div className="flex justify-center w-full pb-2 px-4 break-all text-center">
          <p>{profile.bio}</p>
        </div>


        <div className="flex justify-center mt-2 mx-4">
          <MyButton onClick={followAcc} title={"Follow"}/>
          <span className="w-2"/>
          <MyButton onClick={connect} title={"Connect"}/>
          <span className="w-2"/>
          <div className="w-[46px] flex">
            <button
              className="py-[12px] flex justify-center items-center w-[46px] rounded-full bg-secondary"
              onClick={connect}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.72997C3.08997 5.90997 3.70998 4.97998 4.47998 4.66998L10.05 2.39001C11.3 1.88001 12.71 1.88001 13.96 2.39001L19.53 4.66998C20.29 4.97998 20.92 5.90997 20.92 6.72997L20.91 11.12Z"
                  stroke="#E0F0F3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
                <path
                  d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"
                  stroke="#E0F0F3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
                <path
                  d="M12 12.5V15.5"
                  stroke="#E0F0F3"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="flex w-full justify-evenly py-4">
            <h4>Posts</h4>
            <h4>Mirrors</h4>
            <h4>Collections</h4>
            <h4>Media</h4>
          </div>

          <div className="flex flex-col w-full px-[16px]">
            {
              pubs.map(pub => (
                <PostCard
                  key={profile.id}
                  image={profile.picture.original.url}
                  post={pub.metadata.content}
                  name={profile.name}
                  handle={profile.handle}
                  mirrors={pub.stats.totalAmountOfMirrors}
                  collects={pub.stats.totalAmountOfCollects}
                  comments={pub.stats.totalAmountOfComments}/>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Profile
