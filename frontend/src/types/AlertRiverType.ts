export type AlertRiverType = {
    fylke:string,
    kommune:string,
    kommuneNumber:string,

    river:string,
    seriesList: {
                parameter:number,
                parameterName:string,
                resolutionList:{}[],
                unit:string
            }[]
    stationId:string
    stationName:string
}