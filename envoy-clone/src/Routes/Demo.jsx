import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  HStack,
  Input,
  Button,
  Image,
  Text,
  Center,
  FormControl,
  FormLabel,
  Select
} from "@chakra-ui/react";

const Demo = () => {
  React.useEffect(() => {
    document.title = "Envoy Demo | Envoy";
  }, []);

  return (
    <Box bgColor="#f6f6f9">
      <Box pt="7rem">
        <Center>
          <Heading fontSize="48px" color="#3F4450">
            Envoy’s workplace platform
          </Heading>
        </Center>
        <Center>
          <Heading fontSize="48px" color="#3F4450">
            keeps your office in motion
          </Heading>
        </Center>
        <Center mt={2}>
          <Heading fontSize="24px" color="#868D9D">
            From visitors to conference rooms, Envoy keeps your
          </Heading>
        </Center>
        <Center>
          <Heading fontSize="24px" color="#868D9D">
            workplace safe, healthy, and productive. Check out our
          </Heading>
        </Center>
        <Center>
          <Heading fontSize="24px" color="#868D9D">
            demo to learn more!
          </Heading>
        </Center>

        
      </Box>

      <Center mb={20}>
      <FormControl isRequired maxWidth="50%">
        <FormLabel mt="30px" >First name</FormLabel>
        <Input type="text" />
        <FormLabel mt="30px" >Last name</FormLabel>
        <Input type="text" />
        <FormLabel mt="30px" >Email</FormLabel>
        <Input type="email" />
        <FormLabel mt="30px" >Company name</FormLabel>
        <Input type="text" />
        <FormLabel mt="30px" >Phone Number</FormLabel>
        <Input type="number" />
        <FormLabel mt="30px" >Company size</FormLabel>
        <Select placeholder="50 - 250 employees">
          <option value="1-49employees">1-49 employees</option>
          <option value="50-250employees">50-250 employees</option>
          <option value="251-1500employees">251-1500 employees</option>
          <option value="1501-5000employees">1501-5000 employees</option>
          <option value="5001+employees">5001+ employees</option>
        </Select>
        <FormLabel mt="30px" >Region</FormLabel>
        <Select placeholder="Select...">
          <option value="NorthAmerica">North America</option>
          <option value="South/CentralAmerica">South/Central America</option>
          <option value="Europe">Europe</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="MiddleEast">Middle East</option>
          <option value="Australia">Australia</option>
        </Select>
        <HStack mt={3}>
          <Text fontSize="14px" color="#868D9D" >By submitting this form you agree to our </Text>
          <Text fontSize="14px" color="#EF3834" >Terms of Service, Privacy Policy </Text>
          <Text fontSize="14px" color="#868D9D" >, and to </Text>
        </HStack>
        
        <Text fontSize="14px" color="#868D9D" >receive marketing communications from Envoy.</Text>
        <Button bgColor="#EF3834" color="#fff" mt={4} pl={6} pr={6} >View the demo</Button>
      </FormControl>

      </Center>

      <SimpleGrid columns={[1, null, 2]} spacing={100} p={10} bgColor="white">
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
      <HStack p={10} bgColor="white">
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

export default Demo;