module Main

open Feliz
open Browser.Dom
open Fable.Core.JsInterop

importAll "../styles/main.scss"

ReactDOM.render(Components.index(), document.getElementById "feliz-app")