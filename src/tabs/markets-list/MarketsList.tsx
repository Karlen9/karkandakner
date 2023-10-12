import { Button, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from 'axios'

export const MarketsList = () => {
    const [markets, setMarkets] = useState<{name: string, id: number}[]>([]);
    console.log(markets)
    useEffect(() => {
        axios.get('http://localhost:5000/markets').then(res => {
            setMarkets(res.data)
        })
    }, [])

    const getMarkets = () => {
        axios.get('http://localhost:5000/markets').then(res => {
            console.log(res.data)
            setMarkets(res.data)
        })
    }
    
    return <Flex direction='column' rowGap='10px'>
        <Button onClick={getMarkets}>Обновить список</Button>
        <Flex>Магазины</Flex>
        {markets.length !== 0 ? markets.map(market => 
            <Flex key={market.id}>{market.name}</Flex>    
        ) : null}
    </Flex>
} 