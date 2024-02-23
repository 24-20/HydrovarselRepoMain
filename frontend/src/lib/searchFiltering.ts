import React from 'react'
import { stationDataRawType } from '@/types/stationDataRawType'
const searchFiltering = async (inp:string, stations:stationDataRawType[] | undefined ) => {
    if (inp.length <1) {
        return []
    }
    const newSearch = inp[0].toUpperCase()+inp.substring(1)
    const oneres: {}[] = []
    const twores: {}[] = []
    if (!stations) return []
    console.log(stations)
    stations.map((element)=>{
        
        let firstLetters = element.stationName.substring(0, newSearch.length)
        if (firstLetters.toLowerCase() === newSearch.toLowerCase())    {
            oneres.push(element)
        }
        else if (element.stationName.toLowerCase().includes(newSearch))    {
            twores.push(element)
        }
        else if (element.kommune.includes(newSearch))    {
            twores.push(element)
        }
        
    })
    let res = [...oneres, ...twores]
    return res
}


export default searchFiltering