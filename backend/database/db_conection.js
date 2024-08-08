import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI, {
            dbName: "job_portal"
    })
    .then(() => {
        console.log("Connected to db")
    })
    .catch(err=> {
        console.log('some error connecting to db')
    })

}