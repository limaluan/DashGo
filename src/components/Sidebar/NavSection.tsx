import { Stack, Text, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ISectionProps {
  title: string;
  children: ReactNode;
}

export default function NavSection({ title, children }: ISectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {title.toUpperCase()}
      </Text>

      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
