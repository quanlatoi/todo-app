import React, { Fragment } from 'react';
import { Box, Grid } from '@material-ui/core';

import Content from './Content';
import Header from './Header';

function Home(props) {
    return (
        <Fragment>
            <Box
            display="flex"
            justifyContent='space-between'
            style={{background: 'rgba(0,0,0,.3'}}
            >
                <Grid container direction='row'>
                    <Header />
                </Grid>
            </Box>
            <Content />
        </Fragment>
    )
}

export default Home;