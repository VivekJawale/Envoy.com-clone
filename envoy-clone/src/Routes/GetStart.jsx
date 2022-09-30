import React from "react";
import {
  Box,
  Center,
  HStack,
  Image,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const GetStart = () => {
  React.useEffect(() => {
    document.title = "Create your company’s Envoy account | Envoy";
  }, []);
  return (
    <Box bgColor="#f6f6f9">
      <Box p={3}>
        <NavLink to="/">
          <Image
            width={120}
            src="https://dashboard.envoy.com/assets/images/logo-4809021238a48b1c2864cdba71564128.svg"
            alt="home"
          />
        </NavLink>

        <Center mt={20}>
          <HStack gap={50} maxWidth="80%">
            <Box bgColor="#fff" p={10}>
              <Heading fontSize="18px" color="#3F4450" >Create your Envoy account</Heading>
              <FormControl isRequired>
                <FormLabel fontSize="14px" color="#717684"  mt="20px">Email</FormLabel>
                <Input placeholder="" />

                <HStack>
                  <VStack>
                    <Box>
                      <FormLabel fontSize="14px" color="#717684"  mt="20px">First name</FormLabel>
                      <Input placeholder="" />
                    </Box>
                  </VStack>
                  <VStack>
                    <Box>
                      <FormLabel fontSize="14px" color="#717684"  mt="20px">Last name</FormLabel>
                      <Input placeholder="" />
                    </Box>
                  </VStack>
                </HStack>

                <FormLabel fontSize="14px" color="#717684"  mt="20px">Phone number</FormLabel>
                <Input placeholder="" />

                <FormLabel fontSize="14px" color="#717684"  mt="20px">Create password </FormLabel>
                <Input placeholder="" />
                
              </FormControl>
              <Heading fontSize="12px" color="#717684"  mt="20px">Password must be at least 8 characters and contain at least one capital letter, one lower case letter, and one number.</Heading>
              <HStack mt="20px">
                <Heading fontSize="12px" color="#717684">By clicking "Next" you agree to our </Heading>
                <Heading fontSize="12px" color="#007BC2">Terms of Service, Privacy Policy</Heading>
                <Heading fontSize="12px" color="#717684">, and to receive marketing </Heading>
              </HStack>

              <Heading fontSize="12px" color="#717684">communications from Envoy .</Heading>
              <Button ml="80%" bgColor="#FA4338" color="#fff" fontSize="16px" mt={10}>Next <Image src="https://signup.envoy.com/assets/images/carat-right.svg"  alt=""/></Button>
            </Box>
            <Box display={{sm:"none" , lg:"block"}} margin="auto">
              <Box>
                <Heading fontSize="32px">Envoy saves</Heading>
                <Heading fontSize="32px">administrators</Heading>
                <Heading fontSize="32px">an average of</Heading>
                <Heading fontSize="32px" color="#FA4338">100 hours</Heading>
                <Heading fontSize="32px">per year</Heading>
              </Box>
            </Box>
          </HStack>
        </Center>
      </Box>
    </Box>
  );
};

export default GetStart;