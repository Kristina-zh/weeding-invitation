'use client';

import MainPage from "./components/MainPage"
import { LanguageProvider } from "./context/LanguageContext"

const Page = () => {
  return (
    <LanguageProvider>
      <MainPage />
    </LanguageProvider>
  )
}

export default Page