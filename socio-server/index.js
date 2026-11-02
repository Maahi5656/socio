import { MongoClient } from 'mongodb';
import express from 'express'
import cors from 'cors'
import 'dotenv/config'


const app = express();
const PORT = 8000

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongoDB(){
    try{
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        return client;
    }catch(error){
        console.dir(error);
    }
}

const mongoClient = await connectToMongoDB();
const db = mongoClient.db("socio");
const eventsCollection = db.collection("events");

app.get('/', (req,res)=>{
    res.send({message: 'Server is running fine!'})
})

app.post('/add-event', async(request, response)=>{
    const data = request.body;
    const result = await eventsCollection.insertOne(data);  

    console.log(result);

    response.send(result);
})

app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`)
})

export default app