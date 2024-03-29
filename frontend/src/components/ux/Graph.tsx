import {
    ResponsiveContainer,
    AreaChart,
    XAxis,
    YAxis,
    Area,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  import { format, parseISO, subDays } from "date-fns";
  import { TooltipProps } from "recharts";
  import {
    ValueType,
    NameType,
  } from 'recharts/types/component/DefaultTooltipContent';
import parameterMap from "@/maps/parameterMap";
import { AlertRiverType } from "@/types/AlertRiverType";
import { useEffect, useState } from "react";
import { getMeasurments } from "@/lib/getMesurments";
import { parameterType } from "@/types/parameterType";

  export default function Graph(props:{setRiverParameterDataTrue:Function,parameter:parameterType,DashboardRiver:AlertRiverType | null,setRecentRiverValue:Function}) {
      const [data, setData] = useState<{data:{date:string, value:number}[] | [],highest:number,lowest:number}>({data:[],highest:1,lowest:0})
      const [dataError, setDataError] = useState<boolean>(false)
      const CustomTooltip = ({
        active,
        payload,
        label,
      }: TooltipProps<ValueType, NameType>) => {
        if (active) {
        return (
            <div className=" bg-gradient-to-r from-primary/80 to-secondary bg-blur-xl border border-border shadow-xl p-4 rounded-lg">
              <h2 className=" text-white font-bold m-0 text-xl w-fit">{`${payload?.[0]?.value} ${parameterMap(props.parameter)[0]}`}</h2>
              <h4 className=" text-white text-md">{`${format(label, "MMM, d")}`}</h4>
            </div>
        );
        }
  
        return null;
      };
      
      useEffect(()=>{
        const asyncfunc = async () => {
          if (!props.DashboardRiver) return
          let data = await getMeasurments({'StationId':props.DashboardRiver.stationId, 'parameter':parameterMap(props.parameter)[1], 'resolution_time':'60',reference_time:'P31D/'} )
          if (data?.error) {
            setDataError(true)
            
            return
          } //checing if error
          setDataError(false)
          const observations = data[0].observations
          //updating recentrivervalues
          props.setRecentRiverValue((observations[observations.length-1]?.value)?observations[observations.length-1]?.value:'Utilgjengelig')


          const datacleaned = []
          let lowest = 0
          let highest = 1000
          for (let i = 0; i<observations.length;i++) {
            datacleaned.push({date:observations[i].time, value : observations[i].value})
            if (observations[i].value > highest) {
              highest = observations[i].value;
            }
            if (observations[i].value < lowest) {
                lowest = observations[i].value;
            }
          }
          setData({data:datacleaned,highest,lowest})

        }
        asyncfunc()
      },[props.DashboardRiver, props.parameter])

      useEffect(()=>{
        props.setRiverParameterDataTrue(data.data.length>0)
      },[data])
    
    return (
      <div className=" w-full h-[400px] md:h-[250px]" >
        {
          !dataError && data.data.length>0?
          <ResponsiveContainer >
            
          <AreaChart data={data.data}>
            
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(213.12 93.9% 67.84%)" stopOpacity={1} />
                <stop offset="75%" stopColor="hsl(213.12 93.9% 67.84%)" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
  
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              style={{
                fontSize: '0.8rem'
                }}
              tickFormatter={(str, index) => {
                const date = parseISO(str);
                
                if (index % 31 === 0) {
                  return format(date, "MMM, d");
                }
                return "";
              }}
            />
  
            <YAxis
              dataKey="value"
              axisLine={false}
              tickLine={false}
              tickCount={6}
              interval="preserveEnd"
              tickFormatter={(number) => `${number.toFixed(2)}`}
              domain={[]}
              style={{
                fontSize: '0.8rem',
                }}
            />
  
            <Tooltip content={<CustomTooltip />} />
  
          </AreaChart>
        </ResponsiveContainer>
        :
        <h5 className=" ml-6">{dataError?'Server not responding':'Ingen data for periode'} {dataError&&<span className=" text-destructive">(error)</span>}</h5>
        }
      </div>
    );
  }
  
  