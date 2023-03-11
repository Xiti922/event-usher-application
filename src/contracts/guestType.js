import { checkMembership } from "./checkMembership"

export const queryGuestType = async (client, address) => {
  return checkMembership(
    client,
    "juno1atcxpljfpha3mq6dqx59mv0rpmgfhl8cquyw0rvvq4c6dxgt8ncsmzjjgj",
    address
  )
}

export const getGuestType = (weight) => {
  switch (weight) {
    case 1:
      return "Mock Trial Judge"
    case 2:
      return "Dinner Guest"
    case 3:
      return "Maker Guest"
    case 4:
      return "Maker"
    case 5:
      return "Special Guest"
    default:
      return "Unknown Guest"
  }
}