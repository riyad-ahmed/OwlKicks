// mongodb+srv://<username>:<password>@mydata.dnt7y.mongodb.net/?retryWrites=true&w=majority&appName=mydata

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://RiyadAhmed:vBaKzPk67u0jDpNK@mydata.dnt7y.mongodb.net/?retryWrites=true&w=majority&appName=mydata"; // Replace with your MongoDB connection string
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const humanSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  imageUrl: String,
  bio: String,
});

const Human = mongoose.model('Human', humanSchema);

app.post('/humans', async (req, res) => {
  const human = new Human(req.body);
  try {
    await human.save();
    res.status(201).send(human);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get('/humans', async (req, res) => {
    try {
      const humans = await Human.find();
      res.json(humans);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching humans data' });
    }
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// vBaKzPk67u0jDpNK