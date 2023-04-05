import uiReducer, [ defaultState ] from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { SELECT_COURSE } from "../actions/courseActionTypes";

describe('tests for uiReducer', () => {
   it('verifies initial state returned when no action is passed to the uiReducer', () => {
    const myState = uiReducer(defaultState, '');
    expect(myState.toJS()).toEqual(defaultState.toJS());
   });

   it('verifies the state equals the initial state when action SELECT_COURSE is passed', () => {
    const myState = uiReducer(defaultState, selectCourse());
    expect(myState.toJS()).toEqual(defaultState.toJS());
   });

   it('verifies isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER passed', () => {
    const myState = uiReducer(defaultState, displayNotificationDrawer());
    expect(myState.toJS().isNotificationDrawerVisible).toEqual(true);
   });
});