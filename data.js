import express from "express";
import axios from "axios";

const PORT = 3000;
const BASE_URL = "https://t4e-testserver.onrender.com/api";

const app = express();
let dataset = [];

const loadData = async () => {
    try{
        const response = await axios.post(`${BASE_URL}/public/token`, {
        "studentId": "E0323028",
        "password":"397629",
        "set": "setB"
    });
    
    const token = response.data.token;
    const dataUrl = response.data.dataUrl;

    const dataResponse = await axios.get(`${BASE_URL}${dataUrl}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    dataset = dataResponse.data.data;

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });

    }catch(err){
        console.log(err)
    }
    
}

loadData();

app.get('/fitness', (req, res) => {
    res.json(dataset);
});
