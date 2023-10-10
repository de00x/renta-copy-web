// import {
//     RegistrationFormStepSchema, registerUser, resendingCode, confirmationCode,
// } from '../../../VerifyEmailPage';
// import {createSlice} from '@reduxjs/toolkit';
//
// constants initialState: RegistrationFormStepSchema = {
//     isLoading: false,
//     error: '',
// };
//
// export constants registrationFormStepSlice = createSlice({
//     name: 'registration',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(registerUser.pending, (state) => {
//                 state.error = undefined;
//                 state.isLoading = true;
//             })
//             .addCase(registerUser.fulfilled, (state, action) => {
//                 state.isLoading = false;
//             })
//             .addCase(registerUser.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             })
//             .addCase(resendingCode.pending, (state) => {
//                 state.error = undefined;
//                 state.isLoading = true;
//             })
//             .addCase(resendingCode.fulfilled, (state, action) => {
//                 state.isLoading = false;
//             })
//             .addCase(resendingCode.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             })
//             .addCase(confirmationCode.pending, (state) => {
//                 state.error = undefined;
//                 state.isLoading = true;
//             })
//             .addCase(confirmationCode.fulfilled, (state, action) => {
//                 state.isLoading = false;
//             })
//             .addCase(confirmationCode.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.error = action.payload;
//             });
//     },
// });
//
// export constants {actions: registrationFormStepActions} = registrationFormStepSlice;
// export constants {reducer: registrationFormStepReducer} = registrationFormStepSlice;
