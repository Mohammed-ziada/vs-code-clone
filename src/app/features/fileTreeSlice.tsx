import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interface";
interface IClickedFile {
  filename: string;
  fileContent: string | undefined;
  activeTapId: string | null;
}

interface IinitialState {
  openFiles: IFile[];
  ClickedFile: IClickedFile;
}

const initialState: IinitialState = {
  openFiles: [],
  ClickedFile: {
    activeTapId: null,
    filename: "",
    fileContent: "",
  },
};
const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openFiles = [...action.payload];
    },
    setClicekdFiles: (state, action: PayloadAction<IClickedFile>) => {
      state.ClickedFile = action.payload;
    },
    // setActiveTapId: (state, action: PayloadAction<string>) => {
    //   state.activeTapId = action.payload;
    // },
  },
});
export const { setOpenedFiles, setClicekdFiles } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
