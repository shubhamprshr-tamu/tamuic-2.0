import React, { useState, useEffect, useMemo, ChangeEvent } from 'react';
import { debounce } from '@mui/material/utils';

import { Typography,
    Button, 
    TextField, 
    Container,
    DialogContent, Dialog, DialogTitle, DialogContentText, DialogActions } from '@mui/material'
import SpecimenTable from './SpecimenTable';

const ViewSpecimen = ({setViewSpecimen}: {setViewSpecimen: Function}) => {
    const [open, setOpen] = useState<boolean> (true); 
    const [specimenId, setSpecimenId] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(true);
    const [specimenDetails, setSpecimenDetails] = useState<any>(null) // define type here.

    const handleClose = () =>{
        setOpen(false);
        setViewSpecimen(false);
    }

    const onSpecimenIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSpecimenId(event.target.value)
    }

    const onSubmit = () => {
        validateInput(specimenId)
        if (!isError && !specimenDetails){
            fetchSpecimenDetails()
        }
    }

    const fetchSpecimenDetails = async () => {
        try {
            const response = await fetch (`/api/specimen/${specimenId}`);
            const responseJson = await response.json();
            console.log(responseJson.CollectingEventID)
            const responseCollectingEvent = await fetch (`/api/collectingEvent/${responseJson.CollectingEventID}`);
            const responseCollectingEventJson = await responseCollectingEvent.json();
            setSpecimenDetails({specimenId: responseJson.SpecimenID, groupName: responseJson.SpecimenGroupName, collectingEventID: responseJson.CollectingEventID})
            console.log(responseCollectingEventJson)
            console.log("check")
        } catch (e){
            console.log(e)
        }
    }

    const validateInput = (value: string) => {
        if(!value.startsWith('X') || value.length!=8) {
            setIsError(true)
        }
        else {
            setIsError(false)
        }
    }
    
    const autoSubmitSpecimenId = React.useMemo(() =>
        debounce(
            (value) => {
                validateInput(value)
            },
            400
        ), [])

    useEffect(()=>{
        autoSubmitSpecimenId(specimenId);
        if (!isError && !specimenDetails){
            fetchSpecimenDetails()
        }
    }, [autoSubmitSpecimenId, specimenId, isError, fetchSpecimenDetails, specimenDetails])

    return (
        <Dialog fullWidth open={open} onClose={handleClose} maxWidth='sm'>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <DialogTitle variant='h5'>View Specimen Record.</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter Specimen Id.</DialogContentText>
                <TextField
                    error={isError}
                    autoFocus
                    margin="dense"
                    id="SpecimenId"
                    label="Specimen Id"
                    variant="standard"
                    value={specimenId}
                    onChange={onSpecimenIdChange}
                />
                </DialogContent>
            </Container>
            {specimenDetails ? <SpecimenTable {...specimenDetails}/> : null}
            <DialogActions>
                <Button onClick={handleClose}><Typography>Cancel</Typography></Button>
                <Button onClick={onSubmit}><Typography>Submit</Typography></Button>
            </DialogActions>
        </Dialog>
    )
}

export default ViewSpecimen;