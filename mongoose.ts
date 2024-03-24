import mongoose from 'mongoose'

export function connect() {
    return mongoose.connect('mongodb+srv://leon:Ikln2003!!@cluster0.eqsgfdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(() => {
            console.log('Database created successful');
        })
        .catch((error) => {
            console.error('Error connecting to database:', error);
            throw error; // Rethrow the error to propagate it to the caller
        });
}

export function close() {
    return mongoose.disconnect();
}

