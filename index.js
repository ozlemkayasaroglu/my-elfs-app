import mongoose from 'mongoose';
import jokemodel from './models/jokemodel.js';


const url="mongodb+srv://r00t:<password>@my-elfs-app.kgbmsqt.mongodb.net/";

async function main(){
  mongoose
  .connect(url)
  .then((con) => {
    console.log("Bağlantı başarılı");

  })
  .catch((err) => {
    console.log("Bağlantı Başarısız. ", err);
  });
}
async function Connect() {
  mongoose
    .connect(url)
    .then((con) => {
      console.log("Bağlantı başarılı");
    })
    .catch((err) => {
      console.log("Bağlantı Başarısız. ", err);
    });
}