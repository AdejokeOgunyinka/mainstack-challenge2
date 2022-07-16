import { Box, Flex, Text } from "@chakra-ui/react";
import Facebook from "../../assets/svgs/social_icons/facebook.svg";
import Instagram from "../../assets/svgs/social_icons/Instagram.svg";
import LinkedIn from "../../assets/svgs/social_icons/linkedin.svg";
import Twitter from "../../assets/svgs/social_icons/twitter.svg";

const data = [
	{
		id: 1,
		social: "Facebook",
		value: "50%",
		color: "#599EEA",
		icon: Facebook,
	},
	{
		id: 2,
		social: "Instagram",
		value: "24%",
		color: "#844FF6",
		icon: Instagram,
	},
	{
		id: 3,
		social: "LinkedIn",
		value: "24%",
		color: "#0FB77A",
		icon: LinkedIn,
	},
	{
		id: 4,
		social: "Twitter",
		value: "24%",
		color: "#FAB70A",
		icon: Twitter,
	},
	{ id: 5, social: "Others", value: "24%", color: "#F09468", icon: "" },
];

interface SocialInterface {
	data?: any[];
}

export const Social: React.FC<SocialInterface> = () => {
	return (
		<>
			{data.map((data) => (
				<Flex key={data.id} w="100%" mb={4}>
					{data.icon ? (
						<img src={data.icon} alt="Social Media" />
					) : (
						<Box pr={4} />
					)}
					<Box mx={2} fontSize="1rem">
						<Text as="span" pr={1}>
							{data.social}
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
