import User from '../models/User.js'

/**
 * function fetches user data from api
 * @param { Integer } userId
 * @return { Promise }  
 * @return { Promise.resolve<Object> } object User with user's key information
 * @return { Promise.reject<Error> }
 */
export function fetchUser(userId) {
    return fetch(`http://localhost:3000/user/${userId}`)
        .then((response) => response.json())
        .then(data => {
            return new User(
                data.data.id,
                data.data.userInfos,
                data.data.todayScore,
                data.data.score,
                data.data.keyData
            );
        })
        .catch((error) => console.log(error))
}


/**
 * function fetches user's activity data from api
 * @param { Integer } userId
 * @return { Promise }  
 * @return { Promise.resolve<Object> } object with user's activity key information
 * @return { Promise.reject<Error> }
 */
export function fetchUserActivity(userId) {
    return fetch(`http://localhost:3000/user/${userId}/activity`)
        .then((response) => response.json())
        .then(({data}) => data)
        .catch((error) => console.error("Error fetching user activity:", error));

}


/**
 * function fetches user's average sessions data from api
 * @param { Integer } userId
 * @return { Promise }  
 * @return { Promise.resolve<Object> } object with user's activity key information
 * @return { Promise.reject<Error> }
 */
export function fetchUserAverageSessions(userId) {
    return fetch(`http://localhost:3000/user/${userId}/average-sessions`)
        .then((response) => response.json())
        .then(({data}) => data)
        .catch((error) => console.error("Error fetching user sessions:", error));
}


/**
 * function fetches user's performance data from api
 * @param { Integer } userId
 * @return { Promise }  
 * @return { Promise.resolve<Object> } object with user's performance key information
 * @return { Promise.reject<Error> }
 */
export function fetchUserPerformance(userId) {
    return fetch(`http://localhost:3000/user/${userId}/performance`)
        .then((response) => response.json())
        .then(({data}) => data)
        .catch((error) => console.error("Error fetching user performance:", error));
}