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
import Image from "next/image";
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
          <div className="w-2/3 h-full mx-auto">
            <Image
              src={photo_url}
              className="mx-auto"
              alt={author_name}
              width={450}
              height={450}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
