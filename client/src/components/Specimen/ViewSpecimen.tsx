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
    const [identifier, setIdentifier] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(true);
    const [specimenDetails, setSpecimenDetails] = useState<any>(null) // define type here.

    const handleClose = () =>{
        setOpen(false);
        setViewSpecimen(false);
    }

    const onIdentifierChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIdentifier(event.target.value)
    }

    const onSubmit = () => {
        validateInput(identifier)
        if (!isError && !specimenDetails){
            fetchSpecimenDetails()
        }
    }

    const fetchSpecimenDetails = async () => {
        try {
            const response = await fetch(`/api/specimen/${identifier}`);
            const responseJson = await response.json();
            const specimenId = responseJson.SpecimenID;
            console.log(responseJson)

            const responseCollectingEvent = await fetch(`/api/collectingEvent/${responseJson.CollectingEventID}`);
            const responseCollectingEventJson = await responseCollectingEvent.json();
            console.log(responseCollectingEventJson)

            const [
                responseSpecimenAttributes,
                responseSpecimenBioAttributes,
                responseSpecimenDetLabels,
                responseSpecimenMiscCodes,
                responseLocality,
                responseMethod,
                responseGeoReference
              ] = await Promise.all([
                fetch(`/api/specimenAttributes/specimenId/${specimenId}`),
                fetch(`/api/specimenBioAttributes/specimenId/${specimenId}`),
                fetch(`/api/specimenDetLabels/specimenId/${specimenId}`),
                fetch(`/api/specimenMiscCodes/specimenId/${specimenId}`),
                fetch(`/api/locality/${responseCollectingEventJson.LocalityID}`),
                fetch(`/api/locality/${responseCollectingEventJson.MethodID}`),
                fetch(`/api/geoReference/${responseCollectingEventJson.LocalityID}`)
              ]);
              
              const [
                responseSpecimenAttributesJson,
                responseSpecimenBioAttributesJson,
                responseSpecimenDetLabelsJson,
                responseSpecimenMiscCodesJson,
                responseLocalityJson,
                responseMethodJson,
                responseGeoReferenceJson
              ] = await Promise.all([
                responseSpecimenAttributes?.status === 200 ? responseSpecimenAttributes.json() : null,
                responseSpecimenBioAttributes?.status === 200 ? responseSpecimenBioAttributes.json() : null,
                responseSpecimenDetLabels?.status === 200 ? responseSpecimenDetLabels.json() : null,
                responseSpecimenMiscCodes?.status === 200 ? responseSpecimenMiscCodes.json() : null,
                responseLocality?.status === 200 ? responseLocality.json() : null,
                responseMethod?.status === 200 ? responseMethod.json() : null,
                responseGeoReference?.status === 200 ? responseGeoReference.json() : null
            ]);
              


            console.log(responseCollectingEventJson);
            console.log(responseLocalityJson);
            console.log(responseMethodJson);
            console.log(responseSpecimenAttributesJson);
            console.log(responseSpecimenBioAttributesJson);
            console.log(responseSpecimenDetLabelsJson);
            console.log(responseSpecimenMiscCodesJson);
            console.log(responseGeoReferenceJson);
            // 12.5 (air)kilometers NWMena, Rich Mountain Fire Tower
            var local = "".concat(responseLocalityJson.RTNPnumb, " ", responseLocalityJson.RTNPmeas, " ", responseLocalityJson.RTNPar, " ",
                responseLocalityJson.RTNPdir, " ", responseLocalityJson.NamedPlace, " ", responseLocalityJson.LocalityName);
            setSpecimenDetails({specimenId: responseJson.Identifier, 
                groupName: responseJson.SpecimenGroupName, 
                collectingEventID: responseCollectingEventJson.CollectingEventID,
                locality: local.trim(),
                preparation: responseSpecimenAttributesJson.Preparation,
                typeSpecimen: responseSpecimenAttributesJson.IsType,
                withMicrovial: responseSpecimenAttributesJson.WithMicrovial,
                specimenDamaged: responseSpecimenAttributesJson.SpecimenDamaged,
                specimenLost: responseSpecimenAttributesJson.SpecimenLost,
                stage1: responseSpecimenBioAttributesJson.Stage,
                stage2: responseSpecimenBioAttributesJson.Stage2,
                stage3: responseSpecimenBioAttributesJson.Stage3,
                number1: responseSpecimenBioAttributesJson.Number,
                number2: responseSpecimenBioAttributesJson.Number2,
                number3: responseSpecimenBioAttributesJson.Number3,
                sex: responseSpecimenBioAttributesJson.Sex,
                host: responseSpecimenBioAttributesJson.Host,
                emergencyDate: responseSpecimenBioAttributesJson.EmergeDay,
                remarks: responseSpecimenBioAttributesJson.Remarks,
                code: responseSpecimenMiscCodesJson.Code,
                codeType: responseSpecimenMiscCodesJson.CodeType,
                codeDescription: responseSpecimenMiscCodesJson.CodeDescription
            })
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
    
    const autoSubmitIdentifier = React.useMemo(() =>
        debounce(
            (value) => {
                validateInput(value)
            },
            400
        ), [])

    useEffect(()=>{
        autoSubmitIdentifier(identifier);
        if (!isError && !specimenDetails){
            fetchSpecimenDetails()
        }
    }, [autoSubmitIdentifier, identifier, isError, fetchSpecimenDetails, specimenDetails])

    return (
        <Dialog fullWidth open={open} onClose={handleClose} maxWidth='sm'>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <DialogTitle variant='h5'>View Specimen Record.</DialogTitle>
                <DialogContent>
                    <DialogContentText>Enter Barcode</DialogContentText>
                <TextField
                    error={isError}
                    autoFocus
                    margin="dense"
                    id="Identifier"
                    label="Identifier"
                    variant="standard"
                    value={identifier}
                    onChange={onIdentifierChange}
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