const SET_USERS = 'SET_USERS'
const SET_IS_FETCHING = 'SET_IS_FETCHING'
const SET_COUNT = 'SET_COUNT'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_POSITIONS = 'SET_POSITIONS'
const SET_NEW_USER = 'SET_NEW_USER'

const defaultState = {
    users: [],
    isFetching: true,
    currentPage: 1,
    count: 6,
    totalCount: 0,
    positions: [],
    newUser: false
}

export default function usersReducers(state=defaultState, action){
    switch (action.type){
        case SET_USERS:
            return{
                ...state,
                users: action.payload.users,
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case SET_COUNT:
            return {
                ...state,
                count: action.payload.count
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload.total_users
            }
        case SET_POSITIONS:
            return {
                ...state,
                positions: action.payload
            }
        case SET_NEW_USER:
            return {
                ...state,
                newUser: action.payload
            }
        default:
            return state
    }
}

export const setUsers = (users) => ({type:SET_USERS, payload: users})
export const setCount = (count) => ({type:SET_COUNT, payload: count})
export const setTotalCount = (totalCount) => ({type:SET_TOTAL_COUNT, payload: totalCount})
export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload:bool})
export const setPositions = (positions) => ({type:SET_POSITIONS, payload:positions})
export const setNewUser = (user) => ({type:SET_NEW_USER, payload:user})