/**
 * Created by lilit on 2018-06-05.
 */


//logger will show every time a new action is dispatched


const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('the action: ', action);
    const returnValue = next(action);
    console.log('the new state: ', store.getState());
    console.groupEnd();
    return returnValue
};

export default logger;
