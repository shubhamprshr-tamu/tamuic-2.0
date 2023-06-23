import React, { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import ViewSpecimen from './ViewSpecimen';

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
    </Box>
  );
};

export default MainBody;
