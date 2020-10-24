module Components

open Feliz

[<ReactComponent>]
let counter(initial: int) =
    let (count, setCount) = React.useState initial
    Html.div [
        Html.button [
            prop.style [ style.backgroundColor.blue ]
            prop.onClick (fun _ -> setCount(count + 1))
            prop.text "Increment"
        ]

        Html.button [
            prop.onClick (fun _ -> setCount(count - 1))
            prop.text "Decrement"
        ]

        Html.h1 (count * 10)
    ]

[<ReactComponent>]
let index() = React.fragment [
    counter 5
    counter 12
]