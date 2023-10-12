import { 
    Button, 
    Flex, 
    Input, 
    Select, 
    Tooltip, 
    useDisclosure, 
    useToast 
} from "@chakra-ui/react"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { CloseIcon } from "@chakra-ui/icons";
import { amountError, dateError, nameError } from "@shared/errors/errors";
import { Refund } from "@features/refund";
import { Market } from "@shared/lib/types";
import { SendMarketsModal } from "@shared/modals/ui/SendMarketsModal";

const markets = [
    'Юта Седова',
    'Юта 4',
    'Юта 5',
    'Юта Тум',
    'Юта 9',
]

export const Archive = () => {
    const [date, setDate] = useState('')
    const [allMarkets, setAllMarkets] = useState<Market[]>([]);
    const [inputValue, setInputValue] = useState<number | undefined | ''>('')
    const [marketChosen, setMarketChosen] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure()

    const toast = useToast()


    const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => { 
        setDate(e.target.value);
    }

    const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') {
            return
        }
        setInputValue(Number(e.target.value))
    }

    const onKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
          onAddMarket()
        }
    };

    const onAddMarket = () => {
        if(!inputValue) return toast({render: () => amountError, isClosable: true, duration: 3000})
        if(!date) return toast({render: () => dateError, isClosable: true, duration: 3000})
        if(!marketChosen) return toast({render: () => nameError, isClosable: true, duration: 3000})
        let updatedMarkets: Market[] = [...allMarkets ?? []];
        updatedMarkets = [...updatedMarkets, {id: uuidv4(), value: inputValue, inn: '', name: marketChosen, date}];
        setAllMarkets(updatedMarkets);
        setInputValue('')
    } 

    const onDeleteMarket = (id: string) => {
        console.log('lol')
        const newMarkets = [...allMarkets].filter(market => market.id !== id);
        console.log(newMarkets)
        setAllMarkets(newMarkets)
    }

    // const getData = () => {
    //     axios.get('http://192.168.3.37:5000/get').then(res => console.log(res)).catch(err => console.error(err))
        
    // }

   

    return <Flex direction='column' rowGap={5}>
        <Flex>
            <Input type="date" value={date} onChange={onChangeDate} /> 
        </Flex>

        <Flex direction='column' rowGap={7}>
            <Flex columnGap={3}>
                <Input type="number" w={'30%'} value={inputValue} onChange={onChangeValue} onKeyDown={onKeyPress} variant='outline' borderColor={'blackAlpha.800'} />
                <Select value={marketChosen ?? ''} w={'30%'} onChange={(e) => setMarketChosen(e.target.value)}>
                    {markets.map(market => 
                        <option key={market}>{market}</option>    
                    )}
                </Select>
                <Button onClick={onAddMarket}>Добавить</Button> 
                {/* <Button onClick={getData}>get</Button>  */}

                <Tooltip label='Добавь магазины'>
                    <Button isDisabled={allMarkets.length === 0} colorScheme='teal' onClick={onOpen}>Отправить</Button>
                </Tooltip>
            </Flex>

            <Refund /> 

            <Flex direction='column'>
                <Flex  mb='10px' w='100%' fontWeight='bold' justifyContent='space-between'>
                    <Flex>Название</Flex>
                    <Flex>Сумма</Flex>
                    <Flex>Дата</Flex>
                    <Flex w='120px' justifyContent='flex-end'>Удалить</Flex>

                </Flex>

                <Flex direction={'column'} rowGap={1}>
                    {allMarkets.length > 0 ? allMarkets.map((market) => (
                        <Flex key={market.id} alignItems='center' w='100%' borderWidth={1} borderRadius={15} p={2} justifyContent='space-between'>
                            <Flex fontSize={'xl'} fontWeight={'bold'} w='20%'>{market.name}</Flex>
                            <Flex minW='100px' fontSize={'lg'}>{`${market.value}руб`}</Flex>
                            
                            <Flex w={'30%'}>{market.date}</Flex>
                            <Button onClick={() => onDeleteMarket(market.id)}>
                                <CloseIcon />
                            </Button>
                        </Flex>
                    )) : <Flex mt={10} color='gray.600' w='100%' justifyContent='center'>Добавь магазины</Flex>}
                </Flex>
            </Flex>

        </Flex>

        <SendMarketsModal isOpen={isOpen} onClose={onClose} />
    </Flex>
} 