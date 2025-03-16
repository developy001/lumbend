import locationModel from "../models/locationModel";

export const getAllLocations = async () => {
  return await locationModel.find();
}

export const seedInitialLocations = async ( ) => {
  const locations = [
    { title: "New York City", address: "new york",image: "https://cdn.getyourguide.com/img/tour/5f7b651435b28.jpeg/98.jpg", description: "Explore the Statue of Liberty, Ellis Island, and their museums at your own pace with self-guided audio guides. Soak up the views of the iconic skyline with a round-trip ferry service from New Jersey.", navigation: "https://maps.app.goo.gl/w6nQLffSfnmeNCkaA", contact :"0123456789" },
  
    
  ];
  
  const demoLocations = await getAllLocations();
  if (demoLocations.length === 0) {
       await  locationModel.insertMany(locations);
     }
};