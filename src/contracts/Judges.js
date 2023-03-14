import { checkMembership } from "./checkMembership"

export const queryJudge = async (client, address ) => {
    return checkMembership(
            client,
            "juno13cs8u7t78kuyf2g8vzmqtur8q5jqgsn88jmzkzqk7f2cdzd6c6ps8mc4dm",
            address
    )
}


export const getJudge = (weight) => {
    switch (weight) {
        case 1:
          return "1"
        default:
          return "0"
    }
}