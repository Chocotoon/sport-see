import User from '../models/User.js'

/**
 * function fetches user data from mock data file
 * @param { Integer } userId
 * @return { Promise }  
 * @return { Promise.resolve<Object> } object User with user's key information
 * @return { Promise.reject<Error> }
 */
export function mockFetchUser(userId) {
    return fetch("./mock_data/data.json")
        .then((response) => response.json())
        .then(data => {
            const userData = data.USER_MAIN_DATA.find(userData => userData.id === userId);
            if (userData) {
                return new User(
                    userData.id,
                    userData.userInfos,
                    userData.todayScore,
                    userData.score,
                    userData.keyData
                );
                
            } else {
                return null; 
            }
            
        })
        .catch((error) => console.error("Error fetching user", error));;
}


/**
 * function fetches user's activity data from mock data file
 * @param { Integer } userId
 * @return { Promise }  
 * @return { Promise.resolve<Object> } object with user's activity key information
 * @return { Promise.reject<Error> }
 */
export function mockFetchUserActivity(userId) {
    return fetch("/mock_data/data.json")
        .then((response) => response.json())
        .then(data => {
            const userActivityData = data.USER_ACTIVITY
                .find(element => element.userId === userId)
            return userActivityData

        })
        .catch((error) => console.error("Error fetching user activity", error));

}


/**
 * function fetches user's average sessions data from mock data file
 * @param { Integer } userId
 * @return { Promise }  
 * @return { Promise.resolve<Object> } object with user's activity key information
 * @return { Promise.reject<Error> }
 */
export function mockFetchUserAverageSessions(userId) {
    return fetch("/mock_data/data.json")
        .then((response) => response.json())
        .then(data => {
            const userSessionsData = data.USER_AVERAGE_SESSIONS
                .find(element => element.userId === userId)
            return userSessionsData
        })
        .catch((error) => console.error("Error fetching user sessions", error));
}


/**
 * function fetches user's performance data from mock data file
 * @param { Integer } userId
 * @return { Promise }  
 * @return { Promise.resolve<Object> } object with user's performance key information
 * @return { Promise.reject<Error> }
 */
export function mockFetchUserPerformance(userId) {
    return fetch("/mock_data/data.json")
        .then((response) => response.json())
        .then(data => {
            const userPerformanceData = data.USER_PERFORMANCE
                .find(element => element.userId === userId);
            return userPerformanceData

        })
        .catch((error) => console.error("Error fetching user performance", error))

}