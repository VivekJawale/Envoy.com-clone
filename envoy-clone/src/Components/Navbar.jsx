import {
  Box,
  Flex,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  IconButton,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const [size, setSize] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  
  return (
    <>
      <Box p={3} bgColor="#f6f6f9" pt={5}>
        <Flex justifyContent="space-between">
          <HStack spacing={30}>
            <NavLink to="/">
              <Image
                width={100}
                objectFit="cover"
                src="https://dashboard.envoy.com/assets/images/logo-4809021238a48b1c2864cdba71564128.svg"
                alt="Dan Abramov"
              />
            </NavLink>
          </HStack>

          <Box display={{ sm: "none", lg: "block" }}>
            <HStack>
              <Box>
                <NavLink to="/hiring">
                  <Heading
                    bgColor="white"
                    fontSize="16px"
                    color="#3F4450"
                    borderRadius="20%"
                    p={2}
                  >
                    We're hiring!
                  </Heading>
                </NavLink>
              </Box>

              <Box>
                <Menu>
                  <MenuButton as={Button} background="none">
                    <Heading fontSize="16px" color="#3F4450">
                      Products <ChevronDownIcon />
                    </Heading>
                  </MenuButton>
                  <MenuList>
                    <HStack>
                      <MenuList>
                        <MenuItem>
                          <HStack>
                            <Box mr="18px">
                              <Image
                                width={10}
                                src="https://envoy.com/images/icons/products/visitors-app.png"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Visitors</Heading>
                              <Text>
                                Visitor management solution for any front desk
                              </Text>
                            </Box>
                          </HStack>
                        </MenuItem>
                        <MenuItem>
                          <HStack>
                            <Box mr="18px">
                              <Image
                                width={10}
                                src="https://envoy.com/images/icons/products/protect-app.png"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Protect</Heading>
                              <Text>
                                Manage hybrid schedules and keep employees
                              </Text>
                            </Box>
                          </HStack>
                        </MenuItem>
                        <MenuItem>
                          <HStack>
                            <Box mr="18px">
                              <Image
                                width={10}
                                src="https://envoy.com/images/icons/products/desks-app.png"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Desks</Heading>
                              <Text>
                                Easy desk booking for a flexible workplace
                              </Text>
                            </Box>
                          </HStack>
                        </MenuItem>
                        <MenuItem>
                          <HStack>
                            <Box mr="18px">
                              <Image
                                width={10}
                                src="https://envoy.com/images/icons/products/deliveries-app.png"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Deliveries</Heading>
                              <Text>
                                A new way to organize incomeing office
                                deliveries
                              </Text>
                            </Box>
                          </HStack>
                        </MenuItem>
                      </MenuList>
                      <MenuList>
                        <MenuItem>
                          <HStack>
                            <Box mr="18px">
                              <Image
                                width={10}
                                src="https://envoy.com/images/icons/24px/red/iphone.svg"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Rooms</Heading>
                            </Box>
                          </HStack>
                        </MenuItem>
                        <MenuItem>
                          <HStack>
                            <Box mr="18px">
                              <Image
                                width={10}
                                src="https://envoy.com/images/icons/24px/red/integrations.svg"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Rooms1</Heading>
                            </Box>
                          </HStack>
                        </MenuItem>
                        <MenuItem>
                          <HStack>
                            <Box mr="18px">
                              <Image
                                width={10}
                                src="https://envoy.com/images/icons/24px/red/developer.svg"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Rooms</Heading>
                            </Box>
                          </HStack>
                        </MenuItem>
                      </MenuList>
                    </HStack>
                  </MenuList>
                </Menu>
              </Box>

              <Box>
                <Menu>
                  <MenuButton as={Button} background="none">
                    <Heading fontSize="16px" color="#3F4450">
                      Solution <ChevronDownIcon />
                    </Heading>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Box>
                        <HStack>
                          <Box mr="18px">
                            <Image
                              width={8}
                              src="https://envoy.com/images/icons/24px/red/globe.svg"
                              alt=""
                            />
                          </Box>
                          <Box>
                            <Heading fontSize={15}>Hybrid work</Heading>
                          </Box>
                        </HStack>
                      </Box>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/office.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>
                            Support enterprise needs
                          </Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/shield.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Enhance security</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/rooms.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Space management</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/pulse.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>
                            Workplace health and safety
                          </Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/16px/red/sparkles.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Workplace experience</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/document.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>
                            Meet compliance requirements
                          </Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>

              <Box>
                <Menu>
                  <MenuButton as={Button} background="none">
                    <Heading fontSize="16px" color="#3F4450">
                      Resources <ChevronDownIcon />
                    </Heading>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/office.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>
                            Workplace trends report
                          </Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/pen-nib.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Blog</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/book.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Ebooks</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/webinar.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Webinars</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/announcements.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Case studies</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/data.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>
                            Return to Workplace Index
                          </Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/megaphone.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Protuct news</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/globe.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>
                            Hybrid Word Resource Hub
                          </Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>

              <Box>
                <NavLink to="/demo">
                  <Heading fontSize="16px" color="#3F4450">
                    Demo
                  </Heading>
                </NavLink>
              </Box>
              <Box>
                <Menu>
                  <MenuButton as={Button} background="none">
                    <Heading fontSize="16px" color="#3F4450">
                      Pricing <ChevronDownIcon />
                    </Heading>
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/tag.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Plans and pricing</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/calculator.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Get a quote</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/phone.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>
                            Call sales : (877) 657-2808
                          </Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                    <MenuItem>
                      <HStack>
                        <Box mr="18px">
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/envelope.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Contact us</Heading>
                        </Box>
                      </HStack>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>

              <Box>
                <NavLink to="/login">
                  <Heading fontSize="16px" color="#3F4450">
                    Log in
                  </Heading>
                </NavLink>
              </Box>

              <Box pl={5}>
                <NavLink to="/getstart">
                  <Button colorScheme="red" variant="solid" pl={5} pr={5}>
                    Get started
                  </Button>
                </NavLink>
              </Box>
            </HStack>
          </Box>
          <Box display={{ lg: "none" }}>
            <Button onClick={() => handleClick(size)} key={size} m={4}>
              <IconButton icon={<HamburgerIcon />} />
            </Button>

            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <Box p={10}>
                  <Heading fontSize={25}>
                    Product|<span>View all</span>
                  </Heading>
                  <Box mt={18}>
                    <Box>
                      <HStack spacing={200}>
                        <VStack>
                          <Stack direction={["column", "row"]}>
                            <Box>
                              <Image
                                width={8}
                                src="https://envoy.com/images/icons/products/visitors-app.png"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Visitors</Heading>
                            </Box>
                          </Stack>
                          <Stack direction={["column", "row"]}>
                            <Box>
                              <Image
                                width={8}
                                src="https://envoy.com/images/icons/products/desks-app.png"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Desks</Heading>
                            </Box>
                          </Stack>
                          <Stack direction={["column", "row"]}>
                            <Box>
                              <Image
                                width={8}
                                src="https://envoy.com/images/icons/products/deliveries-app.png"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Deliveries</Heading>
                            </Box>
                          </Stack>
                        </VStack>
                        <VStack>
                          <Stack direction={["column", "row"]}>
                            <Box>
                              <Image
                                width={8}
                                src="https://envoy.com/images/icons/products/protect-app.png"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Protect</Heading>
                            </Box>
                          </Stack>
                          <Stack direction={["column", "row"]}>
                            <Box>
                              <Image
                                width={8}
                                src="https://envoy.com/images/icons/products/rooms-app.png"
                                alt=""
                              />
                            </Box>
                            <Box>
                              <Heading fontSize={15}>Rooms</Heading>
                            </Box>
                          </Stack>
                        </VStack>
                      </HStack>
                    </Box>
                    <Text mt={18}>Platform</Text>
                    <Box>
                      <HStack spacing={300}>
                        <Stack direction={["column", "row"]}>
                          <Box>
                            <Image
                              width={8}
                              src="https://envoy.com/images/icons/24px/red/iphone.svg"
                              alt=""
                            />
                          </Box>
                          <Box>
                            <Heading fontSize={15}>Mobile</Heading>
                          </Box>
                        </Stack>
                        <Stack direction={["column", "row"]}>
                          <Box>
                            <Image
                              width={8}
                              src="https://envoy.com/images/icons/24px/red/integrations.svg"
                              alt=""
                            />
                          </Box>
                          <Box>
                            <Heading fontSize={15}>Integration</Heading>
                          </Box>
                        </Stack>
                      </HStack>
                    </Box>
                    <Text mt={18}>Solution</Text>
                    <Box>
                      <Stack direction={["column", "row"]} mt={2}>
                        <Box>
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/globe.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Hybrid work</Heading>
                        </Box>
                      </Stack>
                      <Stack direction={["column", "row"]} mt={3}>
                        <Box>
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/office.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Support enterprise</Heading>
                        </Box>
                      </Stack>
                      <Stack direction={["column", "row"]} mt={3}>
                        <Box>
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/shield.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Enhance Security</Heading>
                        </Box>
                      </Stack>
                      <Stack direction={["column", "row"]} mt={3}>
                        <Box>
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/rooms.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Space management</Heading>
                        </Box>
                      </Stack>
                      <Stack direction={["column", "row"]} mt={3}>
                        <Box>
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/pulse.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>
                            Workplace health and safety
                          </Heading>
                        </Box>
                      </Stack>
                      <Stack direction={["column", "row"]} mt={3}>
                        <Box>
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/16px/red/sparkles.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>Workplace experience</Heading>
                        </Box>
                      </Stack>
                      <Stack direction={["column", "row"]} mt={3}>
                        <Box>
                          <Image
                            width={8}
                            src="https://envoy.com/images/icons/24px/red/document.svg"
                            alt=""
                          />
                        </Box>
                        <Box>
                          <Heading fontSize={15}>
                            Meet compliance requirements
                          </Heading>
                        </Box>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </DrawerContent>
            </Drawer>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
