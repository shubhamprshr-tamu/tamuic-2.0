import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Tab} from '@mui/material'

type SpecimenDetails = {
    specimenId: string,
    groupName: string,
    collectingEventID: number
}


const SpecimenTable = ({specimenId, groupName, collectingEventID }: SpecimenDetails) => {

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
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Date & Collectors</TableCell>
                        <TableCell>{collectingEventID}</TableCell>
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
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Type Specimen</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>With Microvial</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Specimen Damaged</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Specimen Lost</TableCell>
                        <TableCell>{groupName}</TableCell>
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
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Number1</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Stage2</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Number2</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Stage3</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Number3</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sex</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Host</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Emergence Date</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Remarks</TableCell>
                        <TableCell>{groupName}</TableCell>
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
                        <TableCell></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Code</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Code Description</TableCell>
                        <TableCell>{groupName}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SpecimenTable;