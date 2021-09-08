import React from "react"
import { ReactState } from "../components"

export interface IWindowSize {
  width: number
  height: number
}

export const useWindowSize = (): IWindowSize => {
  const [ windowSize, setWindowSize ]: ReactState<IWindowSize> = React.useState({
    width  : window.innerWidth,
    height : window.innerHeight
  })

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWindowSize)

    return () => {
      window.removeEventListener("resize", changeWindowSize)
    }
  }, [])

  return windowSize
}
