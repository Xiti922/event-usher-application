import { checkMembership } from "./checkMembership"

export const queryJudge = async (client, address ) => {
    return checkMembership(
            client,
            "juno1atcxpljfpha3mq6dqx59mv0rpmgfhl8cquyw0rvvq4c6dxgt8ncsmzjjgj",
            address
    )
}


export const getJudge = (weight) => {
    switch (weight) {
        case 1:
          return "Judge"
        default:
          return "non-judge"
    }
}