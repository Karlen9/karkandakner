
import { Tabs, TabList, Tab, TabPanels, TabPanel, Flex } from '@chakra-ui/react';
import styles from './app.module.css'
import { Archive, Markets, MarketsList } from '@tabs';

const App = () => {
  return ( 
    <main className={styles.main}> 
      <Tabs isFitted variant='enclosed' w={'100%'}>
        <TabList mb='1em'>
          <Tab _selected={{ color: 'white', bg: 'teal' }} color='teal.600'>Банк</Tab>
          <Tab _selected={{ color: 'white', bg: 'teal' }} color='teal.600'>Магазины</Tab>
          <Tab _selected={{ color: 'white', bg: 'teal' }} color='teal.600'>Список магазинов</Tab>
        </TabList>
        <TabPanels color='teal.600'>
          <TabPanel>
            <Archive />
          </TabPanel>
          <TabPanel>
            <Flex w='100%' justifyContent='center'>
              <Markets />
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex w='100%' justifyContent='center'>
              <MarketsList />
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
      
       
    </main> 
  )
}


export default App; 