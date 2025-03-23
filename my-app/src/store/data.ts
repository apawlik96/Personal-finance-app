import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../data/data.json";

interface Balance {
  current: number;
  income: number;
  expenses: number;
}

export interface Transaction {
  avatar: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  recurring: boolean;
}

interface Budget {
  category: string;
  maximum: number;
  theme: string;
}

interface Pot {
  name: string;
  target: number;
  total: number;
  theme: string;
}

export interface DataState {
  balance: Balance;
  transactions: Transaction[];
  budgets: Budget[];
  pots: Pot[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: DataState = {
  balance: data.balance,
  transactions: data.transactions,
  budgets: data.budgets,
  pots: data.pots,
  isLoading: false,
  isError: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    loadData(state) {
      state.isLoading = true;
      state.isError = false;
    },
    loadDataSuccess(
      state,
      action: PayloadAction<{
        balance: Balance;
        transactions: Transaction[];
        budgets: Budget[];
        pots: Pot[];
      }>
    ) {
      state.isLoading = false;
      state.balance = action.payload.balance;
      state.transactions = action.payload.transactions;
      state.budgets = action.payload.budgets;
      state.pots = action.payload.pots;
    },
    loadDataError(state) {
      state.isLoading = false;
      state.isError = true;
    },

    addBudget(
      state,
      action: PayloadAction<{
        category: string;
        maximum: number;
        theme: string;
      }>
    ) {
      const newBudget = {
        category: action.payload.category,
        maximum: action.payload.maximum,
        theme: action.payload.theme,
      };
      state.budgets.push(newBudget);
    },

    editBudget(
      state,
      action: PayloadAction<{
        category: string;
        newName: string;
        newTarget: number;
        color: string;
      }>
    ) {
      const index = state.budgets.findIndex(
        (budget) => budget.category === action.payload.category
      );
      if (index !== -1) {
        const budgetToUpdate = state.budgets[index];
        state.budgets[index] = {
          ...budgetToUpdate,
          category: action.payload.newName,
          maximum: action.payload.newTarget,
          theme: action.payload.color,
        };
      }
    },

    removeBudget(state, action: PayloadAction<string>) {
      state.budgets = state.budgets.filter(
        (budget) => budget.category !== action.payload
      );
    },
  },
});

export const {
  loadData,
  loadDataSuccess,
  loadDataError,
  addBudget,
  editBudget,
  removeBudget,
} = dataSlice.actions;
export default dataSlice.reducer;
