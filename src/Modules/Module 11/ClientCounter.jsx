import React from 'react'
import { Grid } from '@mui/material';
import './ClientCounterStyles.css'
import CountUp, { useCountUp } from 'react-countup';
import enroll from '../../Assets/CourseCard/enroll.png';
import traning from '../../Assets/CourseCard/enrollment.png';
import Course from '../../Assets/CourseCard/signup.png'
const ClientCounter = () => {
    useCountUp({
        ref: 'counter',
        end: 10,
        duration: 3,
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
        scrollSpyOnce:true
    });
    const [loading, setLoading] = React.useState(false);

    const onStart = () => {
        setLoading(true);
    };

    const onEnd = () => {
        setLoading(false);
    };

    const containerProps = {
        'aria-busy': loading,
    };
    return (
        <>
            <div className="client-counter-container">
                <Grid container justifyContent={'center'}>
                    <Grid item xs={3} sm={3} md={3}>
                       <img src={enroll} alt="Disply Icons of Entrollments Students" className='counter-img-icons'/>
                        <span className="counter-title">
                            Overall Enrollments
                        </span>
                        <span className="counter">
                            <CountUp
                                end={2000}
                                onStart={onStart}
                                onEnd={onEnd}
                                containerProps={containerProps}
                                enableScrollSpy
                                scrollSpyDelay
                                scrollSpyOnce
                            />
                        </span>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                    <img src={traning} alt="Disply Icons of Entrollments Students" className='counter-img-icons'/>
                        <span className="counter-title">
                            TRAININGS
                        </span>
                        <span className="counter">
                            <CountUp
                                end={1000}
                                onStart={onStart}
                                onEnd={onEnd}
                                containerProps={containerProps}
                                enableScrollSpy
                                scrollSpyDelay
                                scrollSpyOnce
                            />
                        </span>
                    </Grid>
                    <Grid item xs={3} sm={3} md={3}>
                    <img src={Course} alt="Disply Icons of Entrollments Students" className='counter-img-icons'/>
                        <span className="counter-title">
                           COURSES
                        </span>
                        <span className="counter">
                            <CountUp
                                end={16}
                                onStart={onStart}
                                onEnd={onEnd}
                                containerProps={containerProps}
                                enableScrollSpy
                                scrollSpyDelay
                                scrollSpyOnce
                            />
                        </span>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default ClientCounter