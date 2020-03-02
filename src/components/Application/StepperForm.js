import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PersonalDetail from './Personaldetail'
import EducationDetail from './Educationdetail'
import JobDetail from './Jobdetail'
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { StoreContext } from './store'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    buttonLayout: {
        marginLeft: '7rem',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '0'
        }
    }
}));

const phoneRegExp = /^(\+\d{1,2}\s)?\(?\d{3}\)?\d{3}\d{4}$/
const personalDetailSchema = yup.object().shape({
    firstName: yup.string().required('This field is required.'),
    lastName: yup.string().required('This field is required.'),
    email: yup
        .string()
        .email('Invalid email.')
        .required('This field is required.'),
    phoneNumber: yup.string() 
        
    .matches(phoneRegExp, 'Phone number is not valid')
        
        
});

const educationDetailSchema = yup.object().shape({
    
    // .required('This field is required.'),
    university: yup
        .string()
        .required('This field is required.'),
    faculty: yup.string().required('This field is required.'),
    branch: yup.string().required('This field is required.'),
    resume: yup.string().required('This field is required.'),
});

const jobDetailSchema = yup.object().shape({
    team: yup.string().required('This field is required.'),
    position1: yup.string().required('This field is required.'),
    position2: yup.string().required('This field is required.')
});

function getSteps() {
    return ['Personal', 'Education','Job'];
}

export default function StepperForm() {
    const classes = useStyles();
    const { personalDetail, educationDetail,jobDetail } = useContext(StoreContext)
    const personalDetailForm = useForm({
        validationSchema: personalDetailSchema
    });

    const educationDetailForm = useForm({
        validationSchema: educationDetailSchema
    });
    const jobDetailForm = useForm({
        validationSchema: jobDetailSchema
    });
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        personalDetail[1]({})
        educationDetail[1]({})
        jobDetail[1]({})
        setActiveStep(0);
    };

    const onSubmit = data => {
        console.log(data);
        if (activeStep === 0) {
            personalDetail[1](data)
        }
        else if (activeStep === 1) {
            educationDetail[1](data)
        }
        else if (activeStep === 2) {
            jobDetail[1](data)
        }
        handleNext()
    };

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return <PersonalDetail formProps={personalDetailForm} data={personalDetail} />;
            case 1:
                return <EducationDetail formProps={educationDetailForm} data={educationDetail} />;
            case 2:
                return <JobDetail formProps={jobDetailForm} data={jobDetail} />;
            default:
                return 'Unknown stepIndex';
        }
    }

    return (
        <div className={classes.root}>
            <form onSubmit={(activeStep === 0) ? personalDetailForm.handleSubmit(onSubmit) :(activeStep === 1 ) ? educationDetailForm.handleSubmit(onSubmit) :jobDetailForm.handleSubmit(onSubmit)}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map(label => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div className={classes.buttonLayout}>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button variant="contained" color="primary" onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                            <div>
                                <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                                <div className={classes.buttonLayout}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                        variant="outlined"
                                    >
                                        Back
                                    </Button>
                                    <Button variant="contained" color="primary" type="submit">
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </form>
        </div>
    );
}