'use client'
import store from '@/store/store'
import { Provider } from 'react-redux'
import React from 'react'

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default StoreProvider;
