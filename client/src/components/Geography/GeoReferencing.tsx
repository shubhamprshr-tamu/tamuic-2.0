import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import './../css/Table.css'

const GeoReferencing = () => {
  const [geography, setGeography] = useState('');
  const [parent, setParent] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    // You can access the form values from the state variables (locality_id, locality)
    // Perform any necessary processing or API calls
    // Reset the form if needed
    setGeography('');
    setParent('');
  };

  const handleGeographyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // TODO
    // fetch records to suggestion table
    setGeography(inputValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <table>
            <tr>
                <td>
                    <form className='formContainer' onSubmit={handleSubmit}>
                        <Typography variant="h5" align="center" gutterBottom>
                            Filter Localities
                        </Typography>
                        <table>
                        <tr>
                                <td>
                                    <label htmlFor="locality_id">Locality ID</label>
                                </td>
                                <td>
                                    <input
                                        tabIndex={4}
                                        type="text"
                                        id="locality_id"
                                        // value={locality_id}
                                        // onChange={handleLocalityIdChange}
                                    />
                                </td>               
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="locality">Locality Name/Named Place</label>
                                </td>
                                <td>
                                    <input 
                                        size={40}
                                        tabIndex={5}
                                        type="text"
                                        id="locality"
                                        // value={locality}
                                        // onChange={handleLocalityChange}
                                    />
                                </td>               
                                
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="geography">Geography</label>
                                </td>
                                <td>
                                    <input 
                                        size={40}
                                        tabIndex={5}
                                        type="text"
                                        id="geography"
                                        value={geography}
                                        onChange={handleGeographyChange}
                                    />
                                </td>               
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="Verification Status">Verification Status:</label>
                                </td>
                                <td>
                                    <select id="verificationStatus" name="verificationStatus" tabIndex={7}><option value="">Verification Status</option>
                                        <option value="1">georeferencing complete</option>
                                        <option value="2">data from label undecipherable - not georeferenced</option>
                                        <option value="3">dubious locality description - not georeferenced</option>
                                        <option value="4">incomplete locality data - not georeferenced</option>
                                        <option value="5">locality cannot be located - not georeferenced</option>
                                        <option value="6">no locality data - not georeferenced</option>
                                        <option value="7">not checked - not georeferenced</option>
                                    </select>
                                </td>               
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="Verification Type">Verification Type</label>
                                </td>
                                <td>
                                    <select id="verificationClass" name="verificationClass" tabIndex={8}><option value="">Verification Class</option>
                                        <option value="NULL">NULL</option>
                                        <option value="*c">*c</option>
                                        <option value="*ic">*ic</option>
                                        <option value="ic">ic</option>
                                    </select>
                                </td>               
                                
                            </tr>     

                        </table>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={!geography || !parent}
                        >
                            Submit
                        </Button>

                    </form>
                </td>
            </tr>
        </table>

    </div>
  );
};

export default GeoReferencing;
