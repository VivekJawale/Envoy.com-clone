import React, { useEffect } from "react";

import {
  Center,
  Box,
  Image,
  Heading,
  Text,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    document.title = "Log in to Envoy";
  }, []);

  return (
    <Center bgColor="#f6f6f9 ">
      <VStack maxW={700} pb={20}>
        <Box textAlign="center" pt={20} mb="40px">
          
          <NavLink to="/">
            <Image
              pt={20}
              width={120}
              src="https://dashboard.envoy.com/assets/images/logo-4809021238a48b1c2864cdba71564128.svg"
              alt=""
            />
          </NavLink>
        </Box>
        <Box textAlign="center" bgColor="white" p={10} >
          <Heading fontSize={20} color="#3F4450">
            Log in to the Envoy dashboard
          </Heading>
          <Box>
            <Text textAlign="left" pt={30} color="#3F4450">
              Company email address
            </Text>
            <Input placeholder="email address" type="email" />
            <Button
              mt={5}
              size="md"
              height="48px"
              width="100%"
              background="red"
            >
              Button
            </Button>
          </Box>
          <Text color="#3F4450" pt={10}>
            Forgot your password?
          </Text>
        </Box>
      </VStack>
    </Center>
  );
};

export default Login;