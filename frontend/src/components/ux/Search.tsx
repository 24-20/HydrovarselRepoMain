import React, { useEffect, useState } from 'react'
import AlertButton from '../ui/AlertButton'
import { DashboardRiverContext } from '@/pages/Dashboard'
import { DashboardRiverContextType } from '@/types/DashboardRiverContextType'
const Search = () => {
  const {stations} = React.useContext(DashboardRiverContext) as DashboardRiverContextType
  useEffect(()=>{console.log(stations)},[stations])
  return (
    <AlertButton>Eibyelva...</AlertButton>
  )
}

export default Search