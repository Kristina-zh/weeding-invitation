'use client';

import MainPage from "../components/MainPage"
import { LanguageProvider } from "../context/LanguageContext"

const Page = () => {
  return (
    <LanguageProvider initialLanguage="Russian" >
      <MainPage />
    </LanguageProvider>
  )
}

export default Page