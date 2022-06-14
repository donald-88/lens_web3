import { createClient } from 'urql'

const APIURL = "https://api.lens.dev/"

export const client = createClient({
  url: APIURL
})

export const getProfiles = `
  query Profiles(
    $id: ProfileId!
  ) {
  profiles(request: { profileIds: [$id], limit: 1 }) {
    items {
      id
      name
      bio
      picture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
          }
        }
      }
      handle
      stats {
        totalFollowers
        totalFollowing
        totalPosts
        totalComments
        totalMirrors
        totalPublications
        totalCollects
      }
    }
  }
  }
`


export const recommendedProfiles = `
query RecommendedProfiles {
recommendedProfiles {
      id
    name
    bio
    picture {
      ... on MediaSet {
        original {
          url
        }
      }
    }
    handle
      }
    }
`
