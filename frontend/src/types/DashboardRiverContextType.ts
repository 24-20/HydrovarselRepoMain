
import { AlertRiverType } from '@/types/AlertRiverType'
import { stationDataRawType } from './stationDataRawType'

export type DashboardRiverContextType = {
    DashboardRiver:AlertRiverType | null,
    setDashboardRiver:Function,
    stations:stationDataRawType[] | undefined 
}