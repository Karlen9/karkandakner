import fs from 'fs'
const dataPath = "./resources/markets.json" 

export const getMarkets = () => {
    const jsonData = fs.readFileSync(dataPath)
    const data = JSON.parse(jsonData)
    const result = Object.values(data)[0]
    
    return result
}