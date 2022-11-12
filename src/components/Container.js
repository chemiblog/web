import React from "react"
import { ContainerWrapper } from "../elements"
import { Footer, Nav } from "../components"

export const Container = ({ children }) => {
  return (
    <ContainerWrapper>
      <Nav />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}
