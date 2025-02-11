'use client';

import MainPage from "../components/MainPage"
import { LanguageProvider } from "../context/LanguageContext"

const Page = () => {
  return (
    <LanguageProvider initialLanguage="Ukrainian" >
      <MainPage />
    </LanguageProvider>
  )
}

export default Page