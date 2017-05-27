import { CREATE_FORM_OBJECTS, UPDATE_FORM_TYPE, UPDATE_FORM_DATA } from '../actions'

export default function formObjects(state = [{fieldType:"text",fieldData:""}, {fieldType:"text",fieldData:""}, {fieldType:"text",fieldData:""}], action){
	switch(action.type) {
		case CREATE_FORM_OBJECTS:
			// // Trying to make it save anything that was previously entered, that way if they want 1 less element
			// // but later decide they want to add that one back in, it'll be saved. Not sure how to do that though..
			console.log(action)
			return action.formObjects.map((object, i) => {
				if (state[i] !== undefined){
					return state[i]
				}
				return { fieldType: "text", fieldData: "" }
			})
		case UPDATE_FORM_TYPE:
			console.log(action)
			return state.map((item, i) => {
				if (i !== action.id) return item
				return { fieldType: action.fieldType, fieldData: item.fieldData }
			})
		case UPDATE_FORM_DATA:
			console.log(action)
			return state.map((item, i) => {
				if (i !== action.id) return item
				return { fieldData: action.fieldData, fieldType: item.fieldType}
			})
		default:
			return state
	}
}