// import { MongoClient } from "mongodb";

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const data = req.body;
//     const client = await MongoClient.connect(
//       "mongodb+srv://shubham:N9jKpV9JuNF67pCq@cluster0.pdsqw.mongodb.net/meetups?retryWrites=true&w=majority"
//     );
//     // const client1 = await MongoClient.connect(
//     //   "mongodb+srv://shubham:N9jKpV9JuNF67pCq@cluster0.pdsqw.mongodb.net/meetups?retryWrites=true&w=majority"
//     // );
//     const db = client.db();
//   const meetupsCollections = db.collection("meetups");
//   const result = await meetupsCollections.insertOne(data);
//   console.log(result);
//   client.close();

//   res.status(201).json({ message: "meetups inserted" });
//   }
  
// }
// export default handler;

import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // const client = await MongoClient.connect(
    //   'mongodb+srv://shubham:N9jKpV9JuNF67pCq@cluster0.pdsqw.mongodb.net/meetups?retryWrites=true&w=majority'
    // );
    // const db = client.db();

    // const meetupsCollection = db.collection('meetups');
   console.log(req) 

    // const result = await meetupsCollection.insertOne(data);

    // console.log(result);

    // client.close();

    // res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
