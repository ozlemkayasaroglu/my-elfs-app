import mongoose from "mongoose";

const jokeSchema = new mongoose.Schema({
  joke: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

// const Joke = mongoose.model('Joke', jokeSchema);
export default mongoose.model("Joke", jokeSchema);