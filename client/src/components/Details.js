import { FormControl, Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../App.css"


const Details = () =>{
    const [count, setCount] = useState(0)
    const styles = {
        paper: {
            backgroundColor:"#50C878",
            margin: "25px",
            padding: "1rem",    
        }
    }
    const navigate = useNavigate();
    const [pet, setPet] = useState({
        petName: "",
        petType: "",
        petDescription: "",
        petSkill1: "",
        petSkill2: "",
        petSkill3: ""
    })
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((results) => {
            console.log(results.data)
            setPet(results.data)
        })
        .catch((error) => console.log("Something went wrong getting the pet info",error))
    },[])

    function deleteHandler(){
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then((results) => {
            console.log("Pet removed from list.")
            navigate('/')
        })
        .catch((error) => {
            console.log("Something went wrong while deleting pet.",error)
        })
    }

    function likeHandler() {
        setCount(count => count + 1)
        
    }

    return(
        <div className="display">
            <Paper elevation={4} style={styles.paper} >
                <div style={{display: "flex", justifyContent: "space-between", padding: "10px"}}>
                    <h1 style={{marginRight:"100px"}}>Pet Shelter</h1><Link to="/"><button className="button">Back to home</button></Link>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", padding: "10px",marginLeft: "10px",marginTop: "-20px"}}>
                    <h5 style={{marginTop: "6px"}}>Details about: {pet.petName}</h5>
                    <button className='button' onClick={deleteHandler}>Adopt {pet.petName}</button>
                </div>
                <div className='detailsPage'>
                <FormControl style={{marginLeft: "10px"}}>
                    <p>Pet type:</p>
                    <p>Description:</p>
                    <p>Skills:</p>
                </FormControl>
                <FormControl style={{marginRight: "10px",marginLeft: "20px"}}>
                    <p>{pet.petType}</p>
                    <p>{pet.petDescription}</p>
                    <p>{pet.petSkill1}<br/>{pet.petSkill2}<br/>{pet.petSkill3}</p>
                </FormControl><br/>
                </div>
            </Paper>
        </div>
    )
}

export default Details;