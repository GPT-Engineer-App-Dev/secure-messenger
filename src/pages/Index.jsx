import { Box, Button, Input, VStack, Text, Switch, FormControl, FormLabel, useToast } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const toast = useToast();

  const sendMessage = () => {
    if (message.trim() === "") {
      toast({
        title: "Cannot send an empty message.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setMessages([...messages, { text: message, private: privacy }]);
    setMessage("");
  };

  const togglePrivacy = () => {
    setPrivacy(!privacy);
  };

  return (
    <Box p={4} maxW="container.md" mx="auto">
      <VStack spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Privacy Messaging App</Text>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="privacy-switch" mb="0">
            Private Message
          </FormLabel>
          <Switch id="privacy-switch" isChecked={privacy} onChange={togglePrivacy} />
        </FormControl>
        <Input
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button colorScheme="blue" onClick={sendMessage}>Send Message</Button>
        <VStack spacing={2} align="stretch" w="full">
          {messages.map((msg, index) => (
            <Box key={index} p={3} bg={msg.private ? "blue.100" : "gray.100"}>
              {msg.text}
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
};

export default Index;