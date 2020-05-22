import axios from 'axios';

export default {
  getAll: async (param) => {
    let category = String(param);
    let res = await axios.get(`http://localhost:5000/api/product?category=`+ category);
    console.log("infunction")
    console.log(res)
    // return res.data || [];
    return res.data || [];
  }
}