import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react"
import { ReactElement } from "react"
 
export const amountError: ReactElement = (
    <Alert status='error'>
        <AlertIcon />
        <AlertTitle color={'black'}>Забыл ввести сумму!</AlertTitle>
    </Alert>
)

export const dateError: ReactElement = (
    <Alert status='error'>
        <AlertIcon />
        <AlertTitle color={'black'}>Забыл выбрать дату!</AlertTitle>
    </Alert>
)

export const nameError: ReactElement = (
    <Alert status='error'>
        <AlertIcon />
        <AlertTitle color={'black'}>Забыл выбрать магазин!</AlertTitle>
    </Alert>
)

export const marketNameError: ReactElement = (
    <Alert status='error'>
        <AlertIcon />
        <AlertTitle color={'black'}>Забыл ввести название!</AlertTitle>
    </Alert>
)