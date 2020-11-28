import { TOGGLE_TRUE, TOGGLE_FALSE } from '../constants/edit'

export const toggleTrue = () => {
      return {
            type: TOGGLE_TRUE
      }

}


export const toggleFalse = () => {
      return {
            type: TOGGLE_FALSE
      }
}