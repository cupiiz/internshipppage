import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import StepperForm from './StepperForm'
import Navbarapp from '.././Navigation/Navbarapp';
const useStyles = makeStyles(theme => ({
    logo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0.5rem',
        color: '#745c97',
        fontWeight: 'bold',
        letterSpacing: '1rem'
    },
    border: {
        border: '0.15rem solid #d597ce',
        borderRadius: '2px',
        padding: '2%',
        width: '19rem',
        textAlign: 'center'
    },
    topLayout: {
        margin: '4rem 0',
        [theme.breakpoints.down('xs')]: {
            margin: '1rem 0'
        }
    },
    paperLayout: {
        padding: '2rem',
        [theme.breakpoints.up('md')]: {
            width: '35em'
        },
        marginTop: '10rem',
        margin: 'auto',
        border: '1px solid #ebedf0',
        borderRadius: '4px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '3rem'
        }
    },
}));

export default function Register() {
    const classes = useStyles();
    return (
    
    
    <div className="x">
        <Navbarapp/>
        <Fragment>
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.topLayout}
            >
                <Grid item lg={12} md={12} xs={12}>
                    <Paper className={classes.paperLayout}>
                        <Grid container>
                            <Grid item md={12} xs={12}>
                                <div className={classes.logo}>
                                    <div className={classes.border}>
                                        APPLICATION
                                    </div>
                                </div>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <StepperForm/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
        </div>
    )
}
