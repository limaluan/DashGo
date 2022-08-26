import { Box, Button, HStack } from "@chakra-ui/react";

export default function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>0</strong> -  <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bgColor: "pink.500",
            cursor: "default",
          }}
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          bgColor="gray.700"
          _hover={{
            bgColor: "gray.500",
          }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          bgColor="gray.700"
          _hover={{
            bgColor: "gray.500",
          }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          bgColor="gray.700"
          _hover={{
            bgColor: "gray.500",
          }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}