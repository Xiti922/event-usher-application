import { checkMembership } from "./checkMembership"

export const queryGuestType = async (client, address) => {
  return checkMembership(
    client,
    "juno1z6rx09269d43x8e6434y4qnd5cuv6dzrmy6pmwtufc4awvgjq9aq72sajc",
    address
  )
}

export const getGuestType = (weight) => {
  switch (weight) {
    case 1:
      return "Mock Trial Judge"
    case 2:
      return "Mock Trial Admin"
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