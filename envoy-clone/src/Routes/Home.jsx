import React, { useEffect } from "react";
import homelogo from "../Pictures/homelogo.png"
import {
  Container,
  Box,
  Heading,
  Text,
  Image,
  Input,
  Button,
  HStack,
  SimpleGrid,
  Stack,
  Center,
  Flex,
} from "@chakra-ui/react";

const Home = () => {
  useEffect(() => {
    document.title = "Envoy Visitors, Protect, Desks, Rooms and Deliveries | Envoy";
  }, []);

  return (
    <Box bgColor="#f6f6f9 ">
      <Image
        width="100%"
        height="100%"
        src={homelogo}
        alt=""
      />
      <Container position="absolute" top="230px" right="45%" bgColor="white" p={10}>
        <Box>
          <Heading fontSize="36px" color="#3F4450">
            Welcome to the
          </Heading>
          <Heading fontSize="36px" color="#3F4450">
            flexible workplace
          </Heading>
          <Heading fontSize="36px" color="#3F4450">
            platform
          </Heading>
        </Box>
        <Box>
          <Text fontSize="14px" color="#868D9D">
            Join thousands of companies that rely on Envoy to
          </Text>
          <Text fontSize="14px" color="#868D9D">
            manage safe hybrid workplaces, so everyone inside can
          </Text>
          <Text fontSize="14px" color="#868D9D">
            connect, collaborate, and thrive.
          </Text>
          <Input width={200} placeholder="Enter your email" mt={3} />
          <Button ml={10} bgColor="red" color="white" > Get started </Button>

          <HStack mt={4}>
            <Heading fontSize="14px" color="#868D9D">
              Talk to our sales team.
            </Heading>
            <Heading fontSize="14px" color="red">
              Contact us
            </Heading>
          </HStack>
        </Box>
      </Container>
      <SimpleGrid width="100%" bgColor="#b5e0ec">
        <Image
          height="400px"
          src="https://envoy.com/images/home/banner-image-large.svg"
          alt=""
        />
        <Box position="absolute" top="950px" left="30px">
          <Heading color="#4141A2">Let's go to work</Heading>
          <Box mt={5}>
            <Heading fontSize={15} color="#4141A2">
              Don’t let hybrid work get in the way of working together. Give
            </Heading>
            <Heading fontSize={15} color="#4141A2">
              employees an easy way to manage their hybrid schedule,
            </Heading>
            <Heading fontSize={15} color="#4141A2">
              invite co-workers onsite, and book a nearby desk.
            </Heading>
          </Box>
          <Button mt={10} bgColor="#4141A2" color="#FFFFFF">
            Learn more
          </Button>
        </Box>
      </SimpleGrid>

      <SimpleGrid columns={[1, 2, 3]} spacing="40px" p={90}>
        <Box>
          <Stack direction={["column", "row"]} spacing="20px" mb={5}>
            <Box>
              <Image
                width={8}
                src="https://envoy.com/images/icons/products/protect-app.png"
                alt=""
              />
            </Box>
            <Box>
              <Heading fontSize="24px">Protect</Heading>
            </Box>
          </Stack>

          <Text fontSize="16px">Manage hybrid schedules and keep</Text>
          <Text fontSize="16px">employees safe.</Text>
          <HStack mt={5}>
            <Heading fontSize="16px" color="red">
              Learn more
            </Heading>
            <Heading fontSize="16px">|</Heading>
            <Heading fontSize="16px" color="red">
              Watch the video
            </Heading>
          </HStack>
        </Box>
        <Box>
          <Stack direction={["column", "row"]} spacing="20px" mb={5}>
            <Box>
              <Image
                width={8}
                src="https://envoy.com/images/icons/products/visitors-app.png"
                alt=""
              />
            </Box>
            <Box>
              <Heading fontSize="24px">Visitors</Heading>
            </Box>
          </Stack>

          <Text fontSize="16px">Welcome guests while keeping people,</Text>
          <Text fontSize="16px">property, and ideas safe.</Text>
          <HStack mt={5}>
            <Heading fontSize="16px" color="red">
              Learn more
            </Heading>
            <Heading fontSize="16px">|</Heading>
            <Heading fontSize="16px" color="red">
              Watch the video
            </Heading>
          </HStack>
        </Box>
        <Box>
          <Stack direction={["column", "row"]} spacing="20px" mb={5}>
            <Box>
              <Image
                width={8}
                src="https://envoy.com/images/icons/products/desks-app.png"
                alt=""
              />
            </Box>
            <Box>
              <Heading fontSize="24px">Desks</Heading>
            </Box>
          </Stack>

          <Text fontSize="16px">Empower employees to reserve a desk</Text>
          <Text fontSize="16px">in the workplace.</Text>
          <HStack mt={5}>
            <Heading fontSize="16px" color="red">
              Learn more
            </Heading>
            <Heading fontSize="16px">|</Heading>
            <Heading fontSize="16px" color="red">
              Watch the video
            </Heading>
          </HStack>
        </Box>
        <Box>
          <Stack direction={["column", "row"]} spacing="20px" mb={5}>
            <Box>
              <Image
                width={8}
                src="https://envoy.com/images/icons/products/rooms-app.png"
                alt=""
              />
            </Box>
            <Box>
              <Heading fontSize="24px">Rooms</Heading>
            </Box>
          </Stack>

          <Text fontSize="16px">Easily book rooms for collaboration</Text>
          <Text fontSize="16px">and free up unused space.</Text>
          <HStack mt={5}>
            <Heading fontSize="16px" color="red">
              Learn more
            </Heading>
            <Heading fontSize="16px">|</Heading>
            <Heading fontSize="16px" color="red">
              Watch the video
            </Heading>
          </HStack>
        </Box>
        <Box>
          <Stack direction={["column", "row"]} spacing="20px" mb={5}>
            <Box>
              <Image
                width={8}
                src="https://envoy.com/images/icons/products/deliveries-app.png"
                alt=""
              />
            </Box>
            <Box>
              <Heading fontSize="24px">Deliveries</Heading>
            </Box>
          </Stack>

          <Text fontSize="16px">Declutter the mailroom by prompting</Text>
          <Text fontSize="16px">package pickup.</Text>
          <HStack mt={5}>
            <Heading fontSize="16px" color="red">
              Learn more
            </Heading>
            <Heading fontSize="16px">|</Heading>
            <Heading fontSize="16px" color="red">
              Watch the video
            </Heading>
          </HStack>
        </Box>

        <Box>
          <Heading fontSize="30px">Envoy's workplace</Heading>
          <Heading fontSize="30px">platform</Heading>
        </Box>
      </SimpleGrid>
      <Center>
        <Image
          src="https://envoy.com/images/home/lionsgate-interstitial.jpg"
          alt=""
        />

        <Box position="absolute" top="310vh">
          <Heading textAlign="center" color="white" mb={1}>
            How Lionsgate is setting up their flexible
          </Heading>
          <Heading textAlign="center" color="white" mb={10}>
            workplace with Envoy Desks
          </Heading>
          <a href="https://envoy.com/#desks">
            <Image
              ml="50%"
              src="https://envoy.com/images/icons/play-icon-freckle.svg"
            />
          </a>
        </Box>
      </Center>
      <Center height="100vh">
        <Box pl={250} pr={250} pt={50} pb={50}>
          <Heading textAlign="center" fontSize="36px" color="#4141A2">
            The enterprise-grade workplace platform
          </Heading>

          <Text textAlign="center" fontSize="18px" color="#868D9D">
            Solve workplace challenges faster with the platform that keeps
            employees and visitors safe, while ensuring your business stays
            compliant and secure.
          </Text>
          <Button ml="40%" mt="50px" bgColor="#4141A2">
            Learn more
          </Button>
        </Box>
      </Center>
      <Box p={10}>
        <Heading fontSize="14px" color="#868D9D">
          THE ENVOY BLOG
        </Heading>
        <Heading fontSize="40px" color="#3F4450">
          Best practices
        </Heading>
        <Heading fontSize="40px" color="#3F4450">
          for productive workplaces
        </Heading>
      </Box>
      <Box>
        <SimpleGrid columns={[1, 1, 3]} spacing="20px" p={10}>
          <Box width="99%">
            <Image
              src="https://envoy.com/images/featured-content/Blog-feature-What-is-workplace-experience..png"
              alt=""
            />
            <Heading height="70px" fontSize="20px" color="#3F4450">
              What is workplace experience and why is it important?
            </Heading>
            <Text fontSize="16px" color="#717684">
              Learn how to create a great workplace experience that makes your
              employees happy and drives better business outcomes.
            </Text>
          </Box>
          <Box width="99%">
            <Image
              src="https://envoy.com/images/featured-content/Blog-feature-what-is-hyrbrid-refresh.png"
              alt=""
            />
            <Heading height="70px" fontSize="20px" color="#3F4450">
              The enterprise guide to workplace compliance
            </Heading>
            <Text fontSize="16px" color="#717684">
              In this ebook, we’ll show you what the compliance ecosystem looks
              like today so you can begin building an enterprise-wide compliance
              culture.
            </Text>
          </Box>
          <Box width="99%">
            <Image
              src="https://envoy.com/images/featured-content/Compliance-ebook-feature.png"
              alt=""
            />
            <Heading height="70px" fontSize="20px" color="#3F4450">
              What is hybrid work and why do employees want it?
            </Heading>
            <Text fontSize="16px" color="#717684">
              In this post, we’ll explore the value of hybrid work and the steps
              you can take to ensure your employees transition to a hybrid
              workplace smoothly.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
      <Box bgColor="red">
        <SimpleGrid columns={[1, 1, 2]} spacing="20px" p={10}>
          <Box width="100%">
            <Heading fontSize="70px" color="#FEB0C5">
              Great minds think differently.
            </Heading>
            <Heading fontSize="24px" color="#FEBOC5">
              Companies of every size, industry, and address rely on Envoy to
              transform their workplaces.
            </Heading>
            <Heading
              fontSize="20px"
              color="white"
              mt={100}
              border="1px solid #4141A1"
              width="220px"
              height="auto"
              p={4}
              bgColor="#4141A1"
            >
              Read all the stories
            </Heading>
          </Box>
          <Box width="100%">
            <SimpleGrid columns={2} spacing="10px">
              <Box
                border="1px"
                bgColor="white"
                borderColor="white"
                width="200px"
                heighat="auto"
                margin="auto"
                p={5}
              >
                <Image
                  width={8}
                  mb="20px"
                  src="https://envoy.com/images/home/case-study-icons/lionsgate.svg"
                  alt=""
                />
                <Heading mb="20px" fontSize="18px">
                  Lionsgate
                </Heading>
                <Heading mb="20px" fontSize="16px">
                  Adopting hybrid work to keep work entertaining.
                </Heading>
                <Heading fontSize="16px" color="red">
                  Lights, camera, action
                </Heading>
              </Box>

              <Box width="100%">
                <SimpleGrid columns={[2, 2, 1]} spacing="10px">
                  <Box
                    border="1px"
                    bgColor="white"
                    borderColor="white"
                    width="200px"
                    height="auto"
                    p={5}
                  >
                    <Image
                      width={8}
                      mb="20px"
                      src="https://envoy.com/images/home/case-study-icons/buzzfeed.svg"
                      alt=""
                    />
                    <Heading mb="20px" fontSize="18px">
                      BuzzFeed
                    </Heading>
                    <Heading mb="20px" fontSize="16px">
                      A newsworthy plan to welcome people back safely.
                    </Heading>
                    <Heading fontSize="16px" color="white" borderColor="white">
                      See what the buzz is about
                    </Heading>
                  </Box>
                  <Box
                    border="1px"
                    bgColor="white"
                    borderColor="white"
                    width="200px"
                    height="auto"
                    p={5}
                  >
                    <Image
                      width={8}
                      mb="20px"
                      src="https://envoy.com/images/case-studies/jamf/jamf-icon.png"
                      alt=""
                    />
                    <Heading mb="20px" fontSize="18px">
                      Jamf
                    </Heading>
                    <Heading mb="20px" fontSize="16px">
                      Pairing safety with great experiences.
                    </Heading>
                    <Heading fontSize="16px" color="red">
                      That's my jam
                    </Heading>
                  </Box>
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
        <hr></hr>
        <Image
          src="https://envoy.com/images/logos/home-logos.svg"
          alt=""
          p={10}
        />
      </Box>
      <Center mt={100}>
        <Box maxW={500}>
          <Heading fontSize="40px" color="#3F4450">
            Meet the technology powering the workplace—wherever that may be
          </Heading>
          <Heading fontSize="16px" color="#3F4450" mt={10}>
            Envoy’s platform and partners help get people back to the workplace
            faster and safer. Connect with out-of-the-box integrations for your
            every need—or use our simple API for everything else.
          </Heading>
          <Flex justifyContent="center" gap="10px" mt={10}>
            <Box border="1px solid red" p={2} color="white" bgColor="red">
              <Text fontSize="16px">Explore integrations</Text>
            </Box>
            <Box border="1px solid white" p={2} color="red" bgColor="white">
              <Text fontSize="16px">Build your own</Text>
            </Box>
          </Flex>
        </Box>
      </Center>
      <SimpleGrid columns={[2, 2, 4]} spacing="10px" p={10}>
        <Box p={5} bgColor="#fff">
          <Image
            width={8}
            src="https://envoy.com/images/integrations/slack.svg"
            alt=""
          />
          <Heading color="#3F4450" fontSize="18px" mt={5}>
            Slack
          </Heading>
          <Text color="#3F4450" fontSize="16px" mt={5}>
            Instantly notify employees of every Envoy update directly or in
            specific channels on Slack.
          </Text>
        </Box>
        <Box p={5} bgColor="#fff">
          <Image
            width={8}
            src="https://envoy.com/images/integrations/aruba.svg"
            alt=""
          />
          <Heading color="#3F4450" fontSize="18px" mt={5}>
            Aruba Clearpass
          </Heading>
          <Text color="#3F4450" fontSize="16px" mt={5}>
            Provision unique Wi-Fi network and password details for each Envoy
            visitor.
          </Text>
        </Box>
        <Box p={5} bgColor="#fff">
          <Image
            width={8}
            src="https://envoy.com/images/integrations/okta.png"
            alt=""
          />
          <Heading color="#3F4450" fontSize="18px" mt={5}>
            Okta
          </Heading>
          <Text color="#3F4450" fontSize="16px" mt={5}>
            Easily sync employee details from Okta to the Envoy employee
            directory.
          </Text>
        </Box>
        <Box p={5} bgColor="#fff">
          <Image
            width={8}
            src="https://envoy.com/images/integrations/microsoft-teams.svg"
            alt=""
          />
          <Heading color="#3F4450" fontSize="18px" mt={5}>
            Microsoft Teams
          </Heading>
          <Text color="#3F4450" fontSize="16px" mt={5}>
            Automatically notify employees through a private message for every
            Envoy update.
          </Text>
        </Box>
        <Box p={5} bgColor="#fff">
          <Image
            width={8}
            src="https://envoy.com/images/integrations/docusign-square.svg"
            alt=""
          />
          <Heading color="#3F4450" fontSize="18px" mt={5}>
            Docusign
          </Heading>
          <Text color="#3F4450" fontSize="16px" mt={5}>
            Automatically send visitors documents to sign via DocuSign.
          </Text>
        </Box>
        <Box p={5} bgColor="#fff">
          <Image
            width={8}
            src="https://envoy.com/images/integrations/eventbrite.png"
            alt=""
          />
          <Heading color="#3F4450" fontSize="18px" mt={5}>
            Eventbrite
          </Heading>
          <Text color="#3F4450" fontSize="16px" mt={5}>
            Simplify event sign-in by importing Eventbrite attendees into Envoy.
          </Text>
        </Box>
        <Box p={5} bgColor="#fff">
          <Image
            width={8}
            src="https://envoy.com/images/integrations/g-suite.png"
            alt=""
          />
          <Heading color="#3F4450" fontSize="18px" mt={5}>
            Google Drive
          </Heading>
          <Text color="#3F4450" fontSize="16px" mt={5}>
            Connect any Google Drive account to easily store signed legal
            documents.
          </Text>
        </Box>
        <Box p={5} bgColor="#fff">
          <Image
            width={8}
            src="https://envoy.com/images/integrations/openpath-o.svg"
            alt=""
          />
          <Heading color="#3F4450" fontSize="18px" mt={5}>
            Openpath
          </Heading>
          <Text color="#3F4450" fontSize="16px" mt={5}>
            Manage building access for employees and visitors from anywhere.
          </Text>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={[1, null, 2]} spacing={100} p={10}>
        <Box>
          <Heading fontSize="38px" color="#FA4338">
            Try Envoy for free
          </Heading>
          <Heading fontSize="15px" color="#3F4450">
            Transforming your workplace is easier than you think. Get started in
            minutes.
          </Heading>
        </Box>
        <HStack>
          <Input
            color="F6F6F9"
            placeholder="Enter your email"
            width={300}
            mr={5}
          />
          
          <Button bgColor="#FB4338" color="#fff">
            Get started
          </Button>
        </HStack>
      </SimpleGrid>
      <hr />
      <HStack p={10} >
        <Image src="https://envoy.com/images/icons/phone-solid.svg" alt="" />
        <Text fontSize="18px" color="#3F4450">
          Contact our sales team today at
        </Text>
        <Text fontSize="18px" color="#EF3934">
          (877) 652-2808
        </Text>
      </HStack>
      <hr />
    </Box>
  );
};

export default Home;