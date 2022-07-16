import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';
import { chooseName, chooseNameMeaning, chooseSpecies, chooseSize, chooseLifestyle, chooseEra, chooseFeatures, chooseDistribution, chooseDescription } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface DinoFormProps {
    id?:string;
    data?:{}
}

interface DinoState {
    name: string;
    name_meaning: string;
    species: string;
    size: string;
    lifestyle: string;
    era: string;
    features: string;
    distribution: string;
    description: string;
}

export const DinoForm = (props:DinoFormProps) => {

    const dispatch = useDispatch();
    let { dinoData, getData } = useGetData();
    const store = useStore()
    const name = useSelector<DinoState>(state => state.name)
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data);
            console.log(`Updated dino id:${data} ${props.id}`);
            window.location.reload();
            event.target.reset();
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseNameMeaning(data.name_meaning))
            dispatch(chooseSpecies(data.species))
            dispatch(chooseSize(data.size))
            dispatch(chooseLifestyle(data.lifestyle))
            dispatch(chooseEra(data.era))
            dispatch(chooseFeatures(data.features))
            dispatch(chooseDistribution(data.distribution))
            dispatch(chooseDescription(data.description))
            await serverCalls.create(store.getState())
            window.location.reload();
            event.target.reset();
        }
    }


    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Dino Name</label>
                    <Input {...register('name')} name="name" placeholder='t-rex'/>
                </div>
                <div>
                    <label htmlFor="name_meaning">Name Meaning</label>
                    <Input {...register('name_meaning')} name="name_meaning" placeholder='tyrant lizard'/>
                </div>
                <div>
                    <label htmlFor="species">Species</label>
                    <Input {...register('species')} name="species" placeholder='T. Dinosaur'/>
                </div>
                <div>
                    <label htmlFor="size">Size</label>
                    <Input {...register('size')} name="size" placeholder='large'/>
                </div>
                <div>
                    <label htmlFor="lifestyle">Lifestyle</label>
                    <Input {...register('lifestyle')} name="lifestyle" placeholder='Eating Meat'/>
                </div>
                <div>
                    <label htmlFor="era">Era</label>
                    <Input {...register('era')} name="era" placeholder='cretaceous'/>
                </div>
                <div>
                    <label htmlFor="features">Features</label>
                    <Input {...register('features')} name="features" placeholder='Eating Meat'/>
                </div>
                <div>
                    <label htmlFor="distribution">Distribution</label>
                    <Input {...register('distribution')} name="distribution" placeholder='all over'/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Input {...register('description')} name="description" placeholder='huge dino discovered to be very terrifying'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}