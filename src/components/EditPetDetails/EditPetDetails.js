import { useEffect, useState } from "react";
import * as petsService from '../../services/petsService';

import InputError from '../shared/InputError/InputError';
const EditPetDetails = ({
    match,
    history,
}) => {
    const [pet, setPet] = useState({});
    const [errorMessage, setErrorMassage] = useState('');

    useEffect(() => {
        petsService.getOne(match.params.petId)
            .then(res => setPet(res))
    }, []);

    const onDescriptionSaveSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        // console.log(e.target.description.value);

    };
    // console.log(pet);

    const onDescriptionChangeHandler = (e) => {
        console.log(e.target.value);
        if (e.target.value.length < 10) {
            setErrorMassage('Description is too short')
        } else {
            setErrorMassage('');
        }
    }

    return (
        <section className="detailsMyPet">
            <h3>{pet.name}</h3>
            <p>Pet counter:<i className="fas fa-heart"></i> {pet.likes}</p>
            <p className="img"><img src={pet.imageURL} /></p>
            <form onSubmit={onDescriptionSaveSubmit}>
                {/* <textarea type="text" name="description" onChange={onDescriptionChangeHandler} defaultValue={pet.description}></textarea> */}
                <textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description}></textarea>
                <InputError>{errorMessage}</InputError>
                <button className="button">Save</button>
            </form>
        </section>
    );
};

export default EditPetDetails;