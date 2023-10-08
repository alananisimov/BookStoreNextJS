import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function PhotoPreview({
  photo_url,
  author_name,
  isOpen,
  onOpen,
  onClose,
}: {
  photo_url: string;
  author_name: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{author_name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="w-full h-full">
            <img src={photo_url} className="mx-auto" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
