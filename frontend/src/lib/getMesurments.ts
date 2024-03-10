import axios from 'axios'

export const getMeasurments = async (params:{'StationId':string, 'parameter':string, 'resolution_time':string, 'reference_time':string})=> {
    
    try {
      const res = await axios.post("http://127.0.0.1:5000//mesurments", params)
      return (res.data.data.data)
    } catch (error) {
      console.log(error)
      return {error:true}
    }
    
    
    
  }