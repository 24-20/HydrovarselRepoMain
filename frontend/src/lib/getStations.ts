import axios from 'axios'


export const getStations = async () => {
    const res = await axios.get("http://127.0.0.1:5000/station-data")
    return res.data.data
    
    
  }