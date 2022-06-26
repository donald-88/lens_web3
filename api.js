import { createClient } from 'urql'

const APIURL = "https://api.lens.dev/"

export const client = new createClient({
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
      coverPicture {
        ... on NftImage {
          contractAddress
          tokenId
          uri
          verified
        }
        ... on MediaSet {
          original {
            url
            mimeType
          }
        }
      }
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

export const getPublications = `
  query Publications($id: ProfileId!) {
  publications(request: {
    profileId: $id,
    publicationTypes: [POST, COMMENT, MIRROR],
    limit: 20
  }) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
  }

  fragment MediaFields on Media {
  url
  mimeType
  }

  fragment ProfileFields on Profile {
  id
  name
  bio
  attributes {
     displayType
     traitType
     key
     value
   }
  metadata
  isDefault
  handle
  picture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
    }
  }
  coverPicture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
    }
  }
  ownedBy
  dispatcher {
    address
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
    totalComments
    totalMirrors
    totalPublications
    totalCollects
  }
  followModule {
    ... on FeeFollowModuleSettings {
      type
      amount {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
      recipient
    }
    ... on ProfileFollowModuleSettings {
     type
    }
    ... on RevertFollowModuleSettings {
     type
    }
  }
  }

  fragment PublicationStatsFields on PublicationStats {
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
  }

  fragment MetadataOutputFields on MetadataOutput {
  name
  description
  content
  media {
    original {
      ...MediaFields
    }
  }
  attributes {
    displayType
    traitType
    value
  }
  }

  fragment Erc20Fields on Erc20 {
  name
  symbol
  decimals
  address
  }

  fragment CollectModuleFields on CollectModule {
  __typename
  ... on FreeCollectModuleSettings {
      type
      followerOnly
      contractAddress
  }
  ... on FeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on RevertCollectModuleSettings {
    type
  }
  ... on TimedFeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  }

  fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
  }

  fragment MirrorBaseFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
  }

  fragment MirrorFields on Mirror {
  ...MirrorBaseFields
  mirrorOf {
   ... on Post {
      ...PostFields
   }
   ... on Comment {
      ...CommentFields
   }
  }
  }

  fragment CommentBaseFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ... on FollowOnlyReferenceModuleSettings {
      type
    }
  }
  appId
  }

  fragment CommentFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
      mirrorOf {
        ... on Post {
           ...PostFields
        }
        ... on Comment {
           ...CommentMirrorOfFields
        }
      }
    }
  }
  }

  fragment CommentMirrorOfFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
       ...MirrorBaseFields
    }
  }
  }

`

export const explorePublications = `

query ExplorePublications {
explorePublications(request: {
  sortCriteria: TOP_COMMENTED,
  publicationTypes: [POST, COMMENT, MIRROR],
  limit: 10
}) {
  items {
    __typename
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      ...CommentFields
    }
    ... on Mirror {
      ...MirrorFields
    }
  }
  pageInfo {
    prev
    next
    totalCount
  }
}
}

fragment MediaFields on Media {
url
width
height
mimeType
}

fragment ProfileFields on Profile {
id
name
bio
attributes {
  displayType
  traitType
  key
  value
}
metadata
isDefault
handle
picture {
  ... on NftImage {
    contractAddress
    tokenId
    uri
    verified
  }
  ... on MediaSet {
    original {
      ...MediaFields
    }
    small {
      ...MediaFields
    }
    medium {
      ...MediaFields
    }
  }
}
coverPicture {
  ... on NftImage {
    contractAddress
    tokenId
    uri
    verified
  }
  ... on MediaSet {
    original {
      ...MediaFields
    }
    small {
     ...MediaFields
    }
    medium {
      ...MediaFields
    }
  }
}
ownedBy
dispatcher {
  address
}
stats {
  totalFollowers
  totalFollowing
  totalPosts
  totalComments
  totalMirrors
  totalPublications
  totalCollects
}
followModule {
  ... on FeeFollowModuleSettings {
    type
    amount {
      asset {
        name
        symbol
        decimals
        address
      }
      value
    }
    recipient
  }
  ... on ProfileFollowModuleSettings {
   type
  }
  ... on RevertFollowModuleSettings {
   type
  }
}
}

fragment PublicationStatsFields on PublicationStats {
totalAmountOfMirrors
totalAmountOfCollects
totalAmountOfComments
}

fragment MetadataOutputFields on MetadataOutput {
name
description
content
media {
  original {
    ...MediaFields
  }
  small {
    ...MediaFields
  }
  medium {
    ...MediaFields
  }
}
attributes {
  displayType
  traitType
  value
}
}

fragment Erc20Fields on Erc20 {
name
symbol
decimals
address
}

fragment CollectModuleFields on CollectModule {
__typename
... on FreeCollectModuleSettings {
  type
}
... on FeeCollectModuleSettings {
  type
  amount {
    asset {
      ...Erc20Fields
    }
    value
  }
  recipient
  referralFee
}
... on LimitedFeeCollectModuleSettings {
  type
  collectLimit
  amount {
    asset {
      ...Erc20Fields
    }
    value
  }
  recipient
  referralFee
}
... on LimitedTimedFeeCollectModuleSettings {
  type
  collectLimit
  amount {
    asset {
      ...Erc20Fields
    }
    value
  }
  recipient
  referralFee
  endTimestamp
}
... on RevertCollectModuleSettings {
  type
}
... on TimedFeeCollectModuleSettings {
  type
  amount {
    asset {
      ...Erc20Fields
    }
    value
  }
  recipient
  referralFee
  endTimestamp
}
}

fragment PostFields on Post {
id
profile {
  ...ProfileFields
}
stats {
  ...PublicationStatsFields
}
metadata {
  ...MetadataOutputFields
}
createdAt
collectModule {
  ...CollectModuleFields
}
referenceModule {
  ... on FollowOnlyReferenceModuleSettings {
    type
  }
}
appId
}

fragment MirrorBaseFields on Mirror {
id
profile {
  ...ProfileFields
}
stats {
  ...PublicationStatsFields
}
metadata {
  ...MetadataOutputFields
}
createdAt
collectModule {
  ...CollectModuleFields
}
referenceModule {
  ... on FollowOnlyReferenceModuleSettings {
    type
  }
}
appId
}

fragment MirrorFields on Mirror {
...MirrorBaseFields
mirrorOf {
 ... on Post {
    ...PostFields
 }
 ... on Comment {
    ...CommentFields
 }
}
}

fragment CommentBaseFields on Comment {
id
profile {
  ...ProfileFields
}
stats {
  ...PublicationStatsFields
}
metadata {
  ...MetadataOutputFields
}
createdAt
collectModule {
  ...CollectModuleFields
}
referenceModule {
  ... on FollowOnlyReferenceModuleSettings {
    type
  }
}
appId
}

fragment CommentFields on Comment {
...CommentBaseFields
mainPost {
  ... on Post {
    ...PostFields
  }
  ... on Mirror {
    ...MirrorBaseFields
    mirrorOf {
      ... on Post {
         ...PostFields
      }
      ... on Comment {
         ...CommentMirrorOfFields
      }
    }
  }
}
}

fragment CommentMirrorOfFields on Comment {
...CommentBaseFields
mainPost {
  ... on Post {
    ...PostFields
  }
  ... on Mirror {
     ...MirrorBaseFields
  }
}
}

`
