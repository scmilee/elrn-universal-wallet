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
          const coins = [];
          Object.keys(data).map((coin) => {
            return coins.push(data[coin]);
          })
          dispatch({
              type: FETCH_SHAPESHIFT_COINS_SUCCESS,
              payload: coins
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

export const SHAPESHIFT_SHIFT_ERROR = 'SHAPESHIFT_SHIFT_ERROR'
export const SHAPESHIFT_SHIFT_REQUEST = 'SHAPESHIFT_SHIFT_REQUEST'
export const SHAPESHIFT_SHIFT_SUCCESS = 'SHAPESHIFT_SHIFT_SUCCESS'

export const shift = (withdrawalAddress, pair, options) => {
  return (dispatch) => {
    dispatch({ 
      type: SHAPESHIFT_SHIFT_REQUEST,
      payload: {
        withdrawalAddress: withdrawalAddress,
        pair: pair,
        options: options
      }
     })
    try {
        const config = {};
        const elrnClient = new Elrn(config)
        elrnClient.shift(withdrawalAddress, pair, options)
        .then((data) => {
            dispatch({
                type: SHAPESHIFT_SHIFT_SUCCESS,
                payload: data
            })

        })
    } catch(error) {
        dispatch({
            type: SHAPESHIFT_SHIFT_ERROR,
            payload: error
        })
    }
  }
}

export const SET_SHAPESHIFT_FROM_SYMBOL = 'SET_SHAPESHIFT_FROM_SYMBOL'

export const setShapeShiftFromSymbol = (symbol) => {
  return (dispatch) => {
    dispatch({ 
      type: SET_SHAPESHIFT_FROM_SYMBOL,
      payload: {
        symbol: symbol
      }
     })
  }
}

export const SET_SHAPESHIFT_TO_SYMBOL = 'SET_SHAPESHIFT_TO_SYMBOL'

export const setShapeShiftToSymbol = (symbol) => {
  return (dispatch) => {
    dispatch({ 
      type: SET_SHAPESHIFT_TO_SYMBOL,
      payload: {
        symbol: symbol
      }
     })
  }
}

export const SET_SHAPESHIFT_RETURN_ADDRESS = 'SET_SHAPESHIFT_RETURN_ADDRESS'

export const setShapeShiftReturnAddress = (address) => {
  return (dispatch) => {
    dispatch({ 
      type: SET_SHAPESHIFT_RETURN_ADDRESS,
      payload: {
        returnAddress: address
      }
     })
  }
}
