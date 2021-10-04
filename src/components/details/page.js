import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '../appBar';
import Button from '@material-ui/core/Button';
import './style.css';
import { Box } from '@material-ui/core';

function Page(props) {

    const {
        goTo,
        currentItem,
    } = props;
    console.log('Location', currentItem);
    //const location = (currentItem.location.name === undefined) ? '' : currentItem.location.name;
    return (
        <Fragment>
            <CssBaseline />

            <AppBar />
            <div className="details-page">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                        m: 1,
                        width: 300,
                        height: 480,
                        },
                    }}
                    >
                    <Paper
                        elevation={1}
                        className="paper-container"
                    >
                        {currentItem ?
                            <Fragment>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {currentItem.name}
                                </Typography>

                                <div
                                    className="item-image"
                                    style={{
                                        backgroundImage: `url(${currentItem.image})`,
                                    }}
                                />
                                
                                <Typography variant="subtitle1" gutterBottom component="p" className="content">
                                    Gender: { currentItem.gender }<br/>
                                    Status: {currentItem.status}
                                </Typography>
                            </Fragment>
                            :
                            <CircularProgress className="item-loader" />
                        }

                        <Button
                            color="primary"
                            onClick={() => goTo('/results')}
                        >
                            Back
                        </Button>
                    </Paper>
                </Box>
            </div>
        </Fragment>
    );
}

export default Page;
