import React, { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import ViewSpecimen from '../Specimen/ViewSpecimen';
import './../css/Table.css'

type MainContentProps = {
  setViewSpecimen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MainBody = () => {
  const [viewSpecimen, setViewSpecimenState] = useState(false);

  const toggleViewSpecimen = () => {
    setViewSpecimenState(!viewSpecimen);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Link style={{paddingBottom : 40}} onClick={toggleViewSpecimen}>
        <Typography variant="body1" align="center">
          View Specimen
        </Typography>
      </Link>
      {viewSpecimen && <ViewSpecimen setViewSpecimen={setViewSpecimenState} />}
      <table>
          <tr>
              <td>
                  <form id="specimenCaptureForm" className='formContainer'>
                      <table>
                          <tr>
                            <td>
                              <td>
                                  <label htmlFor="barCode">Bar Code</label>
                              </td>
                              <td>
                                  <input 
                                      type="text"
                                      id="barCode"
                                      // value={barcode}
                                  />
                              </td>
                            </td> 
                            <td></td>
                          </tr>
                      </table>
                      {/* <table>
                        <th>
                          Specimen Details
                        </th>
                        <tr>
                          <td>
                              <td>
                                  <label htmlFor="Taxonomy Name (combo)">Taxonomy Name (combo)</label>
                              </td>
                              <td>
                                  <input 
                                      type="text"
                                      id="taxonomyName"
                                      // value={taxonomyName}
                                  />
                              </td>
                          </td>
                          <td>
                              <td>
                                  <label htmlFor="Group Name">Group Name</label>
                              </td>
                              <td>
                                  <input 
                                      type="text"
                                      id="groupName"
                                      // value={taxonomyName}
                                  />
                              </td>
                          </td>
                        </tr>
                      </table> */}
                      <table id="specimenDetailsTable" className="specimenDetailsTableCss">
                        <tbody>
                          <tr>
                            <td></td>
                            <td colSpan={5}>
                              <span style={{ paddingLeft: '20px' }}><b>Specimen Details</b></span>
                              <span style={{ float: 'right' }}>
                                <a href="#" tabIndex={-1}>Lock</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor="specimenDetails_taxonomyName">Taxonomy Name (combo)</label>
                            </td>
                            <td>
                              <input id="specimenDetails_taxonomyName" name="specimenDetails.taxonomyName" size={25} tabIndex={2} type="text" value="" />
                            </td>
                            <td>
                              <label htmlFor="specimenDetails_groupName">Group Name</label>
                            </td>
                            <td>
                              <input id="specimenDetails_groupName" name="specimenDetails.groupName" size={25} tabIndex={3} type="text" value="" />
                            </td>
                            <td>
                              <input id="specimenDetails_groupID" name="specimenDetails.groupID" size={4} style={{ display: 'none' }} tabIndex={-1} type="text" value="" />
                              <input id="specimenDetails_locked" name="specimenDetails.locked" type="hidden" value="False" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table id="collectingEventTable" style={{ border: '1px solid', width: '100%', marginTop: '5px' }}>
                        <tbody>
                          <tr>
                            <td colSpan={2}>
                              <span style={{ paddingLeft: '80px' }}><b>Collecting Event Details</b> <a href="#" className="link" tabIndex={-1} style={{ marginLeft: '30px' }}>Show detailed Info</a></span>
                              <span style={{ float: 'right' }}>
                                <a href="#" className="link" tabIndex={-1}>Lock</a>&nbsp;&nbsp;&nbsp;
                                <a href="#" className="link" tabIndex={-1}>Search</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor="collectingEventDetails_collectingEventName">Locality</label>
                            </td>
                            <td>
                              <input id="collectingEventDetails_collectingEventName" name="collectingEventDetails.collectingEventName" size={70} tabIndex={-1} type="text" value="" />
                              <input id="collectingEventDetails_collectingEventID" name="collectingEventDetails.collectingEventID"  size={4} style={{ display: 'none' }} tabIndex={-1} type="text" value="" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor="collectingEventDetails_collectingEventCollectors">Date &amp; Collectors</label>
                            </td>
                            <td>
                              <input id="collectingEventDetails_collectingEventCollectors" name="collectingEventDetails.collectingEventCollectors" size={70} tabIndex={-1} type="text" value="" />
                              <input id="collectingEventDetails_locked" name="collectingEventDetails.locked" type="hidden" value="False" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      
                      <table id="attributesTable" style={{ border: '1px solid', width: '100%', marginTop: '5px' }}>
                        <tbody>
                          <tr>
                            <td colSpan={4}>
                              <span style={{ paddingLeft: '180px' }}><b>Attributes</b></span>
                              <span style={{ float: 'right' }}>
                                <a href="#" className="link" tabIndex={-1}>Lock</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan={2}>
                              <label htmlFor="attributes_preparation">Preparation</label>
                              <select id="attributes_preparation" name="attributes.preparation" tabIndex={4}>
                                <option value="4">Pinned</option>
                                <option value="5">Envelope</option>
                                <option value="6">Slide</option>
                                <option value="7">Tissue</option>
                                <option value="8">Alcohol</option>
                                <option value="9">DNA Extraction</option>
                              </select>
                            </td>
                            <td>
                              <label htmlFor="attributes_type">Type Specimen</label>
                              <select id="attributes_type" name="attributes.type" tabIndex={5}>
                                <option value="0">No</option>
                                <option value="1">Holotype</option>
                                <option value="2">Allotype</option>
                                <option value="3">Paratype</option>
                              </select>
                            </td>
                            <td width="30%"></td>
                          </tr>
                          <tr>
                            <td>
                              <input id="attributes_withMicrovial" name="attributes.withMicrovial" onClick={() => {}} tabIndex={6} type="checkbox" value="true" />
                              <input name="attributes.withMicrovial" type="hidden" value="false" />
                              <label htmlFor="attributes_withMicrovial">With Microvial</label>
                            </td>
                            <td>
                              <input id="attributes_specimenDamaged" name="attributes.specimenDamaged" onClick={() => {}} tabIndex={7} type="checkbox" value="true" />
                              <input name="attributes.specimenDamaged" type="hidden" value="false" />
                              <label htmlFor="attributes_specimenDamaged">Specimen Damaged</label>
                            </td>
                            <td>
                              <input id="attributes_specimenLost" name="attributes.specimenLost" onClick={() => {}} tabIndex={8} type="checkbox" value="true" />
                              <input name="attributes.specimenLost" type="hidden" value="false" />
                              <label htmlFor="attributes_specimenLost">Specimen Lost</label>
                              <input id="attributes_locked" name="attributes.locked" type="hidden" value="False" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      
                      <table id="determinationLabelsTable" width="100%" style={{ border: '1px solid' }}>
                        <tbody>
                          <tr>
                            <td colSpan={4}>
                              <span style={{ paddingLeft: '180px' }}><b>Determination Labels</b>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="#" className="link" tabIndex={-1}>Add</a>
                              </span>
                              <span style={{ float: 'right' }}>
                                <a href="#" className="link" tabIndex={-1} onClick={() => {}}>Lock</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor="determinationLabels_determiners[0]_name">Determiner</label>
                            </td>
                            <td>
                              <label htmlFor="determinationLabels_determiners[0]_date">Date</label>
                            </td>
                            <td>
                              <label htmlFor="determinationLabels_determiners[0]_specimen">Determined As</label>
                            </td>
                            <td>
                              <label htmlFor="determinationLabels_determiners[0]_detlab">Det.label?</label>
                            </td>
                          </tr>

                          <tr id="pos0">
                            <td>
                              <a href="#" className="link" tabIndex={-1} onClick={() => {}}>New</a>
                              <input id="determinationLabels_determiners_0__name" name="determinationLabels.determiners[0].name" tabIndex={9} type="text" value="" />
                              {/* <a href="#" style={{ textDecoration: 'none' }} className="link" tabIndex={-1} onClick={() => {}}>x</a> */}
                              <input id="determinationLabels_determiners_0__ID" name="determinationLabels.determiners[0].ID" readOnly size={4} style={{ display: 'none' }} tabIndex={-1} type="text" value="" />
                            </td>
                            <td>
                              <input id="determinationLabels_determiners_0__date" name="determinationLabels.determiners[0].date" size={10} tabIndex={10} type="text" value="" />
                            </td>
                            <td>
                              <input id="determinationLabels_determiners_0__specimen" name="determinationLabels.determiners[0].specimen" onInput={() => {}} size={43} tabIndex={11} type="text" value="" />
                            </td>
                            <td>
                              <select id="determinationLabels_determiners_0__detlab" name="determinationLabels.determiners[0].detlab" tabIndex={31}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                              </select>
                            </td>
                            <td width="12%">
                              <center>
                                <a href="#" className="link" tabIndex={-1} onClick={() => {}}>
                                  Copy Combo
                                </a>
                              </center>
                            </td>
                          </tr>
                          <input id="determinationLabels_locked" name="determinationLabels.locked" type="hidden" value="False" />
                        </tbody>
                      </table>
                      
                      <table id="biologicalAttributesTable" width="100%" style={{ border: '1px solid' }}>
                        <tbody>
                          <tr>
                            <td colSpan={8}>
                              <a href="#" className="link" tabIndex={-1}>Add</a>&nbsp;&nbsp;
                              <a href="#" className="link" tabIndex={-1}>Delete</a>
                              <span style={{ paddingLeft: '180px' }}><b>Biological Attributes</b></span>
                              <span style={{ float: 'right' }}>
                                <a href="#" className="link" tabIndex={-1} onClick={() => {}}>Lock</a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor="bioAttributes_stage">Stage1</label>
                            </td>
                            <td>
                              <select id="bioAttributes_stage" name="bioAttributes.stage" tabIndex={31}>
                                <option value="9">U</option>
                                <option value="6">worker</option>
                                <option value="7">alate</option>
                                <option value="8">soldier</option>
                                <option value="1">adult</option>
                                <option value="4">egg</option>
                                <option value="2">larvae</option>
                                <option value="5">nymph</option>
                                <option value="3">pupae</option>
                                <option value="11">immature</option>
                              </select>
                            </td>
                            <td>
                              <label htmlFor="bioAttributes_number">Number1</label>
                            </td>
                            <td>
                              <input id="bioAttributes_number" name="bioAttributes.number" tabIndex={34} type="text" value="" />
                            </td>
                            <td>
                              <label htmlFor="bioAttributes_sex">Sex</label>
                            </td>
                            <td>
                              <select id="bioAttributes_sex" name="bioAttributes.sex" tabIndex={32}>
                                <option value="">Sex</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Male and Female">Male and Female</option>
                              </select>
                            </td>
                            <td>
                              <label htmlFor="bioAttributes_host">Host</label>
                            </td>
                            <td>
                              <input id="bioAttributes_host" name="bioAttributes.host" tabIndex={34} type="text" value="" />
                            </td>
                          </tr>

                          <tr id="s2" style={{ display: 'none' }}>
                            <td>
                              <label htmlFor="bioAttributes_stage2">Stage2</label>
                            </td>
                            <td>
                              <select id="bioAttributes_stage2" name="bioAttributes.stage2" tabIndex={31}>
                                <option value="10"></option>
                                <option value="9">U</option>
                                <option value="6">worker</option>
                                <option value="7">alate</option>
                                <option value="8">soldier</option>
                                <option value="1">adult</option>
                                <option value="4">egg</option>
                                <option value="2">larvae</option>
                                <option value="5">nymph</option>
                                <option value="3">pupae</option>
                                <option value="11">immature</option>
                              </select>
                            </td>
                            <td>
                              <label htmlFor="bioAttributes_number2">Number2</label>
                            </td>
                            <td>
                              <input id="bioAttributes_number2" name="bioAttributes.number2" tabIndex={34} type="text" value="" />
                            </td>
                          </tr>

                          <tr id="s3" style={{ display: 'none' }}>
                            <td>
                              <label htmlFor="bioAttributes_stage3">Stage3</label>
                            </td>
                            <td>
                              <select id="bioAttributes_stage3" name="bioAttributes.stage3" tabIndex={31}>
                                <option value="10"></option>
                                <option value="9">U</option>
                                <option value="6">worker</option>
                                <option value="7">alate</option>
                                <option value="8">soldier</option>
                                <option value="1">adult</option>
                                <option value="4">egg</option>
                                <option value="2">larvae</option>
                                <option value="5">nymph</option>
                                <option value="3">pupae</option>
                                <option value="11">immature</option>
                              </select>
                            </td>
                            <td>
                              <label htmlFor="bioAttributes_number3">Number3</label>
                            </td>
                            <td>
                              <input id="bioAttributes_number3" name="bioAttributes.number3" tabIndex={34} type="text" value="" />
                            </td>
                          </tr>

                          <tr>
                            <td colSpan={2}>
                              <label htmlFor="bioAttributes_emergenceDate">Emergence Date</label>
                            </td>
                            <td colSpan={4}>
                              <label htmlFor="bioAttributes_emergenceDate_month">mm:</label>
                              <input id="bioAttributes_emergenceDate_month" name="bioAttributes.emergenceDate.month" size={2} tabIndex={35} type="text" value="" />
                              <label htmlFor="bioAttributes_emergenceDate_day">dd:</label>
                              <input id="bioAttributes_emergenceDate_day" name="bioAttributes.emergenceDate.day" size={2} tabIndex={36} type="text" value="" />
                              <label htmlFor="bioAttributes_emergenceDate_year">yyyy:</label>
                              <input id="bioAttributes_emergenceDate_year" name="bioAttributes.emergenceDate.year" size={4} tabIndex={37} type="text" value="" />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <label htmlFor="bioAttributes_bioRemarks">Remarks</label>
                            </td>
                            <td colSpan={7}>
                              <textarea cols={20} id="bioAttributes_bioRemarks" name="bioAttributes.bioRemarks" rows={1} style={{ width: '100%' }} tabIndex={38}></textarea>
                              <input id="bioAttributes_locked" name="bioAttributes.locked" type="hidden" value="False" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                  </form>
              </td>
          </tr>
        </table>
    </Box>
  );
};

export default MainBody;
