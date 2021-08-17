import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

const Error = () => {
  return (
    <div>
      <Box mt={20}>
        <Container maxWidth="sm">
          <Box textAlign="center">
            <Typography variant="h5">404 Page Not Found!</Typography>
            <Box>
              <Typography variant="subtitle2">
                You may trying to access unknown page
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Error;
