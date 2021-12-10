// setActiveLesson
export function setActiveLesson(state, payload) {
  console.log("payload", payload)
    state.activeLesson = payload;
}
export function pushDone(state,payload){
  state.done.push(payload)
}
export function removeDoneItem(state){
  state.done = []
}