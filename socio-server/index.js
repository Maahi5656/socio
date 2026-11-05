import { MongoClient, ObjectId } from 'mongodb';
import express, { request, response } from 'express'
import cors from 'cors'
import 'dotenv/config'
import { createRemoteJWKSet, jwtVerify } from 'jose';

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
const eventBookingCollection = db.collection("bookings");

const verifyToken = async(request, response, next)=>{
    
    const authHeader = request.headers.authorization
    
    if(!authHeader){
        return response.status(401).send({message: 'Unauthorized'});
    }

    const token = authHeader.split(" ")[1]

    if(!token){
        return response.status(401).send({message: 'Unauthorized'});
    }

    // Verify Token
    const JWKS = createRemoteJWKSet(new URL(`${process.env.CLIENT_URL}/api/auth/jwks`))

    try{
        const { payload } = await jwtVerify(token, JWKS);
        next();
    }catch(error){
        return response.status(500).send({message: "Server Error"});
    }

}

app.get('/', (request,response)=>{
    response.send({message: 'Server is running fine!'})
});

app.get('/events', async(request, response)=>{
    const result = await eventsCollection.find().toArray();
    
    response.send(result);
});

app.get('/event/:id', async(request, response)=>{
    const { id } = request.params;
    const result = await eventsCollection.findOne({_id: new ObjectId(id)});

    console.log(result);

    response.send(result);
});

app.patch('/event/:id', verifyToken, async(request, response)=>{
    const {id} = request.params;   
    const updatedData = request.body;
    const result = await eventsCollection.updateOne(
        {_id: new ObjectId(id)},
        {$set: updatedData}
    )
    
    response.json({
        message: "Event Updated Successfully",
        result
    });
});

app.delete('/event/:id', verifyToken, async(request,response)=>{
    const {id} = request.params;
    const result = eventsCollection.deleteOne({_id: new ObjectId(id)})

    response.json({
        message: "Event Deleted Successfully",    
        result
    });    
})

app.post('/add-event', verifyToken, async(request, response)=>{
    const data = request.body;
    const result = await eventsCollection.insertOne(data);  

    console.log(result);

    response.send(result);
});

app.get('/manage-event/:email', verifyToken, async(request, response)=>{
    const { email } = request.params;
    const result = await eventsCollection.find({event_organizer_email: email}).toArray();

    response.send(result);
});

app.post('/join-event', verifyToken, async(request, response)=>{
    const data = request.body;
    const result = await eventBookingCollection.insertOne(data);

    response.send(result);
});

app.get('/my-events/:email', verifyToken, async(request, response)=>{
    const { email } = request.params;
    const result = await eventBookingCollection.find({email:email}).toArray();

    response.send(result);
});

app.delete('/my-events/:id', verifyToken, async(request, response)=>{
    const {id} = request.params;
    const result = await eventBookingCollection.deleteOne({_id: new ObjectId(id)});

    response.json({
        message: "Booked Event Deleted Successfully",    
        result
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`)
})

export default app