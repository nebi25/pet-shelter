import React, { useEffect,useState } from 'react';
import "../App.css";
import axios from 'axios';
import { FormControl, Paper,TextField } from '@mui/material';
import { useNavigate,Link,useParams } from 'react-router-dom';

const Edit = () => {
    const styles = {
        paper: {
            width: "30rem",
            height: "30rem",
            padding: "1rem",
            elevation: "25",
            variant: "outlined"
        },
        margin:{
            marginLeft: "10px",
            marginTop: "5px"
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
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const {id} = useParams()
    const onChangeHandler = (e) => {
        setPet({
            ...pet,[e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((results) => {
            console.log(results.data)
            setPet(results.data)
            setName(results.data.petName)
        })
        .catch((errors) => console.log("Something went wrong gettin pet ID for update",errors))
    },[])

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/pets/${id}`,{
            ...pet
        })
        .then((results) => {
            navigate('/')
            console.log(results)
        })
        .catch((errors) => {
            console.log("Error updating the pet",errors)
        })
    }


    return(
        <div className='display'>
            <Paper elevation={4} style={styles.paper}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
                </div>
                <h4>Edit {name}</h4>
                <form onSubmit={onSubmitHandler}>
                    <FormControl>
                        <TextField name="petName" value={pet.petName} onChange={onChangeHandler} id="outlined-basic-margin" label="Pet Name:" variant="outlined" style={styles.margin} />
                        <TextField name="petType" value={pet.petType} onChange={onChangeHandler} id="outlined-basic-margin" label="Pet Type:" variant="outlined" style={styles.margin}/>
                        <TextField name="petDescription" value={pet.petDescription} onChange={onChangeHandler} id="outlined-basic-margin" label="Pet Description:" variant="outlined" style={styles.margin}/>
                        <button value="submit" className='button'>Edit Pet</button>
                    </FormControl>
                    <FormControl>
                        <h4 style={{marginLeft: "10px", marginTop: "2px",marginBottom: "2px"}}> Skills (Optional)</h4>
                        <TextField name="petSkill1" value={pet.petSkill1} onChange={onChangeHandler} id="outlined-basic-margin" label="Skill 1:" variant="outlined" style={styles.margin}/>
                        <TextField name="petSkill2" value={pet.petSkill2} onChange={onChangeHandler} id="outlined-basic-margin" label="Skill 2:" variant="outlined" style={styles.margin}/>
                        <TextField name="petSkill3" value={pet.petSkill3} onChange={onChangeHandler} id="outlined-basic-margin" label="Skill 2:" variant="outlined" style={styles.margin}/>
                    </FormControl>
                </form>
            </Paper>
        </div>
    )
}

export default Edit;