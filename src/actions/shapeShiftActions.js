import Elrn from 'lib-client-elrn-wallet'

export const FETCH_SHAPESHIFT_COINS_ERROR = 'FETCH_SHAPESHIFT_COINS_ERROR'
export const FETCH_SHAPESHIFT_COINS_REQUEST = 'FETCH_SHAPESHIFT_COINS_REQUEST'
export const FETCH_SHAPESHIFT_COINS_SUCCESS = 'FETCH_SHAPESHIFT_COINS_SUCCESS'

export const fetchShapeShiftCoins = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SHAPESHIFT_COINS_REQUEST })
    try {
        const config = {};
        const elrnClient = new Elrn(config)
        elrnClient.coins()
        .then((data) => {
            dispatch({
                type: FETCH_SHAPESHIFT_COINS_SUCCESS,
                payload: data
            })
        })
    } catch(error) {
        dispatch({
            type: FETCH_SHAPESHIFT_COINS_ERROR,
            payload: error
        })
    }
  }
}
