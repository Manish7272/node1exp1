import express from "express";
import data from "./data.json" with {type:"json"};

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");

// app.get("/", (req, resp)=>{
//     resp.send(data);
// })

// app.get("/", (req, res) => {
//     res.send(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
// });

app.get("/", (req, res)=>{
    res.render("home.ejs", {data})
})

app.listen(3200, () => {
    console.log("Server running on port 3200");
});