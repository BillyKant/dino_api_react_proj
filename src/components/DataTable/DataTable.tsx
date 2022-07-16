import React, {useState} from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@mui/material';
import { DinoForm } from '../../components/DinoForm';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 130 },
    {
        field: 'name',
        headerName: 'name',
        width: 150,
        editable: true,
    },
    {
        field: 'name_meaning',
        headerName: 'Name Meaning',
        width: 150,
        editable: true,
    },
    {
        field: 'species',
        headerName: 'species',
        width: 150,
        editable: true,
    },
    {
        field: 'size',
        headerName: 'Size',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'lifestyle',
        headerName: 'Lifestyle',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'era',
        headerName: 'Era',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'features',
        headerName: 'Features',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'distribution',
        headerName: 'Distribution',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
    {
        field: 'description',
        headerName: 'Description',
        description: 'This column has a value getter and is not sortable.',
        width: 90
    },
];

interface gridData{
    data:{
        id?:string;
        name?:string;
    }
}

export const DataTable= () => {
    let { dinoData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => setOpen(true)

    let handleClose = () => setOpen(false)

    let deleteData = async () => {
        await serverCalls.delete(`${gridData[0]}`)
        getData();
    }

    console.log(gridData) // a list of id's from checked rows

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <h2> Dinos In Inventory </h2>
            <DataGrid
            rows={dinoData}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            />

<Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

          {/*Dialog Pop Up begin */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update A Dinosaur</DialogTitle>
                <DialogContent>
                    <DialogContentText>Dino id: {gridData[0]}</DialogContentText>
                    <DinoForm id={`${gridData[0]}`} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cancel</Button>

                </DialogActions>
            </Dialog>
        </Box>
        
    )
}