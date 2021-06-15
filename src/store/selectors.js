import { createSelector } from "@reduxjs/toolkit";

export const selectState = (state) => state;

export const messagesSelector = createSelector(selectState, (state) => state.messages);
export const loadingMessagesSelector = createSelector(selectState, (state) => state.waitingForMessages);

