import React from "react";
import {
  SimpleGrid,
  Box,
  VStack,
  Heading,
  Grid,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <Box p={3}>
      <Grid templateColumns="repeat(1, 400px">
        <SimpleGrid columns={[2, null, 4]}>
          <Box>
            <VStack gap={1}>
              <Box>
                <Heading color="#3F4450" fontSize="14px">
                  Products
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Protect
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Desks
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Visitors
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Rooms
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Deliveries
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Mobile
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Integrations
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Partnerships
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Pricing
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Get a quote
                </Heading>
              </Box>
            </VStack>
          </Box>

          <Box>
            <VStack gap={1}>
              <Box>
                <Heading color="#3F4450" fontSize="14px">
                  Solutions
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Hybrid work
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Enterprise
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Security
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Space management
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Health and safety
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Health and safety
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Compliance
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Touchless sign-in
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Access control
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Efficiency
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Experience
                </Heading>
              </Box>
            </VStack>
          </Box>

          <Box>
            <VStack gap={1}>
              <Box>
                <Heading color="#3F4450" fontSize="14px">
                  Resources
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Hybrid work resource hub
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Help center
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Help center
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Envoy Store
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Customer stories
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Demo
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Compliance tips
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Developers
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Glossary
                </Heading>
              </Box>
            </VStack>
          </Box>

          <Box>
            <VStack gap={1}>
              <Box>
                <Heading color="#3F4450" fontSize="14px">
                  Company
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  About Envoy
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Vision
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Jobs
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Blog
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Data security
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Press
                </Heading>
              </Box>
              <Box>
                <Heading color="#868D9D" fontSize="14px">
                  Partner
                </Heading>
              </Box>
            </VStack>
          </Box>
        </SimpleGrid>
      </Grid>

      <Flex mt={150} justifyContent="space-between">
        <HStack gap="3">
          <Box>
            <Heading color="#868D9D" fontSize="14px">
              Contact
            </Heading>
          </Box>
          <Box>
            <Heading color="#868D9D" fontSize="14px">
              Status{" "}
            </Heading>
          </Box>
          <Box>
            <Heading color="#868D9D" fontSize="14px">
              Terms of Service
            </Heading>
          </Box>
          <Box>
            <Heading color="#868D9D" fontSize="14px">
              Privacy Policy
            </Heading>
          </Box>
        </HStack>

        <HStack gap="3">
          <Box>
            <FaFacebookF color="#868D9D" />
          </Box>
          <Box>
            <ImTwitter color="#868D9D" />
          </Box>
          <Box>
            <FaLinkedinIn color="#868D9D"  />
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Footer;