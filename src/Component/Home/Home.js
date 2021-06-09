import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';


const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setTeams(data.teams))
            .catch(error => console.log(error));
    }, []);
    return (
        <div className="home">
            <div className="homeBanner   ">
                <h1>Sports Hub</h1>
            </div>
            <div className="hometeams">
                {
                    teams.map(postdata =>
                        <Teams
                            key={postdata.idSport}
                            postdata={postdata}
                        ></Teams>)
                }
            </div>
        </div>
    );
};

export default Home;