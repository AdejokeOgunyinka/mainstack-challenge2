import { Box, Flex, Heading, Switch, Text, chakra } from "@chakra-ui/react";
import { Colors } from "../../../../constants";
import DashboardLayout from "layouts/dashboard/index";
import React, { useState } from "react";
import { Button } from "components";
import { proTag } from "assets/images";
import TwoFAModal from "./TwoFAModal";
import ChangePasswordModal from "./ChangePasswordModal";
import DrawerModal from "components/Modal";
import EditProfileModal from "./EditProfileModal";

const Settings = () => {
  const [page, setPage] = useState("Account");
  const [is2Fa, setIs2Fa] = useState(false);
  const [chgPwd, setChgPwd] = useState(false);
  const [profile, setProfile] = useState(false);
  return (
    <DashboardLayout
      content={
        <Box px={2} w="100%">
          <Box>
            <Heading
              as="h4"
              // display={{ base: 'none', md: 'block' }}
              fontSize="2xl"
              fontWeight="bold"
            >
              Settings
            </Heading>
          </Box>
          <Flex alignItems="center" justifyContent="flex-start" marginTop={8}>
            <Box mr={"20px"}>
              <Heading
                as="h2"
                onClick={() => {
                  setPage("Account");
                }}
                color={page === "Account" ? Colors.orange : Colors.primaryBlack}
                cursor="pointer"
                // display={{ base: 'none', md: 'block' }}
                fontSize="medium"
                fontWeight="normal"
              >
                Account
              </Heading>
            </Box>
            <Box mr={"20px"}>
              <Heading
                onClick={() => {
                  setPage("Payment");
                }}
                as="h2"
                color={page === "Payment" ? Colors.orange : Colors.primaryBlack}
                cursor="pointer"
                // display={{ base: 'none', md: 'block' }}
                fontSize="medium"
                fontWeight="normal"
              >
                Payment
              </Heading>
            </Box>
            <Box>
              <Heading
                onClick={() => {
                  setPage("Notifications");
                }}
                as="h2"
                color={
                  page === "Notifications" ? Colors.orange : Colors.primaryBlack
                }
                cursor="pointer"
                // display={{ base: 'none', md: 'block' }}
                fontSize="medium"
                fontWeight="normal"
              >
                Notifications
              </Heading>
            </Box>
          </Flex>
          <Box marginY={8} maxWidth={"700px"}>
            <Flex
              alignItems={{
                lg: "center",
                md: "center",
                sm: "flex-start",
                base: "flex-start",
              }}
              justifyContent="space-between"
              flexDirection={{
                lg: "row",
                md: "row",
                sm: "column",
                base: "column",
              }}
            >
              <Box>
                <Heading
                  as="h2"
                  color={Colors.black}
                  fontSize="large"
                  fontWeight="bold"
                >
                  Profile
                </Heading>
                <Text
                  maxWidth={{ lg: "80%", md: "80%", sm: "100%", base: "100%" }}
                  my="0.2rem"
                  fontWeight={"normal"}
                  textColor={Colors.gray400}
                  fontSize="sm"
                >
                  Edit your personal details such as Name, Bio, Email, Titles
                  and Social Media accounts.
                </Text>
              </Box>
              <Box
                width={{ lg: "unset", md: "unset", sm: "unset", base: "100%" }}
                mt={{ lg: "unset", md: "unset", sm: "unset", base: "0.5rem" }}
              >
                <Button
                  text={"Edit Profile"}
                  px={"1.5rem"}
                  width={{
                    lg: "180px",
                    md: "180px",
                    sm: "180px",
                    base: "100%",
                  }}
                  color={Colors.black}
                  bg={"transparent"}
                  border={`1px solid ${Colors.gray100}`}
                  handleClick={() => {
                    setProfile(true);
                  }}
                />

                <DrawerModal
                  headingText="Edit profile"
                  size="md"
                  isOpen={profile}
                  onClose={() => {
                    setProfile(false);
                  }}
                  contentFooter={
                    <Box
                      width={{
                        lg: "100%",
                        md: "100%",
                        sm: "100%",
                        base: "100%",
                      }}
                      pb={{
                        lg: "unset",
                        md: "unset",
                        sm: "unset",
                        base: "3rem",
                      }}
                    >
                      <Button
                        text="Save"
                        width={{
                          lg: "100%",
                          md: "100%",
                          sm: "100%",
                          base: "100%",
                        }}
                        px={"3rem"}
                        handleClick={() => {
                          console.log("clicked");
                        }}
                      />
                    </Box>
                  }
                >
                  <EditProfileModal />
                </DrawerModal>
              </Box>
            </Flex>
          </Box>
          <Box marginY={8} maxWidth={"700px"}>
            <Flex
              alignItems={{
                lg: "center",
                md: "center",
                sm: "flex-start",
                base: "flex-start",
              }}
              justifyContent="space-between"
              flexDirection={{
                lg: "row",
                md: "row",
                sm: "column",
                base: "column",
              }}
            >
              <Box>
                <Heading
                  as="h2"
                  color={Colors.black}
                  fontSize="large"
                  fontWeight="bold"
                >
                  Update Password
                </Heading>
                <Text
                  my="0.2rem"
                  fontWeight={"normal"}
                  textColor={Colors.gray400}
                  fontSize="sm"
                >
                  Change your old password to a new one
                </Text>
              </Box>
              <Box
                mt={{ lg: "unset", md: "unset", sm: "unset", base: "0.5rem" }}
                width={{
                  lg: "180px",
                  md: "180px",
                  sm: "180px",
                  base: "100%",
                }}
              >
                <Button
                  text={"Change Password"}
                  px={"1.5rem"}
                  width={{
                    lg: "180px",
                    md: "180px",
                    sm: "180px",
                    base: "100%",
                  }}
                  color={Colors.black}
                  bg={"transparent"}
                  border={`1px solid ${Colors.gray100}`}
                  handleClick={() => {
                    setChgPwd(true);
                  }}
                />

                <DrawerModal
                  headingText="Change Password"
                  size="md"
                  isOpen={chgPwd}
                  onClose={() => {
                    setChgPwd(false);
                  }}
                  contentFooter={
                    <Box
                      width={{
                        lg: "100%",
                        md: "100%",
                        sm: "100%",
                        base: "100%",
                      }}
                      pb={{
                        lg: "unset",
                        md: "unset",
                        sm: "unset",
                        base: "3rem",
                      }}
                    >
                      <Button
                        text="Change Password"
                        width={{
                          lg: "100%",
                          md: "100%",
                          sm: "100%",
                          base: "100%",
                        }}
                        px={"3rem"}
                        handleClick={() => {
                          console.log("clicked");
                        }}
                      />
                    </Box>
                  }
                >
                  <ChangePasswordModal />
                </DrawerModal>
              </Box>
            </Flex>
          </Box>
          <Box marginY={8} maxWidth={"550px"}>
            <Flex
              alignItems={{
                lg: "center",
                md: "center",
                sm: "center",
                base: "center",
              }}
              justifyContent="space-between"
            >
              <Box>
                <Heading
                  as="h2"
                  color={Colors.black}
                  fontSize="large"
                  fontWeight="bold"
                >
                  Two-Factor Aunthentication
                </Heading>
                <Text
                  maxWidth={{ lg: "75%", md: "80%", sm: "85%", base: "90%" }}
                  my="0.2rem"
                  fontWeight={"normal"}
                  textColor={Colors.gray400}
                  fontSize="sm"
                >
                  Add an extra layer of security and protection to your
                  Mainstack account to protect it from unauthorized transactions
                </Text>
              </Box>
              <Box>
                <Switch
                  id="2fa"
                  colorScheme="green"
                  size="md"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.checked) {
                      setIs2Fa(true);
                    } else {
                      setIs2Fa(false);
                    }
                  }}
                />
              </Box>
            </Flex>
          </Box>
          <Box marginY={8} maxWidth={"550px"}>
            <Flex
              alignItems={{
                lg: "center",
                md: "center",
                sm: "center",
                base: "center",
              }}
              justifyContent="space-between"
            >
              <Box>
                <Heading
                  as="h2"
                  color={Colors.black}
                  fontSize="large"
                  fontWeight="bold"
                >
                  Account Visibility
                </Heading>
                <Text
                  maxWidth={{ lg: "75%", md: "80%", sm: "85%", base: "90%" }}
                  my="0.2rem"
                  fontWeight={"normal"}
                  textColor={Colors.gray400}
                  fontSize="sm"
                >
                  You can turn off your page if you would like to temporarily
                  disable your audience from discovering your page.
                </Text>
              </Box>
              <Box>
                <Switch id="visibility" colorScheme="green" size="md" />
              </Box>
            </Flex>
          </Box>
          <Box marginY={8} maxWidth={"550px"}>
            <Flex
              alignItems={{
                lg: "center",
                md: "center",
                sm: "center",
                base: "center",
              }}
              justifyContent="space-between"
            >
              <Box>
                <Heading
                  as="h2"
                  color={Colors.black}
                  fontSize="large"
                  fontWeight="bold"
                >
                  Remove "Made with Mainstack"
                </Heading>
                <Text
                  maxWidth={{ lg: "75%", md: "80%", sm: "85%", base: "90%" }}
                  my="0.2rem"
                  fontWeight={"normal"}
                  textColor={Colors.gray400}
                  fontSize="sm"
                >
                  You can remove the made with Mainstack label from your public
                  page.
                </Text>
              </Box>
              <Box>
                <Switch id="pro" colorScheme="green" size="md" />
              </Box>
            </Flex>
            <chakra.img
              src={proTag}
              alt="Pro"
              mt="1rem"
              pb={{ md: "3rem", base: "6rem" }}
            />
          </Box>
          <DrawerModal
            headingText="Enable two-factor Aunthentication"
            size="md"
            isOpen={is2Fa}
            onClose={() => {
              setIs2Fa(false);
            }}
            contentFooter={
              <Box
                width={{
                  lg: "100%",
                  md: "100%",
                  sm: "100%",
                  base: "100%",
                }}
                pb={{
                  lg: "unset",
                  md: "unset",
                  sm: "unset",
                  base: "3rem",
                }}
              >
                <Button
                  text="Enable 2FA"
                  width={{
                    lg: "100%",
                    md: "100%",
                    sm: "100%",
                    base: "100%",
                  }}
                  px={"3rem"}
                  handleClick={() => {
                    console.log("clicked");
                  }}
                />
              </Box>
            }
          >
            <TwoFAModal />
          </DrawerModal>
        </Box>
      }
    />
  );
};

export default Settings;
