import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFile } from "../../interface";
interface IClickedFiles {
  filename: string;
  fileContent: string;
}

interface IinitialState {
  openFiles: IFile[];
  ClickedFiles: IClickedFiles;
}

const initialState: IinitialState = {
  openFiles: [],
  ClickedFiles: {
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
  },
});
export const { setOpenedFiles } = fileTreeSlice.actions;
export default fileTreeSlice.reducer;
