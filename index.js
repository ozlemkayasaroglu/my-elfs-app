import mongoose from "mongoose";


const model = mongoose.model(
  "jokes",
  new mongoose.Schema({
    text: String,
    image: String,
    xLink: String,
  })
);

main();
async function main(){
  await mongoose.connect(
    "mongodb+srv://r00t:p0rtakal@my-elfs-app.kgbmsqt.mongodb.net/my-elfs-app").then(()=> {
    console.log("Baglantı kuruldu");
  }).catch((err) => {
    console.log("Baglantı kurulamadı. ", err);
    process.exit();
  });
}
const jokes = await model.find();
console.log(jokes);
