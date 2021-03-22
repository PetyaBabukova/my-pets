// import {useEffect, useState} from 'react'; // need for functional component
import { Component } from 'react';

import * as petsService from "../../services/petsService";

import Pet from "../Pet/Pet";
import CategoryNavigation from './CategoryNavigation/CategoryNavigation'

class Categories extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pets: [],
            currentCategory: 'all'
        }
    }

    componentDidMount() {

        petsService.getAll()
            .then(res => this.setState({ pets: res }))
    };

    componentDidUpdate(prevProps, prevState) {

        const category = this.props.match.params.category

        if (prevProps.match.params.category == category) {
            return;
        }
        petsService.getAll(this.category)
            .then(res =>
                this.setState({ pets: res, currentCategory: this.category }))
    }

    render() {

        // console.log(this.state.pets);
        return (
            <section className="dashboard">
                <h1>Dashboard</h1>

                <CategoryNavigation />


                <ul className="other-pets-list">
                    {this.state.pets.map(x => //по принцип може да се подаде целия обект {...x}, това е по адванст техника.
                        <Pet
                            key={x.id}
                            id={x.id}
                            name={x.name}
                            category={x.category}
                            likes={x.likes}
                            description={x.description}
                            imageURL={x.imageURL}
                        // {...x} //това може да замени горните записи, без ключа!!!

                        />
                    )}
                </ul>
            </section>
        )
    }
}

export default Categories;



// functional component:
// const Categories = ({
//     match,
// }) => {

//     const [pets, setPets] = useState([])

//     useEffect(()=>{
//         fetch('http://localhost:5000/pets')
//         .then(res => res.json())
//         .then(res => setPets(res))
//     }, [])

//     console.log(pets);

//     return (
//         <section className="dashboard">
//             <h1>Dashboard</h1>

//             <CategoryNavigation />


//             <ul className="other-pets-list">
//                 <li className="otherPet">
//                     <h3>Name: Gosho</h3>
//                     <p>Category: Cat</p>
//                     <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png"/></p>
//                     <p className="description">This is not my cat Gosho</p>
//                     <div className="pet-info">
//                         <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
//                         <a href="#"><button className="button">Details</button></a>
//                         <i className="fas fa-heart"></i> <span> 2</span>
//                     </div>
//                 </li>
//                 <li className="otherPet">
//                     <h3>Name: Gosho</h3>
//                     <p>Category: Cat</p>
//                     <p className="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png"/></p>
//                         <p className="description">This is not my cat Gosho</p>
//                         <div className="pet-info">
//                             <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
//                             <a href="#"><button className="button">Details</button></a>
//                             <i className="fas fa-heart"></i> <span> 2</span>
//                         </div>

//         </li>
//                     <li className="otherPet">
//                         <h3>Name: Kiro</h3>
//                         <p>Category: Dog</p>
//                         <p className="img"><img src="http://www.stickpng.com/assets/images/580b57fbd9996e24bc43bbde.png"/>
//             </p>
//                             <p className="description">This is my dog Kiro</p>
//                             <div className="pet-info">
//                                 <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
//                                 <a href="#"><button className="button">Details</button></a>
//                                 <i className="fas fa-heart"></i> <span> 4</span>
//                             </div>
//         </li>
//     </ul>
// </section>
// )
// }