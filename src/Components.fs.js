import { Feliz_React__React_useState_Static_1505 as React_Feliz_React__React_useState_Static_1505 } from "./.fable/Feliz.1.16.0/React.fs.js";
import { reactApi as Interop_reactApi, reactElement as Interop_reactElement, mkAttr as Interop_mkAttr, mkStyle as Interop_mkStyle } from "./.fable/Feliz.1.16.0/Interop.fs.js";
import { ofArray as List_ofArray, singleton as List_singleton } from "./.fable/fable-library.3.0.0-nagareyama-beta-002/List.js";
import { createObj as Util_createObj } from "./.fable/fable-library.3.0.0-nagareyama-beta-002/Util.js";
import { createElement as react_createElement } from "react";
import * as react from "react";

export function Counter(counterProps) {
    let xs, properties, xs_1, value_2;
    const initial = counterProps.initial;
    const patternInput = React_Feliz_React__React_useState_Static_1505(initial);
    const setCount = patternInput[1];
    const count = patternInput[0] | 0;
    const children = List_ofArray([(xs = List_ofArray([(properties = List_singleton(Interop_mkStyle("backgroundColor", "#0000FF")), Interop_mkAttr("style", Util_createObj(properties))), Interop_mkAttr("onClick", (_arg1) => {
        setCount(count + 1);
    }), Interop_mkAttr("children", "Increment")]), Interop_reactElement("button", Util_createObj(xs))), (xs_1 = List_ofArray([Interop_mkAttr("onClick", (_arg2) => {
        setCount(count - 1);
    }), Interop_mkAttr("children", "Decrement")]), Interop_reactElement("button", Util_createObj(xs_1))), (value_2 = ((count * 10) | 0), Interop_reactElement("h1", Util_createObj(List_singleton(["children", new Int32Array([value_2])]))))]);
    return Interop_reactElement("div", Util_createObj(List_singleton(["children", Interop_reactApi.Children.toArray(Array.from(children))])));
}

export function Index() {
    const xs = [react_createElement(Counter, {
        initial: 5,
    }), react_createElement(Counter, {
        initial: 12,
    })];
    return react.createElement(react.Fragment, {}, ...xs);
}

