import React from "react";
import { Box, Image, Heading, Center, Button , Text} from "@chakra-ui/react";

const Hiring = () => {

  React.useEffect(() => {
    document.title = "Careers | Envoy"
  }, [])
  
  return (
    <Box>
      <Image src="https://envoy.com/images/jobs/hero-desktop.svg" alt="" />
      <Center position="absolute" top="150px" right="28%">
        <Box>
          <Center>
            <Heading fontSize="56px" color="#3F4450">
              Let's work together
            </Heading>
          </Center>
          <Center mt={3}>
            <Text fontSize="18px" color="#717684">
              Envoy is home to dreamers and doers who are building
            </Text>
          </Center>
          <Center>
            <Text fontSize="18px" color="#717684">
              seamless solutions for workplace admins, employees,
            </Text>
          </Center>
          <Center>
            <Text fontSize="18px" color="#717684">
              and visitors around the world. Join us in our mission to
            </Text>
          </Center>
          <Center>
            <Text fontSize="18px" color="#717684">
              make workplaces work better.
            </Text>
          </Center>

          <Center mt={10}>
            <Button bgColor="red" color="#fff" aline>
              Find your career ↓
            </Button>
          </Center>
        </Box>
      </Center>
    </Box>
  );
};

export default Hiring;