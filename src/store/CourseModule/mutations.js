// setActiveLesson
export function setActiveLesson(state, payload) {
  state.activeLesson = payload;
}
export function pushDone(state,payload){
  state.done[payload.key]=payload.score
}
export function removeDoneItem(state){
  state.done = {}
}