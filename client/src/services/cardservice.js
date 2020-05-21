import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`http://localhost:5000/api/product`);
    console.log("infunction")
    console.log(res)
    // return res.data || [];
    return res.data || [];
  }
}