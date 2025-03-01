import { IFile } from "../interface";

export const doseFileExist = (arr: IFile[], id: string) => {
  return arr.some((obj) => obj.id === id);
};
