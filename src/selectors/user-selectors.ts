import { RootState } from "../types";

export const authorizedUserSelector = (state: RootState) => state.users.authorizedUser