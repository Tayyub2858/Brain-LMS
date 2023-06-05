import React from 'react';
import './TeamTrainingStyles.css';
import teamTraining from '../../Assets/Front-Page/Team-training.png'

const TeamTraining = () => {
    return (
        <>
            <div className="team-training-container">
                <p className="title-txt">
                    Corporate Training
                </p>
                <h1 className="training-heading">
                    The Fastest, Most Effective Way to Upskill Your Team
                </h1>
                <p className="training-txt">
                    Brain's corporate training platform is built for teams who demand a modern and flexible approach to online learning.
                    Assess and benchmark your team's skills, create personalized learning paths, and track real-time progress to keep your team enagaged and accountable.
                </p>
                <img src={teamTraining} alt="team-training" className='training-img' />
                <button className="training-btn">Learn more about corporate training</button>
            </div>
        </>
    )
}

export default TeamTraining