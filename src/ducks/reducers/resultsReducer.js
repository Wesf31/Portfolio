import axios from 'axios'

const initialState = {
  cardData: [],
  cardDataLoaded: false,
}

const GET_CARD_DATA = 'GET_CARD_DATA'

export const setCardData = profile => ({
  type: GET_CARD_DATA,
  payload: profile,
})

export const getCardData = () => async (dispatch) => {
  let results = await axios.get('/api/card')
  return dispatch({
    type: GET_CARD_DATA,
    payload: results.data,
  })
}

export default function reducer(state = initialState, action) {
  const { payload, type } = action
  switch (type) {
    case GET_CARD_DATA:
      return { ...state, cardData: payload, cardDataLoaded: true }
    default:
      return state
  }
}