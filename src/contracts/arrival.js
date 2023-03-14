import { checkMembership } from "./checkMembership"

export const queryDayOneArrival = async (client, address) => {
  return checkMembership(
    client,
    "juno1vcsng5ursj3r7zm8p90xd3xkghsxthj02ypqcuxnpw9zuf90z0ssgckq6w",
    address
  )
}


export const queryDayTwoArrival = async (client, address) => {
  return checkMembership(
    client,
    "juno16h26k92gdyydt4s5nj6yt804x9ax6w7tcky7lsznklf9rzzxj4gsjg7jd4",
    address
  )
}


// Add Member Day two arrival