import { MongoClient, ObjectId } from 'mongodb';
import express, { response } from 'express'
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

app.get('/', (request,response)=>{
    response.send({message: 'Server is running fine!'})
});

app.get('/event/', async(request, response)=>{
    // const { email } = request.params
    const result = await eventsCollection.find().toArray();
    
    response.send(result);
});

app.get('event/:id', async(request, response)=>{
    const { id } = request.params;
    const result = await eventsCollection.findOne({_id: new ObjectId(id)});

    console.log(result);

    result.send(result);
});

app.post('/add-event', async(request, response)=>{
    const data = request.body;
    const result = await eventsCollection.insertOne(data);  

    console.log(result);

    response.send(result);
});

app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`)
})

export default app