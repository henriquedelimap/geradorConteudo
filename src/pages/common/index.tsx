import { useQuery } from "@apollo/client"
import { GET_FRASES } from '../../API/GET/get.js'
import { IFrase } from "../../Type/index.js"

export const filtraReapetidos = (arr: string[]) => {
    return arr?.filter((este, i) => arr.indexOf(este) === i)
}

