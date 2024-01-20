import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;
const endpoint = "/todos";
const user = encodeURIComponent("common-user");
const pass = encodeURIComponent("123QWEasd")
const uri = `mongodb+srv://${user}:${pass}@todos.hq39mmh.mongodb.net/?retryWrites=true&w=majority`

const todoSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  }
});

mongoose
  .connect(uri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connection error: ${err}`));

const Todos = mongoose.model("Mytodo", todoSchema)

app.get(endpoint, async (req, resp) => {
  const todos = await Todos.find()
  console.log(todos)
  resp.status(200).send(todos)
});

app.get(`${endpoint}/:id`, async (req, resp) => {
  const id = req.params.id;
  const todo = await Todos.findById(id)
  if (todo) {
    resp.send(todo)
  } else {
    resp.sendStatus(404);
  }
});

app.post(endpoint, async (req, resp) => {
  const todo = new Todos(req.body)
  todo
    .save()
    .then((result) => {
      resp
        .status(201)
        .json(result)
    })
    .catch((err) => console.log(`Error on posting item: ${err}`))
});

app.patch(`${endpoint}/:id`, async (req, resp) => {
  const todo = await Todos.findById(req.params.id);
  const { task, date, isDone } = req.body;
  todo
    .updateOne({
      task,
      date,
      isDone,
    })
    .then((result) => {
      resp
        .status(201)
        .json(result)
    })
    .catch((err) => console.log(`Error on patching item: ${err}`))
})

app.delete(`${endpoint}/:id`, async(req, resp) => {
  const { id } = req.params;
  const todo = await Todos.findByIdAndDelete(id);
  if (todo) {
    resp.send(todo)
  } else {
    resp.sendStatus(404);
  }
})

async function startBackend() {
  try {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`listening port ${PORT}`)
    });
    console.log("Waiting for connection to server...")
  } catch(err) {
    return console.log(err)
  }
}

startBackend();