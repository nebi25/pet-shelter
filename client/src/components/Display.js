import React, { useEffect,useState} from 'react';
import axios from 'axios';
import { Paper,Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Link } from 'react-router-dom';


const Display = () => {
    const styles = {
        paper: {
            backgroundColor:"#50C878",
            margin: "25px",
            padding: "1rem",    
        }
    }
    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then((results) => {
            console.log(results.data)
            setPet(results.data)
        })
        .catch((error) => {
            console.log("Failed to get the pets information from the back-end",error)
        })
    },[])

    return(
        <div className='display'>
            <Paper elevation={4} style={styles.paper} >
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <h1>Pet Shelter</h1>
                    <Link to={"/pets/new"}><button className="button">Add a pet to the shelter</button></Link>
                </div>
                <h3>This pets are looking for a good home</h3>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 200 }} size="medium" aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {pet.map((pet,index) => (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="left" scope="row">{pet.petName}</TableCell>
                                    <TableCell align="left">{pet.petType}</TableCell>
                                    <TableCell align='left'><Link to={`/pets/${pet._id}`}>Details</Link>|<Link to={`/pets/edit/${pet._id}`}>Edit</Link></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> 
            </Paper>
        </div>
    )
}

export default Display;