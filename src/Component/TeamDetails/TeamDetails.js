import React, { useEffect, useState } from 'react';
import './TeamDetails.css';
import { useParams } from 'react-router';
import male from '../images/male.png';
import female from '../images/female.png';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {
    const { idTeam } = useParams();

    const [team, setTeam] = useState({});
    const { strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender,
        strDescriptionEN, strTeamBanner, strTwitter, strFacebook, strYoutube } = team;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
            .then(res => res.json())
            .then(datat => setTeam(datat.teams[0]))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='teamDetails'>
            <div className="bannerArea">
                <div className="banner">
                    <img src={strTeamBanner} alt="" />
                </div>
                <div className="bannerLogo">
                    <img className='logo' src={strTeamBadge} alt="" />
                </div>
            </div>

            <div className="container">

                <div className="flex-container details">
                    <div className="flex-item-left ">
                        <div className=" col px-md-5">
                            <div className="text-left pl-5">
                                <h2> {strTeam}</h2>
                                <h4> <FontAwesomeIcon icon={faCalendarAlt} /> Founded Year  : {intFormedYear}</h4>
                                <h4> <FontAwesomeIcon icon={faFlag} /> Country  : {strCountry}</h4>
                                <h4> <FontAwesomeIcon icon={faFutbol} /> Sports Type  : {strSport}</h4>
                                <h4> <FontAwesomeIcon icon={faMars} /> Gender  : {strGender}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="flex-item-right">
                        <div className="teamImg col px-md-5">
                            <div className=" col-md-6 info-img  ">
                                <img src={
                                    team.strGender?.toLowerCase() === "female" ? female
                                        : team.strGender?.toLowerCase() === "mixed" ? team.mixed : male
                                }
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="teamDescription text-center">
                    <p>Team Description English : <br />{strDescriptionEN}</p><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor optio veritatis voluptatem, sunt laboriosam deleniti reiciendis. Cum voluptatibus alias deleniti? Et quis earum expedita ex quos provident vel delectus iste maiores quam ad dolores, quasi possimus esse exercitationem beatae amet aspernatur labore in minus nesciunt, laborum reiciendis nihil. Quod non ab ex? Nobis sit maxime fuga ipsam repellendus, ducimus qui itaque iure labore, expedita ab iusto.</p>
                </div>
                <div className="foter">
                    <div className="socialIcon">
                        <a href={strTwitter} target='blank'><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                    <div className="socialIcon">
                        <a href={strFacebook}><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                    <div className="socialIcon">
                        <a href={strYoutube}><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamDetails;