import { checkMembership } from "./checkMembership"

export const queryAdmin = async (client, address) => {
  return checkMembership(
    client,
    "juno1fp5w4kwfk24wplmy7hfmymp85rvtvenp370wra526g5wyert46fq5d9gjc",
    address
  )
}

export const getAdmin = (weight) => {
  switch (weight) {
    case 1:
      return "Admin"
    default:
      return "non-admin"
  }
}