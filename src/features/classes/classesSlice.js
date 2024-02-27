import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    class_id: '',
    class_name: '',
    class_term: '',
    class_locations: '',
    class_enrollment_link: '',
    class_status: '',
    class_created_by: '',
    class_updated: '',
    class_cost: '',
    class_program: '',

}

export const classesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addClass: (state) => {
            state.count += 1;
        },
        editClass: (state) => {
            state.count -= 1;
        }
    }
})

export const { addClass, editClass } = classesSlice.actions;

export default classesSlice.reducer