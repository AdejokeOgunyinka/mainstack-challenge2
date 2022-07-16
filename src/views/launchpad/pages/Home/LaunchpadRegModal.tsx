import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  Flex,
  Text,
  Heading,
  Radio,
  chakra,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  typeProcessModal,
  cofounderInterface,
  founderPercentInterface,
} from './types';
import { Colors } from '../../../../constants';
import { Button, Input } from '../../../../components';
import { countries, mainTextInfo, sidebarInfo, sidebarMenu } from './constants';
import { info, trash } from '../../../../assets/images';
import './LaunchpadRegModal.css';
import SelectComponent from '../../../../components/Select';
import TextareaComponent from '../../../../components/Textarea';
import NumberInputComponent from '../../../../components/NumberInput';
import CheckboxCmp from 'components/Checkbox';

const LaunchpadRegModal: React.FC<typeProcessModal> = ({ isOpen, onClose }) => {
  const toast = useToast();

  const customToast = (
    status: 'info' | 'warning' | 'success' | 'error',
    title: string
  ) => {
    return toast({
      title: title,
      status: status,
      duration: 3000,
      position: 'top',
    });
  };

  const [sidebar, setSidebarState] = useState(1);
  const [selectCompany, setSelectCompany] = useState('');

  const [showInfo, setShowInfo] = useState(false);

  const [name, setName] = useState({
    companyName: '',
    email: '',
    suffix: '',
    state: '',
  });

  const [description, setDescription] = useState({
    companyDesc: '',
    website: '',
  });

  const [address, setAddress] = useState({
    country: '',
    zip: '',
    address: '',
    phone: '',
  });

  const [founder, setFounder] = useState({
    firstName: '',
    lastName: '',
    founderCountry: '',
    dob: '',
    founderAddress: '',
    coFounder: [],
  });

  const [cofounderItem, setCofounderItem] = useState<cofounderInterface[]>([]);

  const [founderPercent, setFounderPercent] = useState<
    founderPercentInterface[]
  >([]);

  // const [totalPercent, setTotalPercent] = useState<number>(0);

  const LaunchpadRadio: React.FC<{
    title: string;
    desc: string;
    value: string;
    onChange(): void;
  }> = ({ title, desc, value, onChange }) => {
    return (
      <Flex
        cursor="pointer"
        alignItems={'center'}
        borderRadius="8px"
        border={`1px solid ${Colors.gray100}`}
        p={5}
        mb="1rem"
        onClick={() => {
          setSelectCompany(value);
        }}
      >
        <Radio
          size="sm"
          isRequired={true}
          isChecked={selectCompany === value ? true : false}
          onChange={onChange}
          name={title}
          colorScheme="orange"
        />
        <Box ml={'1rem'}>
          <Heading
            as="h2"
            color={Colors.black}
            fontSize={{ lg: '1rem' }}
            fontWeight="500"
            mb="0.5rem"
          >
            {title}
          </Heading>
          <Text textColor={Colors.gray400} fontWeight="300" fontSize="sm">
            {desc}
          </Text>
        </Box>
      </Flex>
    );
  };

  const SummaryRow: React.FC<{ title: string; info: string }> = ({
    title,
    info,
  }) => {
    return (
      <Box borderBottom="1px solid grey" py="8px">
        <Text textColor={Colors.gray400} fontWeight="400" fontSize="sm">
          {title}
        </Text>
        <Text textColor={Colors.gray400} fontWeight="500" fontSize="sm">
          {info}
        </Text>
      </Box>
    );
  };

  const SummaryDoubleRow: React.FC<{
    title1: string;
    info1: string;
    title2: string;
    info2: string;
  }> = ({ title1, info1, title2, info2 }) => {
    return (
      <Box borderBottom="1px solid grey" py="8px">
        <Text textColor={Colors.gray400} fontWeight="400" fontSize="sm">
          {title1}
        </Text>
        <Text textColor={Colors.gray400} fontWeight="500" fontSize="sm">
          {info1}
        </Text>
        <Box mt="1rem">
          <Text textColor={Colors.gray400} fontWeight="400" fontSize="sm">
            {title2}
          </Text>
          <Text textColor={Colors.gray400} fontWeight="500" fontSize="sm">
            {info2}
          </Text>
        </Box>
      </Box>
    );
  };

  const handleSubmit = () => {
    // const data = {
    //   structure: selectCompany,
    //   // user_ref: username,
    //   // company_name: name.companyName,
    //   // email: name.email,
    //   // suffix: name.suffix,
    //   // state: name.state,
    // };

    // let updatedData;

    if (sidebar === 1) {
      if (!selectCompany) {
        return customToast('error', 'Company structure type  is required');
      }
    } else if (sidebar === 2) {
      if (!name.companyName) {
        return customToast('error', 'Company name is required');
      }
      if (!name.email) {
        return customToast('error', 'Email is required');
      }
      if (
        !name.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        return customToast('error', 'Valid email is required');
      }
      if (!name.suffix) {
        return customToast('error', 'Suffix is required');
      }
      if (!name.state) {
        return customToast('error', 'State is required');
      }
      // addLaunchpad(data);
      // if (launchpad_error) {
      //   return toast.error('There is an error');
      // }
      // console.log(data, launchpad_error);
    } else if (sidebar === 3) {
      if (!description.companyDesc) {
        return customToast('error', 'Company description is required');
      }
      // updatedData = {
      //   description: description.companyDesc,
      //   social_links: description.website
      //     ? [{ link: description.website, platform: "website" }]
      //     : [],
      // };
      // updatingLaunchpad(launchpad && launchpad._id, updatedData);
    } else if (sidebar === 4) {
      if (!address.country) {
        return customToast('error', 'Country is required');
      }
      if (!address.zip) {
        return customToast('error', 'Zip code is required');
      }
      if (!parseInt(address.zip)) {
        return customToast('error', 'Zip code must be digits');
      }
      if (address.zip.length !== 6) {
        return customToast('error', 'Zip code must be 6 digits');
      }
      if (!address.address) {
        return customToast('error', 'Address is required');
      }
      if (!address.phone) {
        return customToast('error', 'Phone number is required');
      }
      if (!parseInt(address.phone)) {
        return customToast('error', 'Phone number must be digits');
      }
      if (address.phone.length < 10) {
        return customToast('error', 'Valid phone number is required');
      }
      // updatedData = {
      //   address: {
      //     country: address.country,
      //     postal: address.zip,
      //     state: address.address,
      //   },
      //   phone_number: address.phone,
      // };
      // updatingLaunchpad(launchpad && launchpad._id, updatedData);
    } else if (sidebar === 5) {
      if (!founder.firstName) {
        return customToast('error', 'Founder First name is required');
      }
      if (!founder.lastName) {
        return customToast('error', 'Founder Last name is required');
      }
      if (!founder.founderCountry) {
        return customToast('error', 'Country is required');
      }
      if (!founder.dob) {
        return customToast('error', 'Date of birth is required');
      }
      if (!founder.founderAddress) {
        return customToast('error', 'Address is required');
      }

      if (cofounderItem) {
        const emptyArr = cofounderItem.map((v, i) => {
          return Object.keys(v).reduce((newObj: any, key: string) => {
            const value = v[key as keyof cofounderInterface];
            if (value === null || value === '') {
              // eslint-disable-next-line no-param-reassign
              newObj[key] = value;
            }
            return newObj;
          }, {});
        });

        const check = emptyArr.some((i) => Object.keys(i).length > 0);
        if (check) {
          return customToast('error', 'Fields must not be empty');
        }
      }

      // const founderData = {
      //   firstname: founder.firstName,
      //   lastname: founder.lastName,
      //   dob: founder.dob,
      //   address: {
      //     country: founder.founderCountry,
      //     state: founder.founderAddress,
      //   },
      //   founder_type: 'owner',
      //   role: true,
      // };

      if (cofounderItem.length > 0) {
        // const refinedData = cofounderItem.map((v, i) => {
        //   return {
        //     firstname: v.firstName,
        //     lastname: v.lastName,
        //     address: { country: v.country },
        //     founder_type: 'co-founder',
        //     role: false,
        //   };
        // });
        // updatedData = { founders: [founderData, ...refinedData] };
      } else {
        // updatedData = {
        //   founders: [founderData],
        // };
      }
      // updatingLaunchpad(launchpad && launchpad._id, updatedData);
    } else if (sidebar === 6) {
      if (founderPercent) {
        // const emptyArr = founderPercent.map((v, i) => {
        //   return Object.keys(v).reduce((newObj, key) => {
        //     const value = v[key];
        //     if (value === null || value === "" || value < 0 || value > 100) {
        //       // eslint-disable-next-line no-param-reassign
        //       newObj[key] = value;
        //     }
        //     return newObj;
        //   }, {});
        // });
        // const check = emptyArr.some((i) => Object.keys(i).length > 0);
        // if (check) {
        //   return customToast("error", "A total of 100% is needed");
        // }
      }

      // if (totalPercent !== 100) {
      //   return customToast('error', 'Total percent must be 100');
      // }
      // const updatedFounderData = launchpad.founders.map((v, i) => {
      //   return {
      //     ...v,
      //     ownership: founderPercent[i][`percent${i}`],
      //   };
      // });

      // updatedData = { founders: [...updatedFounderData] };

      // updatingLaunchpad(launchpad && launchpad._id, updatedData);
    }

    return setSidebarState(sidebar > 11 ? 11 : sidebar + 1);
  };

  const handleChange = (e: any) => {
    setName((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
    setDescription((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
    setAddress((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
    setFounder((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  const handleChangeCofounder = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    idx: number
  ) => {
    return setCofounderItem([
      ...cofounderItem.slice(0, idx),
      { ...cofounderItem[idx], [e.target.id]: e.target.value },
      ...cofounderItem.slice(idx + 1),
    ]);
  };

  const handleChangeFounderPercent = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    idx: number
  ) => {
    return setFounderPercent([
      ...founderPercent.slice(0, idx),
      { ...founderPercent[idx], [e.target.id]: parseInt(e.target.value) },
      ...founderPercent.slice(idx + 1),
    ]);
  };

  return (
    <Modal
      blockScrollOnMount={true}
      isOpen={isOpen}
      onClose={onClose}
      size="full"
    >
      <ModalOverlay />
      <ModalContent backgroundColor={`${Colors.white}`}>
        {/* <ModalHeader>Modal Title</ModalHeader> */}
        <ModalCloseButton />
        <ModalBody>
          <Box maxWidth="1200px" margin="0 auto" p={{ lg: '2rem 1rem' }}>
            <Flex
              alignItems={{
                lg: 'flex-start',
                md: 'flex-start',
                sm: 'center',
                base: 'center',
              }}
              flexDirection={{
                lg: 'row',
                md: 'row',
                sm: 'column',
                base: 'column',
              }}
              width={{ sm: '100%', base: '100%' }}
              mt={{ lg: '1rem', md: '1rem', sm: '3rem', base: '3rem' }}
            >
              <Box
                className="hide-scrollbar"
                display={{
                  lg: 'flex',
                  md: 'flex',
                  sm: '-webkit-inline-box',
                  base: '-webkit-inline-box',
                }}
                overflow={{ sm: 'auto', base: 'auto' }}
                flexBasis={{ lg: '20%', md: '20%', sm: 'unset', base: '100%' }}
                width={{ sm: '100%', base: '100%' }}
                flexDirection={{
                  lg: 'column',
                  md: 'column',
                  sm: 'row',
                  base: 'row',
                }}
                flexWrap={{ lg: 'nowrap', base: 'nowrap' }}
              >
                {sidebarMenu.map((v, i) => {
                  return (
                    <Text
                      cursor={'pointer'}
                      mb="1rem"
                      p={{ sm: '0 1rem 0 0', base: '0 1rem 0 0' }}
                      textColor={`${
                        sidebar === i + 1 ? Colors.orange : Colors.black
                      }`}
                      fontSize="sm"
                      onClick={() => {
                        setSidebarState(i + 1);
                      }}
                    >
                      {v}
                    </Text>
                  );
                })}
              </Box>
              <Flex
                flexDirection="column"
                flexBasis={{ lg: '55%', md: '55%' }}
                width={{ sm: '100%', base: '100%' }}
              >
                <Flex
                  alignItems={'flex-start'}
                  justifyContent="space-between"
                  width={{ sm: '100%', base: '100%' }}
                >
                  {mainTextInfo.map((v, i) => {
                    return (
                      i + 1 === sidebar && (
                        <Box>
                          <Heading
                            as="h2"
                            color={Colors.black}
                            fontSize={{ lg: '1.6rem', sm: '1.3rem' }}
                            fontWeight="500"
                          >
                            {v.title}
                          </Heading>
                          <Text
                            textColor={Colors.gray400}
                            fontWeight="300"
                            fontSize="sm"
                          >
                            {v.desc}
                          </Text>
                        </Box>
                      )
                    );
                  })}
                  <chakra.img
                    cursor={'pointer'}
                    src={info}
                    alt="Info"
                    ml="1rem"
                    onClick={() => {
                      setShowInfo(!showInfo);
                    }}
                    onMouseOver={() => {
                      setShowInfo(!showInfo);
                    }}
                    onMouseOut={() => {
                      setShowInfo(false);
                    }}
                  />
                </Flex>
                <Box my={'1.5rem'}>
                  {sidebar === 1 && (
                    <>
                      <LaunchpadRadio
                        title="C corporation"
                        desc="Best for startups and fund raising from investors"
                        value="c"
                        onChange={() => {
                          setSelectCompany('c');
                        }}
                      />
                      <LaunchpadRadio
                        title="Limited Liablility Company (LLC)"
                        desc="Best for startups and fund raising from investors"
                        value="llc"
                        onChange={() => {
                          setSelectCompany('llc');
                        }}
                      />
                      <LaunchpadRadio
                        title="Subsidiary"
                        desc="Best for startups and fund raising from investors"
                        value="s"
                        onChange={() => {
                          setSelectCompany('s');
                        }}
                      />
                    </>
                  )}
                  {sidebar === 2 && (
                    <>
                      <Box mb={'1rem'}>
                        <Input
                          label="Company name (Registered name)"
                          value={name.companyName}
                          handleChange={(e: any) => handleChange(e)}
                          id="companyName"
                          type="text"
                        />
                      </Box>
                      <Box mb={'1rem'}>
                        <Input
                          label="Email"
                          value={name.email}
                          handleChange={(e: any) => handleChange(e)}
                          id="email"
                          type="text"
                        />
                      </Box>
                      <Flex
                        flexDirection={{
                          lg: 'row',
                          md: 'row',
                          sm: 'column',
                          base: 'column',
                        }}
                      >
                        <Box
                          mb={'1rem'}
                          width="100%"
                          mr={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <SelectComponent
                            label="Suffix"
                            id="suffix"
                            value={name.suffix}
                            data={['inc', 'org', 'ltd']}
                            handleChange={(e: any) => handleChange(e)}
                            placeholder="Select Suffix"
                          />
                        </Box>
                        <Box
                          mb={'1rem'}
                          width="100%"
                          ml={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <SelectComponent
                            label="State"
                            id="state"
                            value={name.state}
                            handleChange={(e) => handleChange(e)}
                            data={['Texas', 'Delaware']}
                            placeholder="Select State"
                          />
                        </Box>
                      </Flex>
                    </>
                  )}
                  {sidebar === 3 && (
                    <>
                      <Box mb={'1rem'}>
                        <TextareaComponent
                          label="Describe your product or service"
                          id="companyDesc"
                          size="lg"
                          isRequired={true}
                          count={500}
                          value={description.companyDesc}
                          handleChange={(e: any) => handleChange(e)}
                        />
                      </Box>
                      <Box mb={'1rem'}>
                        <Input
                          label="Company website, social media or app (Optional)"
                          id="website"
                          value={description.website}
                          handleChange={(e: any) => handleChange(e)}
                          type="text"
                        />
                      </Box>
                    </>
                  )}
                  {sidebar === 4 && (
                    <>
                      <Flex
                        flexDirection={{
                          lg: 'row',
                          md: 'row',
                          sm: 'column',
                          base: 'column',
                        }}
                      >
                        <Box
                          mb={'1rem'}
                          width="100%"
                          mr={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <SelectComponent
                            label="Country"
                            id="country"
                            data={countries}
                            value={address.country}
                            handleChange={(e) => handleChange(e)}
                            placeholder="Select a country"
                          />
                        </Box>
                        <Box
                          mb={'1rem'}
                          width="100%"
                          ml={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <Input
                            label="Zip"
                            value={address.zip}
                            handleChange={(e) => handleChange(e)}
                            id="zip"
                            type="number"
                          />
                        </Box>
                      </Flex>
                      <Box mb={'1rem'}>
                        <Input
                          label="Address"
                          value={address.address}
                          handleChange={(e) => handleChange(e)}
                          id="address"
                          type="text"
                        />
                      </Box>
                      <Box mb={'1rem'}>
                        <Input
                          label="Phone"
                          value={address.phone}
                          handleChange={(e) => handleChange(e)}
                          id="phone"
                          type="text"
                        />
                      </Box>
                    </>
                  )}
                  {sidebar === 5 && (
                    <>
                      <Flex
                        flexDirection={{
                          lg: 'row',
                          md: 'row',
                          sm: 'column',
                          base: 'column',
                        }}
                      >
                        <Box
                          mb={'1rem'}
                          width="100%"
                          mr={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <Input
                            label="First Name"
                            handleChange={(e) => handleChange(e)}
                            value={founder.firstName}
                            id="firstName"
                            type="text"
                          />
                        </Box>
                        <Box
                          mb={'1rem'}
                          width="100%"
                          ml={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <Input
                            label="Last Name"
                            handleChange={(e) => handleChange(e)}
                            value={founder.lastName}
                            id="lastName"
                            type="text"
                          />
                        </Box>
                      </Flex>
                      <Flex
                        flexDirection={{
                          lg: 'row',
                          md: 'row',
                          sm: 'column',
                          base: 'column',
                        }}
                      >
                        <Box
                          mb={'1rem'}
                          width="100%"
                          mr={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <SelectComponent
                            label="Country"
                            id="founderCountry"
                            handleChange={(e) => handleChange(e)}
                            value={founder.founderCountry}
                            data={countries}
                            placeholder="Select a country"
                          />
                        </Box>
                        <Box
                          mb={'1rem'}
                          width="100%"
                          ml={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <Input
                            label="Date of Birth"
                            id="dob"
                            handleChange={(e) => handleChange(e)}
                            value={founder.dob}
                          />
                        </Box>
                      </Flex>
                      <Box mb={'1rem'}>
                        <Input
                          label="Address"
                          handleChange={(e) => handleChange(e)}
                          value={founder.founderAddress}
                          id="founderAddress"
                          type="text"
                        />
                      </Box>
                      <Box mt={'1.5rem'}>
                        <Heading
                          as="h2"
                          color={Colors.black}
                          fontSize={{ lg: '1rem' }}
                          fontWeight="500"
                        >
                          Co-founder details (If any)
                        </Heading>
                        <Text
                          textColor={Colors.gray400}
                          fontWeight="300"
                          fontSize="sm"
                        >
                          You will need their name, email and home address. We
                          will email them to join the company.
                        </Text>
                        {(cofounderItem && cofounderItem).map(
                          (item: any, index: any) => {
                            return (
                              <>
                                <Box mt="1rem">
                                  <Box
                                    display={'flex'}
                                    justifyContent="flex-end"
                                  >
                                    <chakra.img
                                      cursor={'pointer'}
                                      src={trash}
                                      alt="Trash"
                                      onClick={() => {
                                        setCofounderItem([
                                          ...cofounderItem.slice(0, index),
                                          ...cofounderItem.slice(index + 1),
                                        ]);
                                      }}
                                    />
                                  </Box>
                                  <Flex
                                    flexDirection={{
                                      lg: 'row',
                                      md: 'row',
                                      sm: 'column',
                                      base: 'column',
                                    }}
                                  >
                                    <Box
                                      mb={'1rem'}
                                      width="100%"
                                      mr={{
                                        lg: '0.5rem',
                                        md: '0.5rem',
                                        sm: '0',
                                        base: '0',
                                      }}
                                    >
                                      <Input
                                        label="First Name"
                                        id="firstName"
                                        value={item.firstName}
                                        handleChange={(e: any) =>
                                          handleChangeCofounder(e, index)
                                        }
                                        type="text"
                                      />
                                    </Box>
                                    <Box
                                      mb={'1rem'}
                                      width="100%"
                                      ml={{
                                        lg: '0.5rem',
                                        md: '0.5rem',
                                        sm: '0',
                                        base: '0',
                                      }}
                                    >
                                      <Input
                                        label="Last Name"
                                        value={item.lastName}
                                        handleChange={(e: any) =>
                                          handleChangeCofounder(e, index)
                                        }
                                        id="lastName"
                                        type="text"
                                      />
                                    </Box>
                                  </Flex>
                                  <Flex
                                    flexDirection={{
                                      lg: 'row',
                                      md: 'row',
                                      sm: 'column',
                                      base: 'column',
                                    }}
                                  >
                                    <Box
                                      mb={'1rem'}
                                      width="100%"
                                      mr={{
                                        lg: '0.5rem',
                                        md: '0.5rem',
                                        sm: '0',
                                        base: '0',
                                      }}
                                    >
                                      <SelectComponent
                                        label="Country"
                                        id="country"
                                        value={item.country}
                                        handleChange={(e) =>
                                          handleChangeCofounder(e, index)
                                        }
                                        data={countries}
                                        placeholder="Select a country"
                                      />
                                    </Box>
                                  </Flex>
                                </Box>
                              </>
                            );
                          }
                        )}
                        <Box mt="1rem">
                          <Button
                            text="Add co-founder"
                            bg={Colors.gray100}
                            color={Colors.primaryBlack}
                            px={'3rem'}
                            handleClick={() => {
                              setCofounderItem((prevState: any) => {
                                return [
                                  ...prevState,
                                  {
                                    id: prevState.length + 1,
                                    firstName: '',
                                    lastName: '',
                                    country: '',
                                  },
                                ];
                              });
                            }}
                          />
                        </Box>
                      </Box>
                    </>
                  )}
                  {sidebar === 6 && (
                    <>
                      <Flex
                        flexDirection={{
                          lg: 'row',
                          md: 'row',
                          sm: 'column',
                          base: 'column',
                        }}
                        alignItems={{
                          lg: 'center',
                          md: 'center',
                        }}
                      >
                        <Box
                          mb={'1rem'}
                          width="100%"
                          mr={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <Heading
                            as="h2"
                            color={Colors.black}
                            fontSize={{ lg: '1rem' }}
                            fontWeight="500"
                          >
                            Founder
                          </Heading>
                        </Box>
                        <Box
                          mb={'1rem'}
                          width="100%"
                          ml={{
                            lg: '0.5rem',
                            md: '0.5rem',
                            sm: '0',
                            base: '0',
                          }}
                        >
                          <NumberInputComponent
                            label="Percentage"
                            min={0}
                            max={100}
                            id={`percentage`}
                            handleChange={(e) =>
                              handleChangeFounderPercent(e, 1)
                            }
                          />
                        </Box>
                      </Flex>
                      <Box
                        mt="1rem"
                        pt="1rem"
                        borderTop={`1px solid ${Colors.gray100}`}
                      >
                        <Heading
                          as="h2"
                          color={Colors.black}
                          fontSize={{ lg: '1rem' }}
                          fontWeight="500"
                        >
                          Details
                        </Heading>
                        <Flex
                          flexDirection={{
                            lg: 'row',
                            md: 'row',
                            sm: 'column',
                            base: 'column',
                          }}
                          mt={'1rem'}
                          justifyContent={'space-between'}
                          gap={'20px'}
                        >
                          <Text
                            textColor={Colors.gray400}
                            fontWeight="300"
                            fontSize="sm"
                          >
                            Total units:
                          </Text>
                          <Text
                            textColor={Colors.gray400}
                            fontWeight="300"
                            fontSize="sm"
                          >
                            "Your LLC will have 10million units. It's standard"
                          </Text>
                        </Flex>
                      </Box>
                    </>
                  )}
                  {sidebar === 7 && (
                    <>
                      <Heading
                        as="h2"
                        color={Colors.black}
                        fontSize={{ lg: '1rem' }}
                        fontWeight="500"
                      >
                        Managers
                      </Heading>
                      <Text
                        textColor={Colors.gray400}
                        fontWeight="300"
                        fontSize="sm"
                        mt={'1rem'}
                      >
                        Managers are responsible for the day-to-day operations
                        and can sign contracts on the company's behalf.
                      </Text>
                      <Box mt={'1rem'}>
                        <CheckboxCmp
                          id="manager"
                          isChecked={true}
                          label="Manager"
                        />
                      </Box>
                    </>
                  )}
                  {sidebar === 8 && (
                    <>
                      <Heading
                        as="h2"
                        color={Colors.black}
                        fontSize={{ lg: '1rem' }}
                        fontWeight="500"
                      >
                        Select a processing option
                      </Heading>
                      <Text
                        textColor={Colors.gray400}
                        fontWeight="300"
                        fontSize="sm"
                        my={'1rem'}
                      >
                        The Internal Revenue Services (IRS) has two options -
                        both are free
                      </Text>
                      <LaunchpadRadio
                        title="Standard 7-10 business days after
                        incorporation"
                        desc="Available to everyone"
                        value="standard"
                        onChange={() => {
                          console.log('click');
                        }}
                      />
                      <LaunchpadRadio
                        title="Expedited 1 - 2 business days after
                        incorporation"
                        desc="Available if you provide"
                        value="standardd"
                        onChange={() => {
                          console.log('click');
                        }}
                      />
                    </>
                  )}
                  {sidebar === 9 && (
                    <>
                      <Box mt="1rem">
                        <Heading
                          as="h2"
                          color={Colors.black}
                          fontSize={{ lg: '1.1rem' }}
                          fontWeight="500"
                          mb={'0.5rem'}
                        >
                          Company
                        </Heading>
                        <Box
                          mt="1rem"
                          backgroundColor={'#dee2e6'}
                          borderRadius="12px"
                          textAlign={'left'}
                          p="1rem"
                        >
                          <SummaryRow title="Structure" info="LLC" />
                          <SummaryRow title="Name" info="Company name LLC" />
                          <SummaryDoubleRow
                            title1="Description"
                            info1="Company description"
                            title2="Website, social media or app"
                            info2="Nil"
                          />
                          <Flex
                            my="0.6rem"
                            flexDirection={{
                              lg: 'row',
                              md: 'column',
                              sm: 'column',
                              base: 'column',
                            }}
                            justifyContent={{
                              lg: 'space-between',
                              md: 'flex-start',
                              sm: 'flex-start',
                              base: 'flex-start',
                            }}
                          >
                            <Box my="0.2rem">
                              <Text
                                textColor={Colors.gray400}
                                fontWeight="400"
                                fontSize="sm"
                              >
                                Address
                              </Text>
                              <Text
                                textColor={Colors.gray400}
                                fontWeight="300"
                                fontSize="sm"
                              >
                                Company Address
                              </Text>
                            </Box>
                            <Box my="0.2rem">
                              <Text
                                textColor={Colors.gray400}
                                fontWeight="400"
                                fontSize="sm"
                              >
                                Address
                              </Text>
                              <Text
                                textColor={Colors.gray400}
                                fontWeight="300"
                                fontSize="sm"
                              >
                                Company Address
                              </Text>
                            </Box>
                          </Flex>
                        </Box>

                        <Heading
                          as="h2"
                          color={Colors.black}
                          fontSize={{ lg: '1.1rem' }}
                          fontWeight="500"
                          my={'1rem'}
                        >
                          Company
                        </Heading>
                        <Box
                          mt="1rem"
                          backgroundColor={'#dee2e6'}
                          borderRadius="12px"
                          textAlign={'left'}
                          p="1rem"
                        >
                          <SummaryRow title="Structure" info="LLC" />
                          <SummaryRow title="Name" info="Company name LLC" />
                          <SummaryDoubleRow
                            title1="Description"
                            info1="Company description"
                            title2="Website, social media or app"
                            info2="Nil"
                          />
                          <Flex
                            my="0.6rem"
                            flexDirection={{
                              lg: 'row',
                              md: 'column',
                              sm: 'column',
                              base: 'column',
                            }}
                            justifyContent={{
                              lg: 'space-between',
                              md: 'flex-start',
                              sm: 'flex-start',
                              base: 'flex-start',
                            }}
                          >
                            <Box my="0.2rem">
                              <Text
                                textColor={Colors.gray400}
                                fontWeight="400"
                                fontSize="sm"
                              >
                                Address
                              </Text>
                              <Text
                                textColor={Colors.gray400}
                                fontWeight="300"
                                fontSize="sm"
                              >
                                Company Address
                              </Text>
                            </Box>
                            <Box my="0.2rem">
                              <Text
                                textColor={Colors.gray400}
                                fontWeight="400"
                                fontSize="sm"
                              >
                                Address
                              </Text>
                              <Text
                                textColor={Colors.gray400}
                                fontWeight="300"
                                fontSize="sm"
                              >
                                Company Address
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </Box>
                    </>
                  )}
                  {sidebar === 10 && (
                    <>
                      <Box mt="1rem">
                        <Heading
                          as="h2"
                          color={Colors.black}
                          fontSize={{ lg: '1.1rem' }}
                          fontWeight="500"
                          mb={'0.5rem'}
                        >
                          Payment details
                        </Heading>
                        <Flex
                          flexDirection={{
                            lg: 'row',
                            md: 'row',
                            sm: 'column',
                            base: 'column',
                          }}
                        >
                          <Box
                            mb={'1rem'}
                            width="100%"
                            mr={{
                              lg: '0.5rem',
                              md: '0.5rem',
                              sm: '0',
                              base: '0',
                            }}
                          >
                            <Input
                              label="Card number"
                              handleChange={(e: any) => {
                                console.log('clicked');
                              }}
                              id="cardNo"
                              type="text"
                            />
                          </Box>
                        </Flex>
                        <Flex
                          flexDirection={{
                            lg: 'row',
                            md: 'row',
                            sm: 'column',
                            base: 'column',
                          }}
                        >
                          <Box
                            mb={'1rem'}
                            width="100%"
                            mr={{
                              lg: '0.5rem',
                              md: '0.5rem',
                              sm: '0',
                              base: '0',
                            }}
                          >
                            <Input
                              label="Expiry date"
                              handleChange={(e: any) => {
                                console.log('clicked');
                              }}
                              id="expiry"
                              type="text"
                            />
                          </Box>
                          <Box
                            mb={'1rem'}
                            width="100%"
                            ml={{
                              lg: '0.5rem',
                              md: '0.5rem',
                              sm: '0',
                              base: '0',
                            }}
                          >
                            <Input
                              label="CVV"
                              handleChange={(e: any) => {
                                console.log('clicked');
                              }}
                              id="cvv"
                              type="text"
                            />
                          </Box>
                        </Flex>
                      </Box>
                    </>
                  )}
                  {sidebar === 11 && (
                    <>
                      <Heading
                        as="h2"
                        color={Colors.black}
                        fontSize={{ lg: '1.3rem' }}
                        fontWeight="500"
                        mb={'1rem'}
                      >
                        Incorporation
                      </Heading>
                      <Heading
                        as="h2"
                        color={Colors.black}
                        fontSize={{ lg: '1.1rem' }}
                        fontWeight="500"
                        mb={'0rem'}
                      >
                        Certificate of Formation
                      </Heading>
                      <Text
                        textColor={Colors.gray400}
                        fontWeight="300"
                        fontSize="sm"
                        my={'0.5rem'}
                      >
                        When you're ready, sign your documents and we'll set up
                        your company. Your documents will be available in the
                        Dashboard
                      </Text>
                      <Heading
                        as="h2"
                        color={Colors.black}
                        fontSize={{ lg: '1.1rem' }}
                        fontWeight="500"
                        mb={'0rem'}
                      >
                        Operating Agreement
                      </Heading>
                      <Text
                        textColor={Colors.gray400}
                        fontWeight="300"
                        fontSize="sm"
                        my={'0.5rem'}
                      >
                        When you're ready, sign your documents and we'll set up
                        your company. Your documents will be available in the
                        Dashboard
                      </Text>
                      <Heading
                        as="h2"
                        color={Colors.black}
                        fontSize={{ lg: '1.1rem' }}
                        fontWeight="500"
                        mb={'0rem'}
                      >
                        Confidential Information and Invention Assignment
                        Agreement
                      </Heading>
                      <Text
                        textColor={Colors.gray400}
                        fontWeight="300"
                        fontSize="sm"
                        my={'0.5rem'}
                      >
                        When you're ready, sign your documents and we'll set up
                        your company. Your documents will be available in the
                        Dashboard
                      </Text>
                      <Heading
                        as="h2"
                        color={Colors.black}
                        fontSize={{ lg: '1.3rem' }}
                        fontWeight="500"
                        my={'1rem'}
                      >
                        Tax ID
                      </Heading>
                      <Heading
                        as="h2"
                        color={Colors.black}
                        fontSize={{ lg: '1.1rem' }}
                        fontWeight="500"
                        mb={'0rem'}
                      >
                        Form 8821
                      </Heading>
                      <Text
                        textColor={Colors.gray400}
                        fontWeight="300"
                        fontSize="sm"
                        my={'0.5rem'}
                      >
                        When you're ready, sign your documents and we'll set up
                        your company. Your documents will be available in the
                        Dashboard
                      </Text>
                      <Heading
                        as="h2"
                        color={Colors.black}
                        fontSize={{ lg: '1.1rem' }}
                        fontWeight="500"
                        mb={'0rem'}
                      >
                        Form SS-4
                      </Heading>
                      <Text
                        textColor={Colors.gray400}
                        fontWeight="300"
                        fontSize="sm"
                        my={'0.5rem'}
                      >
                        When you're ready, sign your documents and we'll set up
                        your company. Your documents will be available in the
                        Dashboard
                      </Text>
                      <Flex alignItems={'center'} gap={'10px'}>
                        <chakra.img
                          cursor={'pointer'}
                          src={trash}
                          alt="Preview"
                        />
                        <Text
                          textColor={Colors.orange}
                          fontWeight="300"
                          fontSize="sm"
                          my={'0.5rem'}
                        >
                          Preview your document
                        </Text>
                      </Flex>
                      <Box my={'1rem'}>
                        <Input
                          label="Signed by Manager's name"
                          handleChange={(e: any) => {
                            console.log('clicked');
                          }}
                          placeholder="Enter 'Managers name' to sign"
                          id="managerName"
                          type="text"
                        />
                      </Box>
                    </>
                  )}
                </Box>
              </Flex>
              <Box
                flexBasis={'25%'}
                width={{ sm: '200px', base: '200px' }}
                position={{
                  lg: 'unset',
                  md: 'unset',
                  sm: 'absolute',
                  base: 'absolute',
                }}
                backgroundColor={{ sm: Colors.white, base: Colors.white }}
                right={{ sm: '50px', base: '50px' }}
              >
                {sidebarInfo.map((v, i) => {
                  return (
                    i + 1 === sidebar && (
                      <Flex
                        display={`${showInfo ? 'block' : 'none'}`}
                        m="0 1rem"
                        p={4}
                        borderRadius="8px"
                        border={`1px solid ${Colors.gray100}`}
                        alignItems="flex-start"
                        justifyContent={'center'}
                        flexDirection="column"
                      >
                        <Heading
                          as="h2"
                          color={Colors.black}
                          fontSize={{ lg: '1rem' }}
                          fontWeight="500"
                        >
                          {v.title}
                        </Heading>
                        <Text
                          textColor={Colors.gray400}
                          fontWeight="300"
                          fontSize="sm"
                        >
                          {v.desc}
                        </Text>
                      </Flex>
                    )
                  );
                })}
              </Box>
            </Flex>
          </Box>
        </ModalBody>
        <ModalFooter
          marginBottom={{ lg: '0', md: '0', sm: '5rem', base: '6rem' }}
        >
          <Box mr={'1rem'} display={{ lg: 'unset', sm: 'none', base: 'none' }}>
            <Button
              text="Back"
              bg={Colors.gray100}
              color={Colors.primaryBlack}
              px={'3rem'}
              handleClick={() => {
                sidebar > 1 ? setSidebarState(sidebar - 1) : setSidebarState(1);
              }}
            />
          </Box>
          <Box width={{ lg: 'unset', md: 'unset', sm: 'unset', base: '100%' }}>
            <Button
              text="Proceed"
              width={{ lg: 'unset', md: 'unset', sm: 'unset', base: '100%' }}
              px={'3rem'}
              // handleClick={() => {
              //   setSidebarState(sidebar > 11 ? 11 : sidebar + 1);
              // }}
              handleClick={() => handleSubmit()}
            />
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LaunchpadRegModal;
