import axios from "axios"


export const addCoupan=(data)=>{
console.log(data);

    const result=axios.post("http://localhost:8081/api/coupons",data);
}