import mongoose from "mongoose";
import {SERVER_DB} from "../../../config/params.js"
import { DB_CLOUD_DEVELOP, DB_LOCAL_DEVELOP } from "../../../config/env.js";

mongoose.set("strictQuery", false)

let DB_LINK; 

if (SERVER_DB == 'local') DB_LINK = DB_LOCAL_DEVELOP
else if (SERVER_DB == 'dev') DB_LINK = DB_CLOUD_DEVELOP
else DB_LINK = DB_LOCAL_DEVELOP


export async function DB_Connection(){ 
    await mongoose.connect(DB_LINK)
}