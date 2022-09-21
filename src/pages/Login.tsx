import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { PrimaryButton } from "../components/atoms/PrimaryButton";
import { useAuth } from "../hooks/useAuth";

export const Login: FC = memo(() => {
  const { login, loading } = useAuth();
  const [usrId, setUsrId] = useState("");
  const onChangeUserId = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setUsrId(e.target.value),
    []
  );

  const onClickLogin = useCallback(() => login(usrId), [login, usrId]);
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザー管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={6} py={4} px={10}>
          <Input
            placeholder="ユーザーID"
            value={usrId}
            onChange={onChangeUserId}
          />
          <PrimaryButton
            disabled={usrId === ""}
            loading={loading}
            onClick={onClickLogin}
          >
            ログイン
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
