import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { link } from 'fs';


export default function Editcar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState(
        { brand: '', model: '', color: '', year: '', fuel: '', price: '' }
    );

    const handleClickOpen = () => {
        setCar({
            brand: props.car.brand, model: props.car.model, color: props.car.color, year: props.car.year, fuel: props.car.fuel,
            price: props.car.year
        })
        console.log(props.car);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value })
        console.log(car)
    }

    const updateCar = () => {
        props.updateCar(car, props.car._links.car.href);
        handleClose();
    }

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Edit
        </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit car</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Update the information for new car
            </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="brand"
                        value={car.brand}
                        onChange={e => handleChange(e)}
                        label="brand"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="model"
                        value={car.model}
                        onChange={e => handleChange(e)}
                        label="model"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="color"
                        value={car.color}
                        onChange={e => handleChange(e)}
                        label="color"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="year"
                        value={car.year}
                        onChange={e => handleChange(e)}
                        label="year"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="fuel"
                        value={car.fuel}
                        onChange={e => handleChange(e)}
                        label="fuel"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="price"
                        value={car.price}
                        onChange={e => handleChange(e)}
                        label="price (€)"
                        fullWidth
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
            </Button>
                    <Button onClick={updateCar} color="primary">
                        Save
            </Button>
                </DialogActions>
            </Dialog>
        </div>

    )
}