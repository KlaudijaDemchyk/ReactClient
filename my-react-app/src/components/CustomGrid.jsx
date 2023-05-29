import Grid from "@mui/material/Grid";

const CustomGrid = ({ container, direction, justifyContent, alignItems, children }) => {
  return (
    <Grid container={container} direction={direction} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Grid>
  );
};

export default CustomGrid;
