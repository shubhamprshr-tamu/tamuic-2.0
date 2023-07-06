import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Tab} from '@mui/material'

type SpecimenDetails = {
    specimenId: string,
    groupName: string,
    locality: string,
    preparation: string,
    typeSpecimen: string,
    withMicrovial: string,
    specimenDamaged: string,
    specimenLost: string,
    stage1: string,
    stage2: string,
    stage3: string,
    number1: string,
    number2: string,
    number3: string,
    sex: string,
    host: string,
    emergencyDate: string,
    remarks: string,
    code: string,
    codeType: string,
    codeDescription: string
}


const SpecimenTable = ({specimenId, groupName, locality,
    preparation,
    typeSpecimen,
    withMicrovial,
    specimenDamaged,
    specimenLost,
    stage1,
    stage2,
    stage3,
    number1,
    number2,
    number3,
    sex,
    host,
    emergencyDate,
    remarks,
    code,
    codeType,
    codeDescription }: SpecimenDetails) => {

    // const collectingEventDetails = ({})
    return (
        <TableContainer component={Paper}>
            <Table sx={{ border:'0.25 rem solid'}}>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#bea6e4' }}>
                        <TableCell>Bar Code</TableCell>
                        <TableCell>{specimenId}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ backgroundColor: '#e6e6fa' }}>
                        <TableCell colSpan={2} align='center'>
                            Specimen Details
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Taxonomy Name</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Group Name</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow sx={{ backgroundColor: '#e6e6fa' }}>
                        <TableCell colSpan={2} align='center'>
                            Collecting Event Details
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Locality</TableCell>
                        <TableCell>{locality}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Date & Collectors</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Geography</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Method</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Habitat Info</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow sx={{ backgroundColor: '#e6e6fa' }}>
                        <TableCell colSpan={2} align='center'>
                            Attributes
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Preparation</TableCell>
                        <TableCell>{preparation}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Type Specimen</TableCell>
                        <TableCell>{typeSpecimen}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>With Microvial</TableCell>
                        <TableCell>{withMicrovial}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Specimen Damaged</TableCell>
                        <TableCell>{specimenDamaged}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Specimen Lost</TableCell>
                        <TableCell>{specimenLost}</TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow sx={{ backgroundColor: '#e6e6fa' }}>
                        <TableCell colSpan={2} align='center'>
                            Determination Labels
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='center'>
                            No determination labels found for this specimen
                        </TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow sx={{ backgroundColor: '#e6e6fa' }}>
                        <TableCell colSpan={2} align='center'>
                            Biological Attributes
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Stage1</TableCell>
                        <TableCell>{stage1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Number1</TableCell>
                        <TableCell>{number1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Stage2</TableCell>
                        <TableCell>{stage2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Number2</TableCell>
                        <TableCell>{number2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Stage3</TableCell>
                        <TableCell>{stage3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Number3</TableCell>
                        <TableCell>{number3}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sex</TableCell>
                        <TableCell>{sex}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Host</TableCell>
                        <TableCell>{host}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Emergence Date</TableCell>
                        <TableCell>{emergencyDate}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Remarks</TableCell>
                        <TableCell>{remarks}</TableCell>
                    </TableRow>
                </TableBody>
                <TableBody>
                    <TableRow sx={{ backgroundColor: '#e6e6fa' }}>
                        <TableCell colSpan={2} align='center'>
                            Miscellaneous Codes
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Code Type</TableCell>
                        <TableCell>{codeType}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell>{code}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Code Description</TableCell>
                        <TableCell>{codeDescription}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SpecimenTable;