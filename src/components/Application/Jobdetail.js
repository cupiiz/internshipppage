import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
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

export default function JobDetail({ formProps: { register, unregister, errors, setValue, getValues } }) {
    const classes = useStyles();
    const inputRef = React.useRef();
    const values = getValues();
    const [startDate, setStartDate] = React.useState(new Date());
    const [endDate, setEndDate] = React.useState(new Date());
    const [team, setTeam] = React.useState([]);
    const [teamID, setTeamID] = React.useState(0);
    const [position, setPosition] = React.useState([]);
    
    /***
     *  GET TEAM ON DATABASE
     */
    const getTeam = () => {
        Axios.get('http://localhost:8000/api/team/get')
        .then(res => {
            setTeam(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    /***
     *  GET POSITION ON DATABASE
     */
    const getPosition = () => {
        Axios.get('http://localhost:8000/api/position/get')
        .then(res => {
            setPosition(res.data.data)
            console.log(res.data.data);
            
        })
        .catch(err => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        getTeam()
        register({ name: "team"})
        register({ name: "position1"})
        register({ name: "position2"})
        register({ name: "startDate"})
        register({ name: "endDate"})
        return () => {
            unregister({ name: "team"})
            unregister({ name: "position1"})
            unregister({ name: "position2"})
            unregister({ name: "startDate"})
            unregister({ name: "endDate"})
        };
    }, [register, unregister])

  
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
                            Team
                        </InputLabel>


                        <Select
                            ref={inputRef}
                            labelId="label-select"
                            id="team"
                            name="team"
                            error={!!errors.team}
                            defaultValue={values.team === undefined ? '' : values.team}

                            onChange={e => {
                                setValue('team', e.target.value, true)
                                setTeamID()
                                getPosition()
                            }}
                        >
                            <MenuItem value={values.team === undefined ? '' : values.team} style={{ display: 'none' }} />
                            {team.map( (value, index) => {
                                return <MenuItem value={value.team_id} key={index}>{value.team_name}</MenuItem>
                            })}
                        </Select>

                    </FormControl>
                    {errors.team && <p className={classes.errorMessage}>{errors.team.message}</p>}
                </Grid>
                </Grid>

                <Grid container
                direction="row"
                spacing={1}
            >
            <Grid item md={12} xs={12}>
                    <FormControl variant="outlined"
                        className={classes.formControl}
                    >

                            <InputLabel id="label-select">
                            Position1
                            </InputLabel>

                        <Select
                            ref={inputRef}
                            labelId="label-select"
                            id="position1"
                            name="position1"
                            error={!!errors.position1}
                            defaultValue={values.position1 === undefined ? '' : values.position1}

                            onChange={e => setValue('position1', e.target.value, true)}
                        >
                            <MenuItem value={values.position1 === undefined ? '' : values.position1} style={{ display: 'none' }} />
                            {position
                                    .filter( val => {
                                        
                                        return val.team_name === team[teamID]
                                    })
                                    .map( (val, index) => {
                                        return <MenuItem key={index} value={val.position_id}>{val.positions_name}</MenuItem>
                                    })
                            }
                            
                        </Select>

                    </FormControl>
                    {errors.position1 && <p className={classes.errorMessage}>{errors.position1.message}</p>}
                    </Grid>
            <Grid item md={12} xs={12}>
                    <FormControl variant="outlined"
                        className={classes.formControl}
                    >

                        <InputLabel id="label-select">
                        Position2
                            </InputLabel>


                        <Select
                            ref={inputRef}
                            labelId="label-select"
                            id="position2"
                            name="position2"
                            error={!!errors.position2}
                            defaultValue={values.position2 === undefined ? '' : values.position2}

                            onChange={e => setValue('position2', e.target.value, true)}
                        >
                            <MenuItem value={values.position2 === undefined ? '' : values.position2} style={{ display: 'none' }} />
                            <MenuItem value={'Ten'}>Ten</MenuItem>
                            <MenuItem value={'Twenty'}>Twenty</MenuItem>
                            <MenuItem value={'Thirty'}>Thirty</MenuItem>
                        </Select>

                    </FormControl>
                    {errors.position2 && <p className={classes.errorMessage}>{errors.position2.message}</p>}
                </Grid>

            </Grid>


               
            <Grid container direction="row"
                    spacing={1} justify="space-around">
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="normal"
                            id="startDate"
                            label="startDate"
                            format="MM/dd/yyyy"
                            value={startDate}
                            onChange={value => {
                                    setStartDate(value)
                                    setValue('startDate', value, true)
                            }}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />        
                </MuiPickersUtilsProvider>
                {errors.startDate && <p className={classes.errorMessage}>{errors.startDate.message}</p>}  
                 
        </Grid>

        <Grid container direction="row"
                spacing={1} justify="space-around">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="endDate"
                        label="endDate"
                        format="MM/dd/yyyy"
                        value={endDate}
                        onChange={value => {
                                setEndDate(value)
                                setValue('endDate', value, true)
                        }}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />        
                </MuiPickersUtilsProvider>
                {errors.endDate && <p className={classes.errorMessage}>{errors.endDate.message}</p>}
                 
      </Grid>
            </div>
        </Fragment>
    )
};


