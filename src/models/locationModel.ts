import mongoose,{Schema, Document} from "mongoose";


export interface ILocation extends Document {
  title: string;
  address : string;
  image: string;
  description : string;
  navigation : string;
  contact : string;

}

const  locationSchema = new Schema <ILocation>({
  title: {type: String, required: true},
  address : {type: String, required: true},
  image:{ type: String, required: true},
  description: {type: String, required: true},
  navigation: {type: String},
  contact: {type: String},

});
const locationModel = mongoose.model<ILocation>('location', locationSchema);

export default locationModel;