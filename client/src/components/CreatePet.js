import React, { useEffect,useState } from 'react';
import "../App.css";
import axios from 'axios';
import { FormControl, Paper,TextField,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CreatePet = () => {
    const styles = {
        paper: {
            width: "35rem",
            padding: "1rem",
            elevation: "25",
            variant: "outlined"
        },
        margin:{
            marginLeft: "10px",
            marginTop: "5px",
            marginBottom: "5px"
        }
    }
    //Sending the information to the display
    const [pet, setPet] = useState({
        petName: "",
        petType: "",
        petDescription: "",
        petSkill1: "",
        petSkill2: "",
        petSkill3: ""
    })
    const [beError,setBeError] = useState({})
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setPet({
            ...pet,[e.target.name]: e.target.value
        })
        
    }
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets',{
            ...pet
        })
        .then((results) => {
            navigate('/')
            console.log(results.data)
        })
        .catch((errors) => {
            console.log("Error creating the pet!",errors)
            setBeError(errors.response.data.error.errors)
            console.log(errors.response.data.error.errors)

        })
    }


    return(
        <div className='display'>
            <Paper elevation={4} style={styles.paper}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1>Pet Shelter</h1>
                    <Link to="/">back to home</Link>
                </div>
                <h4>Know a pet needing a home?</h4>
                <form onSubmit={onSubmitHandler}>
                    <FormControl>
                        <TextField name="petName" onChange={onChangeHandler} id="outlined-basic-margin" label="Pet Name:" variant="outlined" style={styles.margin} />
                        {beError.petName ? <span>{beError.petName.message}</span> : null}
                        <TextField name="petType" onChange={onChangeHandler} id="outlined-basic-margin" label="Pet Type:" variant="outlined" style={styles.margin}/>
                        {beError.petType ? <span>{beError.petType.message}</span> : null}
                        <TextField name="petDescription" onChange={onChangeHandler} id="outlined-basic-margin" label="Pet Description:" variant="outlined" style={styles.margin}/>
                        {beError.petType ? <span>{beError.petDescription.message}</span> : null}
                        <button value="submit" className='button'>Add Pet</button>
                    </FormControl>
                    <FormControl>
                        <h4 style={{marginLeft: "10px",marginTop: "2px",marginBottom: "2px"}}> Skills (Optional)</h4>
                        <TextField name="petSkill1" onChange={onChangeHandler} id="outlined-basic-margin" label="Skill 1:" variant="outlined" style={styles.margin}/>
                        <TextField name="petSkill2" onChange={onChangeHandler} id="outlined-basic-margin" label="Skill 2:" variant="outlined" style={styles.margin}/>
                        <TextField name="petSkill3" onChange={onChangeHandler} id="outlined-basic-margin" label="Skill 2:" variant="outlined" style={styles.margin}/>
                    </FormControl>
                </form>
            </Paper>
        </div>
    )
}

export default CreatePet;