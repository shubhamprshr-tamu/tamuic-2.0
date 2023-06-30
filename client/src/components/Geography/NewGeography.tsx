import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import './../css/Table.css'

const NewGeography = () => {
  const [geography_name, setGeographyName] = useState('');
  const [parent, setParent] = useState('');
  const [remarks, setRemarks] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    // You can access the form values from the state variables (locality_id, locality)
    // Perform any necessary processing or API calls
    // Reset the form if needed
    setGeographyName('');
    setParent('');
    setRemarks('');
  };

  const handleGeographyNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // TODO
    // fetch records to suggestion table
    setGeographyName(inputValue);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <table>
            <tr>
                <td>
                    <form className='formContainer' onSubmit={handleSubmit}>
                        <Typography variant="h5" align="center" gutterBottom>
                            New Geography
                        </Typography>
                        <table>
                            <tr>
                                <td>
                                    <label htmlFor="geography_name">Geography Name</label>
                                </td>
                                <td>
                                    <input 
                                        size={40}
                                        type="text"
                                        id="geography_name"
                                        value={geography_name}
                                        onChange={handleGeographyNameChange}
                                    />
                                </td>               
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="Geography Type">Geography Type</label>
                                </td>
                                <td>
                                    <select id="type" name="type">
                                        <option value="">Type</option>
                                        <option value="county">County</option>
                                        <option value="state">State</option>
                                        <option value="country">Country</option>
                                        <option value="other">Other</option>
                                    </select>
                                </td>               
                                
                            </tr>     

                            <tr>
                                <td>
                                    <label htmlFor="Parent">Parent</label>
                                </td>
                                <td>
                                    <input 
                                        size={40}
                                        type="text"
                                        id="parent"
                                        value={parent}
                                    />
                                </td>              
                                
                            </tr>

                            <tr>
                                <td>
                                    <label htmlFor="remarks">Remarks</label>
                                </td>
                                <td>
                                    <textarea style={{width: 400}}
                                        rows={2}
                                        cols={20}
                                        id="remarks"
                                        value={remarks}
                                    />
                                </td>               
                            </tr>
                        </table>

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={!geography_name || !parent}
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

export default NewGeography;
