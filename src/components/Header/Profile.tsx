import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Luan Lima</Text>
        <Text color="gray.300" fontSize="small">
          limaluan.dev@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Luan Lima"
        src="https://github.com/limaluan.png"
      />
    </Flex>
  );
}
