/**
 * @class creates User object to standardise user data from api
 */

class User {
    constructor(id, userInfos, todayScore, score, keyData) {
        this._id = id
        this._userInfos = userInfos
        this._score = todayScore ? todayScore : score
        this._keyData = keyData
    }

    get id() {
        return this._id
    }
    get userInfos() {
        return this._userInfos
    }

    get score() {
        return this._score
    }

    get keyData() {
        return this._keyData
    }

}

export default User