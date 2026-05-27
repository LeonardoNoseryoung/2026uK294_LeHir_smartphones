import Box from '@mui/material/Box';

function MyBox() {
  return (
    <Box
      sx={{
        width: 300,
        height: 200,
        backgroundColor: '#f5f5f5',
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      Content goes here
    </Box>
  );
}

export default MyBox