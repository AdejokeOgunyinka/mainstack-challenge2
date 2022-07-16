import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { FiAlertCircle } from "react-icons/fi";
import { Area, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, AreaChart } from "recharts"
import TimeBadge from "../../compositions/TimeBadge";
import {useMediaQuery} from '@chakra-ui/react'

interface LineChartInterface{
    id?: string | number;
    title: string;
    timeGap?: string;
    hasTime?: boolean;
    hasInnerBadge?: boolean;
    numbers: number | string;
    data: any[]
}

export const LineChart: React.FC<LineChartInterface> = ({id, timeGap, title, numbers, hasTime, data, hasInnerBadge}) => {
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)')
  const [isLargerThan994] = useMediaQuery('(min-width: 994px)')

  return (
      <Box p={6} borderRadius="12px" border="1px solid #E5E8F0">
        <Box
        w="100%"
        >
          <Box>
					<Flex w="100%" justifyContent="space-between" alignItems="center">
						<Heading as="h2" fontSize={{base: "lg", sm: "2xl"}} color="primaryBlack">
							{title}
						</Heading>
            {hasInnerBadge && isLargerThan994 ? (
            <Flex overflowX="hidden" alignSelf="end">
			        <TimeBadge />
		        </Flex> ) :
						<FiAlertCircle style={{color: "#C4C4C4"}} />}
					</Flex>
          {hasTime && (
              <Text fontSize="14px" mt={2} color="gray400">
                {timeGap}
              </Text>)}
              <Heading as="h4" fontSize="48px" my={6} color="primaryBlack">
							{numbers}
						</Heading>

				</Box>
        {isLargerThan500 ?
          (<Box>
          <ResponsiveContainer width="100%" height={550} minWidth={350} minHeight={350}  >
          <AreaChart data={data} 
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF5403" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FF5403" stopOpacity={0}/>
              </linearGradient>
              
            </defs>
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <YAxis type="number" tickLine={false} axisLine={false} tickCount={6} />
            <CartesianGrid vertical={false} strokeDasharray="2" />
            <Tooltip  />
            <Area dataKey="value" stroke="#FF5403" fillOpacity={1} fill="url(#orangeGradient)" />
          </AreaChart>
          </ResponsiveContainer>                      
        </Box>) :
          (<Box>
          <ResponsiveContainer width="50%" height={550} minWidth="100%" minHeight={350}  >
          <AreaChart data={data} 
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="orangeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF5403" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#FF5403" stopOpacity={0}/>
              </linearGradient>
              
            </defs>
            <XAxis dataKey="date" tickLine={false} axisLine={false} />
            <YAxis type="number" tickLine={false} axisLine={false} tickCount={6} />
            <CartesianGrid vertical={false} strokeDasharray="2" />
            <Tooltip  />
            <Area dataKey="value" stroke="#FF5403" fillOpacity={1} fill="url(#orangeGradient)" />
          </AreaChart>
          </ResponsiveContainer>                      
        </Box>)
        }
        </Box>
      </Box>
      )
}
