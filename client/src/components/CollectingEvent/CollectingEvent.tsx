import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';

const MyForm = () => {
  const [locality_id, setLocalityId] = useState('');
  const [locality, setLocality] = useState('');
  const [verbLat, setVerbLat] = useState('');
  const [verbLon, setVerbLon] = useState('');
  const [verbElev, setVerbElev] = useState('');
  const [geography, setGeography] = useState('');
  const [method, setMethod] = useState('');
  const [habitat_info, setHabitatInfo] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    // You can access the form values from the state variables (locality_id, locality)
    // Perform any necessary processing or API calls
    // Reset the form if needed
    setLocalityId('');
    setLocality('');
    setVerbLat('');
    setVerbLon('');
    setVerbElev('');
    setGeography('');
    setMethod('');
    setHabitatInfo('');
  };

  const handleLocalityIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setLocalityId(inputValue);
  };

  const handleLocalityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setLocality(inputValue);
  };

  const handleMethodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setMethod(inputValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <table>
            <tr>
                <td>
                    <form style={{ display: 'grid', gap: '8px', alignItems: 'center' }} onSubmit={handleSubmit}>
                        <Typography variant="h5" align="center" gutterBottom>
                            Collecting Event Details
                        </Typography>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="method">Method</label>
                                </td>
                                <td>
                                    <input style={{width:15}}
                                        type="text"
                                        id="method"
                                        value={method}
                                        onChange={handleMethodChange}
                                    />
                                </td>               
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="habitat_info">Habitat Info</label>
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        id="habitat_info"
                                        value={habitat_info}
                                    />
                                </td>               
                                
                            </tr>       
                        </table>
                    </form>
                </td>
                <td>
                    <form style={{ display: 'grid', gap: '8px', alignItems: 'center' }} onSubmit={handleSubmit}>
                        <Typography variant="h5" align="center" gutterBottom>
                            Locality Details
                        </Typography>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="locality_id">Locality ID</label>
                                </td>
                                <td>
                                    <input style={{width:40}}
                                        type="text"
                                        id="locality_id"
                                        value={locality_id}
                                        onChange={handleLocalityIdChange}
                                    />
                                </td>               
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="locality">Locality</label>
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        id="locality"
                                        value={locality}
                                        onChange={handleLocalityChange}
                                    />
                                </td>               
                                
                            </tr>     

                            <tr>
                                <td>
                                    <label htmlFor="verbLat">VerbLat</label>
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        id="verbLat"
                                        value={verbLat}
                                    />
                                </td>               
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="verbLon">VerbLon</label>
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        id="verbLon"
                                        value={verbLon}
                                    />
                                </td>               
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="verbElev">VerbElev</label>
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        id="verbElev"
                                        value={verbElev}
                                    />
                                </td>               
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="geography">Geography</label>
                                </td>
                                <td>
                                    <input 
                                        type="text"
                                        id="geography"
                                        value={geography}
                                    />
                                </td>               
                                
                            </tr>       
                
                            
                        </table>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={!locality_id || !locality}
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

export default MyForm;
