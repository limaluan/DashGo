import { Button } from "@chakra-ui/react";

interface IPaginationItemsProps {
  isCurrent?: boolean;
  number: number;
}

export default function PaginationItem({
  number,
  isCurrent = false,
}: IPaginationItemsProps) {
  if (isCurrent) {
    return (
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
        {number}
      </Button>
    );
  }

  return (
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
      {number}
    </Button>
  );
}
