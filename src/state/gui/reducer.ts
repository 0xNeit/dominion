import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { HOLD_PAINT } from "../../constants"

export type GuiState = {
  showGrid: boolean,
  showPixelNotify: boolean,
  showMvmCtrls: boolean,
  autoZoomIn: boolean,
  isPotato: boolean,
  isLightGrid: boolean,
  compactPalette: boolean,
  paletteOpen: boolean,
  mute: boolean,
  chatNotify: boolean,
  menuOpen: boolean,
  onlineCanvas: boolean,
  style: string,
  holdPaint: number,
  easterEgg: boolean,
  moveU: number,
  moveV: number,
  moveW: number,
}

const initialState: GuiState = {
  showGrid: false,
  showPixelNotify: false,
  showMvmCtrls: false,
  autoZoomIn: false,
  isPotato: false,
  isLightGrid: false,
  compactPalette: false,
  paletteOpen: true,
  mute: false,
  chatNotify: true,
  menuOpen: false,
  onlineCanvas: false,
  style: 'default',
  holdPaint: HOLD_PAINT.OFF,
  easterEgg: false,
  moveU: 0,
  moveV: 0,
  moveW: 0,
}

const guiSlice = createSlice({
  name: 'gui',
  initialState,
  reducers: {
    toggleGrid(state) {
      state.showGrid = !state.showGrid
    },
    togglePixelNotify(state) {
      state.showPixelNotify = !state.showPixelNotify
    },
    toggleMvmCtrls(state) {
      state.showMvmCtrls = !state.showMvmCtrls
    },
    toggleAutoZoomIn(state) {
      state.autoZoomIn = !state.autoZoomIn
    },
    togglePotatoMode(state) {
      state.isPotato = !state.isPotato
    },
    toggleLightGrid(state) {
      state.isLightGrid = !state.isLightGrid
    },
    toggleCompactPalette(state) {
      state.compactPalette = !state.compactPalette
    },
    togglePaletteOpen(state) {
      state.paletteOpen = !state.paletteOpen
    },
    toggleMute(state) {
      state.mute = !state.mute
    },
    toggleChatNotify(state) {
      state.chatNotify = !state.chatNotify
    },
    toggleMenuOpen(state) {
      state.menuOpen = !state.menuOpen
    },
    toggleOnlineCanvas(state) {
      state.onlineCanvas = !state.onlineCanvas
    },
    setStyle(state, action: PayloadAction<string>) {
      state.style = action.payload
    },
    setHoldPaint(state, action: PayloadAction<number>) {
      state.holdPaint = action.payload
    },
    toggleEasterEgg(state) {
      state.easterEgg = !state.easterEgg
    },
    setMoveU(state, action: PayloadAction<number>) {
      state.moveU = action.payload
    },
    setMoveV(state, action: PayloadAction<number>) {
      state.moveV = action.payload
    },
    setMoveW(state, action: PayloadAction<number>) {
      state.moveW = action.payload
    },
    setColor(state) {
      if (state.compactPalette || window.innerWidth < 300) {
        state.paletteOpen = false
      }
    },
    cancelMove(state) {
      state.moveU = 0
      state.moveV = 0
      state.moveW = 0
    },
    rehydrate(state) {
      state.easterEgg = false
      state.holdPaint = HOLD_PAINT.OFF
      state.moveU = 0
      state.moveV = 0
      state.moveW = 0
    }
  }
})

export const {
  toggleGrid,
  togglePixelNotify,
  toggleMvmCtrls,
  toggleAutoZoomIn,
  togglePotatoMode,
  toggleLightGrid,
  toggleCompactPalette,
  togglePaletteOpen,
  toggleMute,
  toggleChatNotify,
  toggleMenuOpen,
  toggleOnlineCanvas,
  setStyle,
  setHoldPaint,
  toggleEasterEgg,
  setMoveU,
  setMoveV,
  setMoveW,
  setColor,
  cancelMove,
  rehydrate
} = guiSlice.actions

export default guiSlice.reducer