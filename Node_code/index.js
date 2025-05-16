const http = require('http');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

// MongoDB Atlas Connection URI (Replace with your actual URI)
const uri = "mongodb+srv://Yashwanth:Yashwanth%406379@cluster0.ys0lf7k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Create a new MongoClient
const client = new MongoClient(uri);

const server = http.createServer(async (req, res) => {
    console.log(req.url);

    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
    else if (req.url === '/api') {
        try {
            // Connect to MongoDB Atlas
            await client.connect();
            console.log("Connected to MongoDB Atlas");

            const database = client.db('propertyDB'); // Replace with your DB name
            const collection = database.collection('properties'); // Replace with your collection name

            // Fetch all documents from the collection
            const data = await collection.find({}).toArray();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } catch (err) {
            console.error('MongoDB Error:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Failed to fetch data from database" }));
        } finally {
            // Close the connection
            await client.close();
        }
    }
  
    else {
        fs.readFile(path.join(__dirname, 'public', '404.html'), 'utf-8', (err, data) => {
            if (err) throw err;
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
});

server.listen(9738, () => console.log("Server is running on port 9738"));
