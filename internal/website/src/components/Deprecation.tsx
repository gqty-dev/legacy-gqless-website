import {
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Text,
  Link,
} from '@chakra-ui/react';
import React from 'react';

function DeprecationModalComponent() {
  const { isOpen, onClose } = useDisclosure({
    defaultIsOpen: true,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl">
      <ModalOverlay />
      <ModalContent fontSize="1.3em">
        <ModalHeader>GQless is now GQty</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="1.5em">
              GQless is not maintained anymore
            </AlertTitle>
            <AlertDescription maxWidth="sm" marginTop="10px">
              <Text>
                The project is being continued and rebranded as{' '}
                <Text as="span" fontWeight="bold">
                  GQty
                </Text>
              </Text>

              <Text>
                You can now visit{' '}
                <Link
                  fontWeight="bold"
                  color="facebook.500"
                  href="https://github.com/gqty-dev/gqty"
                >
                  https://github.com/gqty-dev/gqty
                </Link>{' '}
                or{' '}
                <Link
                  fontWeight="bold"
                  color="facebook.500"
                  href="https://gqty.dev"
                >
                  https://gqty.dev
                </Link>
              </Text>

              <Text>
                You can also join our new <b>Discord</b>:{' '}
                <Link
                  href="https://discord.gg/jktJsaZSmP"
                  fontWeight="bold"
                  color="facebook.500"
                  target="_blank"
                >
                  https://discord.gg/jktJsaZSmP
                </Link>
              </Text>
            </AlertDescription>
          </Alert>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export function DeprecationModal() {
  return (
    <ChakraProvider resetCSS={false}>
      <DeprecationModalComponent />
    </ChakraProvider>
  );
}
