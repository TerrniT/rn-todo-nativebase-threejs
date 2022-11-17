import React from "react";
import {
  Text,
  Link,
  HStack,
  Heading,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  Box,
  IconButton,
  useColorModeValue,
  Flex,
  Input,
  Button,
} from "native-base";
import Feather from '@expo/vector-icons/Feather';
import { View } from "react-native"

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};


// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const modes = useColorModeValue('purple.400', 'orange.300');
  const scheme = useColorModeValue('purple', 'orange');

  return (
    <NativeBaseProvider theme={theme}>
      <Flex
        _light={{ _text: { color: 'gray.800' }, bg: '#edf6f9' }}
        _dark={{ _text: { color: 'whiteAlpha.900' }, bg: '#151515' }}
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100%"
        fontSize="xl">
        <ToggleDarkMode />
        <Flex p={3} flexDirection="column" alignItems="center">

          {/* <Scene /> */}

          <Heading fontSize={34} fontWeight="700">
            Todo
          </Heading>
          <Link
            alignItems="center"
            href="https://github.com/TerrniT"
            isExternal
          >
            <Text fontSize={22} mr={2}>@terrnit</Text>
          </Link>
          <Flex alignSelf="center">
            <Flex flexDir="column">
              <Flex mt="10%">
                <Input
                  focusBorderColor={modes}
                  placeholder="Add task"
                />
                <Button ml={5} bg={modes}>
                  Add Task
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </NativeBaseProvider >
  );
}


const FaMoon = () => {
  return (
    <View >
      <Feather name="moon" size={32} />
    </View>
  )
}


const FaSun = () => {
  return (
    <View >
      <Feather name="sun" size={32} />
    </View>
  )
}

// Color Switch Component
function ToggleDarkMode() {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const text = useColorModeValue('dark', 'light');
  const buttonBg = useColorModeValue('purple.400', 'orange.100');

  return (
    <HStack space={2} alignItems="center">
      <IconButton
        size="md"
        fontSize="lg"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="black"
        bg={buttonBg}
        marginLeft="2"
        onPress={toggleColorMode}
        icon={<SwitchIcon />}
      />
    </HStack>
  );
}
