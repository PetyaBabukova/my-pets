import * as petsService from '../../services/petsService'

const CreatePet = ({
    history,
    // match,
    // location
}) =>{

    const onCreatePetSubmitHandler = (e) =>{
        e.preventDefault();
        // console.log(e.target);
        // console.log(e.target.name.value);
        // console.log(e.target.description.value);
        // console.log(e.target.category.value);
        const {name, description, imageURL, category} = e.target;
        petsService.create(name.value, description.value, imageURL.value, category.value)
        .then(()=>{
            history.push('/');
        })

    }

return (
    <section className="create">
    <form onSubmit={onCreatePetSubmitHandler}>
        <fieldset>
            <legend>Add new Pet</legend>
            <p className="field">
                <label htmlFor="name">Name</label>
                <span className="input">
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <span className="actions"></span>
                </span>
            </p>
            <p className="field">
                <label htmlFor="description">Description</label>
                <span className="input">
                    <textarea rows="4" cols="45" type="text" name="description" id="description"
                        placeholder="Description"></textarea>
                    <span className="actions"></span>
                </span>
            </p>
            <p className="field">
                <label htmlFor="image">Image</label>
                <span className="input">
                    <input type="text" name="imageURL" id="image" placeholder="Image" />
                    <span className="actions"></span>
                </span>
            </p>
            <p className="field">
                <label htmlFor="category">Category</label>
                <span className="input">
                    <select type="text" name="category">
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                        <option value="Perrot">Parrot</option>
                        <option value="Reptile">Reptile</option>
                        <option value="Other">Other</option>
                    </select>
                    <span className="actions"></span>
                </span>
            </p>
            <input className="button submit" type="submit" value="Add Pet" />
        </fieldset>
    </form>
</section>
)
};

export default CreatePet;