// Todo: create Album Schema
const mongoose = require('mongoose');
const { Schema } = mongoose;


const ArtistSchema = new Schema({
    name: String,
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: String,
    retired: Boolean,
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'album'
    }]
});


const Artist = mongoose.Model('artist', ArtistSchema);

module.export = Artist;