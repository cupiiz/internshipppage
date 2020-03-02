import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Axios from 'axios';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '-1rem 0 2rem 0',
        padding: '0 7rem',
        [theme.breakpoints.down('xs')]: {
            padding: '0'
        },
        [theme.breakpoints.down('md')]: {
            padding: '0'
        },
        marginTop: 'auto'
    },
    textField: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    select: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    errorMessage: {
        color: 'red',
        fontSize: '0.9rem',
        marginTop: '0.2rem'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function EducationDetail({ formProps: { register, unregister, errors, setValue, getValues }, data }) {
    const classes = useStyles();
    const inputRef = React.useRef();
    const { faculty, branch, resume } = data[0]
    const values = getValues();
    const [universities, setUniversities] = React.useState([]);
    console.log('val', values);
    
     /***
     *  GET UNIVERSITY ON DATABASE
     */
    const getUniversities = () => {
        Axios.get('http://localhost:8000/api/universities/get')
        .then(res => {
            setUniversities(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    React.useEffect( () => {
        getUniversities()
        register({ name : "university"})
        return () => unregister({ name: 'university' });
    },[register, unregister])

    return (
        <Fragment>

            <div className={classes.root}>

                <Grid container
                    direction="row"
                    spacing={1}
                ><Grid item md={12} xs={12}>
                        <FormControl variant="outlined"
                            className={classes.formControl}
                            >
                                
                            <InputLabel id="label-select">
                                University
                            </InputLabel>


                            <Select
                            ref={inputRef}
                            labelId="label-select"
                            id="university"
                            name="university"
                            error={!!errors.university}
                            defaultValue={values.universities === undefined ? '' : values.universities}

                            onChange={e => {
                                setValue('university', e.target.value, true)
                                
                                
                            }}
                        >
                            <MenuItem value={values.universities === undefined ? '' : values.universities} style={{ display: 'none' }} />
                            {universities.map( (value, index) => {
                                return <MenuItem value={value.universities_id} key={index}>{value.university}</MenuItem>
                            })}
                        </Select>
                           
                        </FormControl>
                        {errors.university && <p className={classes.errorMessage}>{errors.university.message}</p>}
                    </Grid>

                </Grid>

                <Grid container
                    direction="row"
                    spacing={1}
                ><Grid item md={12} xs={12}>
                        <TextField
                            id="faculty"
                            label="Faculty"
                            name="faculty"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            inputRef={register}
                            error={!!errors.faculty}
                            defaultValue={faculty}
                        />
                        {errors.faculty && <p className={classes.errorMessage}>{errors.faculty.message}</p>}
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <TextField
                            id="branch"
                            label="Branch"
                            name="branch"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            inputRef={register}
                            error={!!errors.branch}
                            defaultValue={branch}
                        />
                        {errors.branch && <p className={classes.errorMessage}>{errors.branch.message}</p>}

                    </Grid>

                </Grid>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item md={12} xs={12}>
                        <TextField
                            id="resume"
                            label="Resume"
                            name="resume"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                            inputRef={register}
                            error={!!errors.resume}
                            defaultValue={resume}
                        />
                        {errors.resume && <p className={classes.errorMessage}>{errors.resume.message}</p>}

                    </Grid>

                </Grid>
            </div>
        </Fragment>
    )
}
