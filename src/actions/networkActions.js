import Elrn from 'lib-client-elrn-wallet'

export const LIST_NETWORKS_ERROR = 'LIST_NETWORKS_ERROR'
export const LIST_NETWORKS_REQUEST = 'LIST_NETWORKS_REQUEST'
export const LIST_NETWORKS_SUCCESS = 'LIST_NETWORKS_SUCCESS'

export const listNetworks = () => {
  return (dispatch) => {
    dispatch({ type: LIST_NETWORKS_REQUEST })
    try {
        const config = {};
        const elrnClient = new Elrn(config)
        elrnClient.listNetworks()
        .then((networks) => {
            dispatch({
                type: LIST_NETWORKS_SUCCESS,
                payload: networks
            })
        })
    } catch(error) {
        dispatch({
            type: LIST_NETWORKS_ERROR,
            payload: error
        })
    }
  }
}
