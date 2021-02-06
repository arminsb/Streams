//single point of truth

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const FETCH_STREAMS = 'FETCH_STREAMS'; //list (index) - (GET)
export const CREATE_STREAM = 'CREATE_STREAM'; //create (store) - (POST)
export const FETCH_STREAM = 'FETCH_STREAM'; //show (read) - (GET)
export const EDIT_STREAM = 'EDIT_STREAM'; //update (edit) - (PUT) -- (PATCH) IS BETTER CUSE NOT GONNA DELETE OBJECT.
export const DELETE_STREAM = 'DELETE_STREAM'; //delete (destroy) - (DELETE)