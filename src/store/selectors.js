import { createSelector } from "@reduxjs/toolkit";

export const selectState = (state) => state;

export const messagesSelector = createSelector(
  selectState, 
  (state) => state.messages.messages
);
export const loadingMessagesSelector = createSelector(
  selectState, 
  (state) => state.messages.waitingForMessages
);
export const chatStatsSelector = createSelector(
  selectState, 
  (state) => state.chatStats
);
export const userDataSelector = createSelector(
  selectState, 
  (state) => state.user
)

