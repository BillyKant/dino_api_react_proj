import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 't-rex',
        name_meaning: "tyrant lizard",
        species: "T. Dinosaur",
        size: 'large',
        lifestyle: 'Eating meat',
        era: 'cretaceous',
        features: 'tiny arms',
        distribution: 'all over',
        description: 'huge dino discovered to be very terrifying',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseNameMeaning: (state, action) => { state.name_meaning = action.payload},
        chooseSpecies: (state, action) => { state.species = action.payload},
        chooseSize: (state, action) => { state.size = action.payload},
        chooseLifestyle: (state, action) => { state.lifestyle = action.payload},
        chooseEra: (state, action) => { state.era = action.payload},
        chooseFeatures: (state, action) => { state.features = action.payload},
        chooseDistribution: (state, action) => { state.distribution = action.payload},
        chooseDescription: (state, action) => { state.description = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseNameMeaning, chooseSpecies, chooseSize, chooseLifestyle, chooseEra, chooseFeatures, chooseDistribution, chooseDescription } = rootSlice.actions;