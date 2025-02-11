'use client';

import MainPage from "../components/MainPage"
import { LanguageProvider } from "../context/LanguageContext"

const Page = () => {
  return (
    <LanguageProvider initialLanguage="Spanish" >
      <MainPage />
    </LanguageProvider>
  )
}

export default Page