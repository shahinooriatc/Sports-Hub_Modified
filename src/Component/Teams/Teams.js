import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Teams.css';
import { Link, NavLink } from 'react-router-dom';

const Teams = (props) => {
    const postdata = props.postdata;
    const { strTeam, strSport, idTeam, strTeamBadge } = postdata;

    return (
        <div className='container'>
            <div className='teamsArea'>
                <Link to={`/TeamDetails/${idTeam}`} className="butun">
                    <div className="cardStyle">
                        <img src={strTeamBadge} alt="Team Logo.." />
                        <h4>{strTeam}</h4>
                        <h6>{strSport}</h6>
                        <button>Explore <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Teams;