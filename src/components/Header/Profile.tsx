import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = false }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme</Text>
          <Text color="gray.300" fontSize="small">
            gulherme@gmar.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Gio;jerm Martins" />
    </Flex>
  );
}
