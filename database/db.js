import mongoose from 'mongoose';

// const Connection = async (username, password) => {                                                    
//     const URL = `mongodb://localhost:27017/nsecblog`
//     try {
//         await mongoose.connect(URL)
//         console.log('Database connected successfully');
//     } catch (error) {
//         console.log('Error while connecting to the database ', error);
//     }
// };
const Connection = async (username, password) => {
    const URL = `mongodb+srv://indra0412:fufUcNpW0iY78Fa4@cluster0.8twhafo.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL)
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;