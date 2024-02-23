import { AlertRiverType } from '@/types/AlertRiverType'
import { faArrowRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState, useEffect} from 'react'
import { DialogClose } from '@/components/ui/dialog'
import searchFiltering from '@/lib/searchFiltering'
import { stationDataRawType } from '@/types/stationDataRawType'
const SearchContent = (props:{DashboardRiver:AlertRiverType | null, setDashboardRiver:Function, stationData:stationDataRawType[] | undefined}) => {
    const [q, setq] = useState<string>('')
    const [showAll, setShowAll] = useState<boolean>(false)
    const [isSearching, setIsSearching] = React.useState(false);
    const [results, setResults] = useState<{}[] >([]);
    useEffect(()=>{
        setIsSearching(true)
        const up = async ()=>{
          let res = await searchFiltering(q, props?.stationData)
          setResults(res)
          setIsSearching(false)
        }
        up()
      },[q, props.stationData])
    let i = 0
    return (
        <div className=' relative '>
            <div className='flex gap-4 border-b border-b-border relative items-center px-4 p-1 text-foreground outline-none'>
            <FontAwesomeIcon icon={faMagnifyingGlass} size='sm' opacity={0.8}/>
            <input onChange={e=>setq(e.target.value)} type="text" placeholder='Søk i over 4000 vassdrag' className=' h-6 text-lg bg-card-foreground w-10/12 outline-none rounded-none'/>
            </div>
            
            <div className='flex h-80 flex-col overflow-y-scroll [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:bg-gray-100
          [&::-webkit-scrollbar-thumb]:bg-gray-300 px-4 py-2 '>
            
                <div className=' h-auto  w-12/12 outline-none flex p-2 items-center bg-background/80 rounded justify-between mb-2'>
                    {props.DashboardRiver?.stationName}
                </div>
                

                {q.length >0 && 
                    <div className='flex justify-between items-center'>
                        <h5 className='mt-0 text-lg'>Resultater <span>{(results?.length>10)?(!showAll)?`(10 av ${results.length})`:`(${results.length} av ${results.length})`: `(${results.length} av ${results.length})`}</span></h5>
                        <button className='bg-primary/80 p-1' onClick={()=>setShowAll(prev=>!prev)}>{!showAll?'Vis alle':'Vis mindre'}</button>
                    </div>
                }
                
                {
                    results.map((res:any)=>{
                        i +=1
                        if (i>(!showAll?10:9999)){
                            return
                        }
                    return (
                        <DialogClose key={res.stationId}>
                        <div className=' h-auto  w-12/12 outline-none flex p-2 items-center hover:bg-background rounded justify-between'
                            onClick={()=>{
                                props.setDashboardRiver(res)
                                
                            }}>
                            <div className='flex gap-1.5'>
                                {res.stationName}
                                
                                <span className='text-sm  m-0'>{`(${res.kommune})`}</span>
                            </div>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        </DialogClose>
                    )
                    })
                }
            </div>
        </div>
            
    )
}

export default SearchContent