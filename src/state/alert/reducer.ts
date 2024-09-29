import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export enum AlertType {
  Captcha = 'Captcha',
  Ban = 'Ban',
}

export type AlertState = {
  open: boolean
  alertType: AlertType | null
  title: string
  message: string
  btn: unknown
}

const initialState: AlertState = {
  open: false,
  alertType: null,
  title: '',
  message: '',
  btn: null,
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    openAlert(state, action: PayloadAction<AlertState>) {
      state.open = true
      state.alertType = action.payload.alertType
      state.title = action.payload.title
      state.message = action.payload.message
      state.btn = action.payload.btn
    },
    closeAlert(state) {
      state.open = false
    }
  }
})

export const { openAlert, closeAlert } = alertSlice.actions

export default alertSlice.reducer