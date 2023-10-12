import { v4 as uuidv4 } from 'uuid';
import { Button, Flex,  Input, useDisclosure, useToast } from '@chakra-ui/react'
import { useState } from 'react';

import { CloseIcon } from '@chakra-ui/icons';
import { Market } from '@shared/lib/types';
import { marketNameError } from '@shared/errors/errors';
import { SendMarketsModal } from '@shared/modals/ui/SendMarketsModal';




export const Markets = () => { 
    const [allMarkets, setAllMarkets] = useState<Market[]>([]);
    const [market, setMarket] = useState<string | undefined | ''>('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const getData = async () => {
        // const resourcePath = await resolveResource('res/db.json')
        // const langDe = JSON.parse(await readTextFile(resourcePath))
        // console.log(langDe.hello)
    } 

    const marketNames = allMarkets.map(market => {return market.name!})
    const toast = useToast();

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') {
            return
        }
        setMarket(e.target.value)
    }

    const onKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
          onAddMarket()
        }
    }

    const onAddMarket = () => {
        if(!market) return toast({render: () => marketNameError, isClosable: true, duration: 3000})
        let updatedMarkets: Market[] = [...allMarkets ?? []]
        updatedMarkets = [...updatedMarkets, {id: uuidv4(), name: market, inn: ''}]
        setAllMarkets(updatedMarkets)
        setMarket('')
    } 

    const onDeleteMarket = (id: string) => {
        const newMarkets = [...allMarkets].filter(market => market.id !== id)
        console.log(newMarkets)
        setAllMarkets(newMarkets)
    }
 
    return <>
        <Flex direction={'column'} >
            <Flex columnGap={3} mb={3}>
                <Input variant='outline' w='50%' borderColor={'blackAlpha.800'} value={market} onChange={onChangeValue} onKeyDown={onKeyPress}/>
                <Button onClick={onAddMarket} >Добавить</Button> 
                <Button isDisabled={allMarkets.length === 0} colorScheme='teal' onClick={onOpen}>Сохранить</Button>

            </Flex>

            <Flex direction={'column'} rowGap={1}>
                {allMarkets.length > 0 ? allMarkets.map((market) => (
                    <Flex key={market.id} alignItems='center' w='100%' borderWidth={1} borderRadius={15} p={2} justifyContent='space-between'>
                        <Flex w='70%'>{market.name}</Flex>
                        
                        <Button onClick={() => onDeleteMarket(market.id)}>
                            <CloseIcon />
                        </Button>
                    </Flex>
                )) : <Flex mt={10} color='gray.600' w='100%' justifyContent='center'>Добавь магазины</Flex>}
            </Flex> 

            <SendMarketsModal 
                isOpen={isOpen} 
                market={marketNames} 
                onClose={onClose} 
                onSubmit={getData} 
                submitText='Добавить' 
                text={'Хочешь добавить эти магазины?'} 
            />
        </Flex> 
    </>
} 