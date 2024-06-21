import Header from '../src/components/Header'
import VerticalNav from './components/Vertical_nav.jsx'
import { fetchUser, fetchUserActivity, fetchUserAverageSessions, fetchUserPerformance }
  from "./fetch_calls/api_calls.js"
import { mockFetchUser, mockFetchUserActivity, mockFetchUserAverageSessions, mockFetchUserPerformance }
  from "./fetch_calls/mock_calls.js"
import './App.css'
import ChartLine from './components/Line_Chart.jsx';
import ChartRadar from './components/Radar_Chart.jsx';
import ChartRadial from './components/Radial_Chart.jsx';
import ChartBar from './components/Bar_Chart.jsx';
import Card from './components/Card.jsx';
import Calories from './assets/calories-icon.png'
import Carbs from './assets/carbs-icon.png';
import Fat from './assets/fat-icon.png';
import Protein from './assets/protein-icon.png';
import { useEffect, useState } from "react"

function App() {

  const env = "dev";
  const userId = 12
  const [user, setUser] = useState()
  const [userActivity, setUserActivity] = useState()
  const [userSessions, setUserSessions] = useState()
  const [userPerformances, setUserPerformance] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData, userActivityData, userSessionsData, userPerformanceData;

        if (env === "dev") {
          [userData, userActivityData, userSessionsData, userPerformanceData] = await Promise.all([
            mockFetchUser(userId),
            mockFetchUserActivity(userId),
            mockFetchUserAverageSessions(userId),
            mockFetchUserPerformance(userId),
            console.log("===== Using mocked data =====")
          ]);
        }
        else if (env === "prod") {
          [userData, userActivityData, userSessionsData, userPerformanceData] = await Promise.all([
            fetchUser(userId),
            fetchUserActivity(userId),
            fetchUserAverageSessions(userId),
            fetchUserPerformance(userId),
            console.log("===== Using data from api =====")
          ]);
        }
        setUser(userData);
        setUserActivity(userActivityData);
        setUserSessions(userSessionsData);
        setUserPerformance(userPerformanceData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();

  }, []);

  if (!user || user.length === 0) {
    return "Error with user"
  }
  if (!userActivity || userActivity.length === 0) {
    return "Error with userActivity"
  }
  if (!userSessions || userSessions.length === 0) {
    return "Error with userSessions"
  }
  if (!userPerformances || userPerformances.length === 0) {
    return "Error with userPerformances"
  }
  const userName = user.userInfos.firstName
  const userPerformance = Object.keys(userPerformances.kind).map(key => ({
    kind: userPerformances.kind[key],
    value: userPerformances.data.find(item => item.kind === parseInt(key)).value,
  }));

  const radialScore = [{
    score: user.score,
  }]
  
  return (
    <div>
      <Header />
      <div className='layout'>
        <VerticalNav />
        <div>
          <div className='welcome'>
            <h2>Bonjour <span style={{ color: 'red' }}>{userName}</span></h2>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className='main_content'>
            <div className='charts'>
              <ChartBar data={userActivity.sessions}>
                Activité quotidienne
              </ChartBar>
              <ChartLine data={userSessions} />
              <ChartRadar data={userPerformance} />
              <ChartRadial data={radialScore} />
            </div>
            <div className='cards'>
              <Card image={Calories} data={user.keyData.calorieCount} unit="kCal" type="Calories" />
              <Card image={Protein} data={user.keyData.proteinCount} unit="g" type="Proteines" />
              <Card image={Carbs} data={user.keyData.carbohydrateCount} unit="g" type="Glucides" />
              <Card image={Fat} data={user.keyData.lipidCount} unit="g" type="Lipides" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
