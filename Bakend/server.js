// mongodb+srv://<username>:<password>@mydata.dnt7y.mongodb.net/?retryWrites=true&w=majority&appName=mydata

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const uri = "mongodb+srv://RiyadAhmed:vBaKzPk67u0jDpNK@mydata.dnt7y.mongodb.net/?retryWrites=true&w=majority&appName=mydata";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define Mongoose Schema and Model
const humanSchema = new mongoose.Schema({
  name: String,
  occupation: String,
  imageUrl: String,
  bio: String,
});

const Human = mongoose.model('Human', humanSchema);

// Set up multer for handling file uploads
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp as filename to avoid conflicts
  },
});

const upload = multer({ storage });

// POST route for creating a new Human with image upload
app.post('/humans', upload.single('image'), async (req, res) => {
  const humanData = {
    name: req.body.name,
    occupation: req.body.occupation,
    bio: req.body.bio,
    imageUrl: req.file ? `/uploads/${req.file.filename}` : '', // Store file path if an image is uploaded
  };

  const human = new Human(humanData);

  try {
    await human.save();
    res.status(201).json(human); // Return the created document
  } catch (error) {
    res.status(400).json({ message: 'Error creating human', error });
  }
});

// GET route for fetching all humans
app.get('/humans', async (req, res) => {
  try {
    const humans = await Human.find();
    res.json(humans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching humans data', error });
  }
});

// Serve uploaded images statically
app.use('/uploads', express.static('uploads'));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// vBaKzPk67u0jDpNK