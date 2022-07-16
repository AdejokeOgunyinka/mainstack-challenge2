import { Box } from "@chakra-ui/react";
import { PieChart, Pie, Cell } from "recharts";
/* Data Set */
const data = [
	{ name: "Group A", value: 150 },
	{ name: "Group B", value: 120 },
	{ name: "Group C", value: 60 },
	{ name: "Group E", value: 10 },
	{ name: "Group D", value: 20 },
];
const COLORS = ["#599EEA", "#844FF6", "#F09468", "#FAB70A", "#0FB77A"];

interface DoughnutInterface {
	data?: any[];
	COLORS?: [];
	width?: number;
	height?: number;
	innerRadius?: number;
	outerRadius?: number;
}

export const DoughnutChart: React.FC<DoughnutInterface> = ({width, height, innerRadius, outerRadius}) => {
	return (
		<Box>
			<PieChart width={width || 240} height={height || 240}>
				<Pie
					data={data}
					cx="50%"
					cy="50%"
					innerRadius={innerRadius || 60}
					outerRadius={outerRadius || 120}
					dataKey="value"
				>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
			</PieChart>
		</Box>
	);
};
