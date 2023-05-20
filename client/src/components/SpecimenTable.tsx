import React from 'react'
import { Table, TableBody, TableContainer, TableHead, TableCell, TableRow, Paper, Tab} from '@mui/material'

type SpecimenDetails = {
    specimenId: string,
    groupName: string
}


const SpecimenTable = ({specimenId, groupName }: SpecimenDetails) => {


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
            </Table>
        </TableContainer>
    )
}

export default SpecimenTable;