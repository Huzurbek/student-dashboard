export function getName(state) {
    return state.name;
}
export function getTests(state) {
    // state.activeLesson ? state.activeLesson : {}
    if(state.activeLesson.length){
        return state.activeLesson.tests
    }
    return {}
}