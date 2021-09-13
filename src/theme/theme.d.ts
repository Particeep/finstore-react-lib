import React from "react"

export declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    list: {
      borderColor: React.CSSProperties["borderColor"]
      borderRadius : React.CSSProperties["borderRadius"]
      boxShadow: React.CSSProperties["boxShadow"]
      item:{
        height: React.CSSProperties["height"]
      }
    }
    btn: {
      borderRadius : React.CSSProperties["borderRadius"]
      iconSize : number
    }
    inputs: {
      height: React.CSSProperties["height"]
      border: {
        color: React.CSSProperties["borderColor"]
        focus: React.CSSProperties["borderColor"]
        radius: React.CSSProperties["borderRadius"]
      }
    }
    link:{
      color: string
    }
    card: {
      boxShadow: React.CSSProperties["boxShadow"]
      borderRadius: React.CSSProperties["borderRadius"]
      header: {
        backgroundColor: React.CSSProperties["backgroundColor"]
        size            : {
          big    : React.CSSProperties["height"]
          medium : React.CSSProperties["height"]
        }
      }
    }
  }

  interface ThemeOptions {
    list?: {
      item:{
        height: React.CSSProperties["height"]
      }
    }
    btn?: {
      borderRadius : React.CSSProperties["borderRadius"]
      iconSize : number
    }
    inputs?: {
      height: React.CSSProperties["height"]
      border: {
        color: React.CSSProperties["borderColor"]
        focus: React.CSSProperties["borderColor"]
        radius: React.CSSProperties["borderRadius"]
      }
    }
    link?:{
      color: string
    }
    card?: {
      boxShadow: React.CSSProperties["boxShadow"]
      borderRadius: React.CSSProperties["borderRadius"]
      header: {
        backgroundColor: React.CSSProperties["backgroundColor"]
        size            : {
          big    : React.CSSProperties["height"]
          medium : React.CSSProperties["height"]
        }
      }
    }
  }
}
