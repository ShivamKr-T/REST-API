const express=require('express');
const users=require("./MOCK_DATA.json");


const app=express();
const PORT=8000;

// routes
app.get("/", (req, res) => {
    res.send("Welcome to the API! Visit /users to see the data.");
});

app.get("/users",(req,res)=>{
    const html=`
    <ul>
        ${users.map((user)=>`<li>${user.first_name}`).join("")}
    </ul>
    `;
    res.send(html);
});

app.get("/api/users",(req,res)=>{
    return res.json(users);
});

// merge get,patch,delete
app
    .route("/api/users/:id")
    .get((req,res)=>{
        const id=Number(req.params.id);
        const user=users.find((user)=>user.id===id);
        return res.json(user);
    })
    .patch((req,res)=>{
        // todo: edit the user with ID="id"
        return res.json({status:"pending"});
    })
    .delete((req,res)=>{
        // todo: delete the user with ID="id"
        return res.json({status:"pending"});
    });

// app.get("/api/users/:id",(req,res)=>{
//     const id=Number(req.params.id);
//     const user=users.find((user)=>user.id===id);
//     return res.json(user);
// });

app.post("/api/users",(req,res)=>{
    // todo: Create new user
    return res.json({status:"pending"});
});

// app.patch("/api/users/:id",(req,res)=>{
//     // todo: edit the user with ID="id"
//     return res.json({status:"pending"});
// });

// app.delete("/api/users/:id",(req,res)=>{
//     // todo: delete the user with ID="id"
//     return res.json({status:"pending"});
// });

app.listen(PORT,()=>console.log(`Server started at port:${PORT}`));