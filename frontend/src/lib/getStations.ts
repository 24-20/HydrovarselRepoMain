import axios from 'axios'


export const getStations = async () => {
    try {
      const res = await axios.get("http://192.168.50.29:5000/station-data")
    return res.data.data
    } catch (error) {
      console.log(error)
      return {error:true}
    }
    
  }