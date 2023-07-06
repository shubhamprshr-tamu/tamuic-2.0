import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';
import './../css/Table.css'

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
    if (inputValue.length >= 3) {
        
    }
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

  const possibleErrorClick = () => {
    // Functionality for possible error click event
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <table>
            <tr>
                <td>
                    <form className='formContainer' onSubmit={handleSubmit}>
                        <Typography variant="h5" align="center" gutterBottom>
                            Collecting Event Details
                        </Typography>
                        <table style={{ border: '1px solid' }}>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>
                                        <center>
                                        <b>Collecting Event Details </b>
                                        <a href="#" className="link" onClick={() => {}}>(Search/Clone)</a>
                                        </center>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan={2} style={{ padding: '0px' }}>
                                        <table style={{ marginRight: '-4px', marginLeft: '-2px' }}>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="startDate">Event date from</label>
                                                    </td>
                                                    <td>
                                                        <table style={{ margin: '-15px 0px 0px 6px' }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <label htmlFor="mm">mm</label>
                                                                    </td>
                                                                    <td>
                                                                        <label htmlFor="dd">dd</label>
                                                                    </td>
                                                                    <td>
                                                                        <label htmlFor="yyyy">yyyy</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input
                                                                        id="startDate_month"
                                                                        maxLength={2}
                                                                        name="startDate.month"
                                                                        size={2}
                                                                        tabIndex={2}
                                                                        type="text"
                                                                        value="--"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                        id="startDate_day"
                                                                        maxLength={2}
                                                                        name="startDate.day"
                                                                        size={2}
                                                                        tabIndex={3}
                                                                        type="text"
                                                                        value="--"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                        id="startDate_year"
                                                                        maxLength={4}
                                                                        name="startDate.year"
                                                                        size={4}
                                                                        tabIndex={4}
                                                                        type="text"
                                                                        value="----"
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td style={{ width: '18px' }}>
                                                        <label htmlFor="endDate">to</label>
                                                    </td>
                                                    <td>
                                                        <table style={{ margin: '-15px 0px 0px 6px' }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <label htmlFor="mm">mm</label>
                                                                    </td>
                                                                    <td>
                                                                        <label htmlFor="dd">dd</label>
                                                                    </td>
                                                                    <td>
                                                                        <label htmlFor="yyyy">yyyy</label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <input
                                                                        id="endDate_month"
                                                                        maxLength={2}
                                                                        name="endDate.month"
                                                                        size={2}
                                                                        tabIndex={35}
                                                                        type="text"
                                                                        value="--"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                        id="endDate_day"
                                                                        maxLength={2}
                                                                        name="endDate.day"
                                                                        size={2}
                                                                        tabIndex={36}
                                                                        type="text"
                                                                        value="--"
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <input
                                                                        id="endDate_year"
                                                                        maxLength={4}
                                                                        name="endDate.year"
                                                                        size={4}
                                                                        tabIndex={37}
                                                                        type="text"
                                                                        value="----"
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>
                                                        <table style={{ border: '1px solid', width: '354px' }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                        <center>
                                                                        <b>Collectors</b>
                                                                        <a href="#" className="link" style={{ float: 'right' }} tabIndex={-1}>
                                                                            Add
                                                                        </a>
                                                                        </center>
                                                                    </td>
                                                                </tr>
                                                                <tr id="pos0">
                                                                    <td>
                                                                        <a href="#" className="link" onClick={() => {}} tabIndex={-1}>
                                                                        New
                                                                        </a>
                                                                        <input
                                                                        id="collectors_0__name"
                                                                        name="collectors[0].name"
                                                                        onInput={() => {}}
                                                                        size={40}
                                                                        tabIndex={8}
                                                                        type="text"
                                                                        value=""
                                                                        />
                                                                        
                                                                        <input
                                                                        id="collectors_0__ID"
                                                                        name="collectors[0].ID"
                                                                        readOnly
                                                                        size={4}
                                                                        style={{ display: 'none' }}
                                                                        tabIndex={-1}
                                                                        type="text"
                                                                        value=""
                                                                        />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="collectingMethodName">Method</label>
                                                    </td>
                                                    <td>
                                                        <input
                                                        id="collectingMethodName"
                                                        name="collectingMethodName"
                                                        onInput={() => {}}
                                                        size={40}
                                                        tabIndex={19}
                                                        type="text"
                                                        value=""
                                                        />
                                                        <input
                                                        id="collectingMethodID"
                                                        name="collectingMethodID"
                                                        readOnly
                                                        size={4}
                                                        style={{ display: 'none' }}
                                                        tabIndex={-1}
                                                        type="text"
                                                        value=""
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="habitatInfo">Habitat Info</label>
                                                    </td>
                                                    <td>
                                                        <input
                                                        id="habitatInfo"
                                                        name="habitatInfo"
                                                        size={40}
                                                        tabIndex={20}
                                                        type="text"
                                                        value=""
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="checkUpdate">Check/Update</label>
                                                    </td>
                                                    <td>
                                                        <select id="checkUpdate" name="checkUpdate" tabIndex={21}>
                                                        <option value="">Select</option>
                                                        <option value="unsure locality">unsure locality</option>
                                                        <option value="unsure date">unsure date</option>
                                                        <option value="unsure collector">unsure collector</option>
                                                        <option value="unsure method">unsure method</option>
                                                        <option value="unsure habit">unsure habit</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="eventRemarks">Event Remarks</label>
                                                    </td>
                                                    <td>
                                                        <textarea cols={20} id="eventRemarks" name="eventRemarks" rows={2} tabIndex={22}></textarea>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <label htmlFor="possibleErrorFlag">Possible Error?</label>
                                                    </td>
                                                    <td>
                                                        <input id="possibleErrorFlag" name="possibleErrorFlag" onClick={possibleErrorClick} tabIndex={23} type="checkbox" value="true" />
                                                        <input name="possibleErrorFlag" type="hidden" value="false" />
                                                    </td>
                                                </tr>
                                                <tr id="possibleError" style={{ display: 'none' }}>
                                                    <td>
                                                        <label htmlFor="possibleErrorReason">Error Reason</label>
                                                    </td>
                                                    <td>
                                                        <textarea cols={20} id="possibleErrorReason" name="possibleErrorReason" rows={2} tabIndex={24}></textarea>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}>
                                                        <div id="additionalDetails" style={{}}>
                                                        <table style={{ border: '1px solid', width: 354 }}>
                                                            <tbody>
                                                                <tr>
                                                                    <td colSpan={2}>
                                                                    <center>
                                                                        <b>Additional Details</b>
                                                                    </center>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label htmlFor="collectorsCode">Collector's Code</label>
                                                                    </td>
                                                                    <td>
                                                                    <input id="collectorsCode" name="collectorsCode" tabIndex={25} type="text" value="" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label htmlFor="miscCode">Misc Code</label>
                                                                    </td>
                                                                    <td>
                                                                    <input id="miscCode" name="miscCode" tabIndex={26} type="text" value="" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                    <label htmlFor="johnsonLotCode">Johnson Lot Code</label>
                                                                    </td>
                                                                    <td>
                                                                    <input id="johnsonLotCode" name="johnsonLotCode" tabIndex={27} type="text" value="" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </td>
                <td>
                    <form className='formContainer' onSubmit={handleSubmit}>
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
