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
  const data = [] as {}[]
  for (let num = 30; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 1 + Math.random(),
    });
  }
  
  export default function Graph(props:{parameter:'Vannføring'|'Vannstand'| 'Vanntemperatur'| 'Lufttemperatur' | 'Magasinvolum' | 'Nedbør'}) {
    
      const CustomTooltip = ({
        active,
        payload,
        label,
      }: TooltipProps<ValueType, NameType>) => {
        if (active) {
        return (
            <div className=" bg-card-foreground border border-border shadow-xl p-4 rounded-lg">
            <h4 className=" text-lg">{`${label}`}</h4>
            <h2 className="m-0 text-[28px] md:text-[34px] w-fit">{`${payload?.[0].value?.toString().substring(0,5)} ${parameterMap(props.parameter)[0]}`}</h2>
            </div>
        );
        }
  
        return null;
      };
    
    return (
      <div className=" w-full h-[250px]" >
        <ResponsiveContainer >
          <AreaChart data={data}>
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(213.12 93.9% 67.84%)" stopOpacity={0.8} />
                <stop offset="75%" stopColor="hsl(213.12 93.9% 67.84%)" stopOpacity={0.05} />
              </linearGradient>
            </defs>
  
            <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />
  
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str);
                if (date.getDate() % 7 === 0) {
                  return format(date, "MMM, d");
                }
                return "";
              }}
            />
  
            <YAxis
              dataKey="value"
              axisLine={false}
              tickLine={false}
              tickCount={8}
              tickFormatter={(number) => `${number.toFixed(2)}`}
            />
  
            <Tooltip content={<CustomTooltip />} />
  
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  