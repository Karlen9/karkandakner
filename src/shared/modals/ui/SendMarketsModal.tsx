import { 
    Button, 
    Flex, 
    Modal, 
    ModalBody, 
    ModalCloseButton, 
    ModalContent, 
    ModalFooter, 
    ModalHeader, 
    ModalOverlay 
} from "@chakra-ui/react"

interface Props {
    isOpen: boolean
    onClose: () => void
    text?: string
    submitText?: string
    onSubmit?: (item: string[]) => void
    market?: string[]
}


export const SendMarketsModal = (props: Props) => {
    const { isOpen, onClose, text, submitText, onSubmit, market } = props

    const placeholder = 'Вы уверены, что хотите отправить магазины?'

    return <Flex>
        <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color='black'>
          <ModalHeader>Точно?</ModalHeader>
          <ModalCloseButton />
          <ModalBody> 
            {text ?? placeholder}
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Отмена
            </Button>
            <Button onClick={() => onSubmit && onSubmit(market ?? [''])} colorScheme="teal">{`${submitText ?? `Отправить `}`}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
}