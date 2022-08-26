import { Flex, Avatar, Box, Text } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: IProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luan Lima</Text>
          <Text color="gray.300" fontSize="small">
            limaluan.dev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Luan Lima"
        src="https://github.com/limaluan.png"
      />
    </Flex>
  );
}
