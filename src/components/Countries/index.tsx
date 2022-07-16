import { Box, Flex, Text } from "@chakra-ui/react";
import NigerianFlag from "../../assets/svgs/flag_icons/Nigeria.svg";
import AmericanFlag from "../../assets/svgs/flag_icons/USA.svg";
import DutchFlag from "../../assets/svgs/flag_icons/Netherland.svg";
import AndorranFlag from "../../assets/svgs/flag_icons/Andorra.svg";

const data = [
	{
		id: 1,
		nation: "Nigeria",
		value: "50%",
		color: "#599EEA",
		icon: NigerianFlag,
	},
	{
		id: 2,
		nation: "United States",
		value: "24%",
		color: "#844FF6",
		icon: AmericanFlag,
	},
	{
		id: 3,
		nation: "Netherlands",
		value: "24%",
		color: "#0FB77A",
		icon: DutchFlag,
	},
	{
		id: 4,
		nation: "Andorra",
		value: "24%",
		color: "#FAB70A",
		icon: AndorranFlag,
	},
	{ id: 5, nation: "Others", value: "24%", color: "#F09468", icon: "" },
];

interface CountriesInterface {
	data?: any[];
}

export const Countries: React.FC<CountriesInterface> = () => {
	return (
		<>
			{data.map((data) => (
				<Flex key={data.id} w="100%" mb={4}>
					{data.icon ? (
						<img src={data.icon} alt="National Flag" />
					) : (
						<Box pr={4} />
					)}
					<Box fontSize="1rem" mx={2}>
						<Text as="span" pr={1}>
							{data.nation}
						</Text>
						<Text as="span" fontWeight="bold">
							{data.value}
						</Text>
					</Box>
					<Box
						w="16px"
						h="16px"
						borderRadius="50%"
						bgColor={data.color}
						alignSelf="center"
					/>
				</Flex>
			))}
		</>
	);
};
