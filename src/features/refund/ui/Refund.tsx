import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons"
import { Button, Flex, Input, useDisclosure } from "@chakra-ui/react"
import { useState } from "react";

export const Refund = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [amount, setAmount] = useState<number | ''>('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value))
    }
 
    return <Flex w='100%'>  
        <Flex direction='column'>

            <Flex alignItems='center' w='100%'>
                Добавить возврат
                <Button bg='none' _hover={{}} _active={{}} onClick={isOpen ? onClose : onOpen}>
                    {isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
                </Button>

            </Flex>
            {isOpen ? <Input type='number' value={amount} onChange={onChange} /> : null}

        </Flex>

    </Flex>
}