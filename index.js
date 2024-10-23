const express = require('express');
const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send('hello js');
});

app.get('/users',(req,res)=>{
    console.log("server request comming")
    res.status(200).json({
        message:"working"
    })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
