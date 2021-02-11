import React from "react";
import App from "./App"
import { render, fireEvent, wait } from "@testing-library/react"
import {fetchShow as mockFetchShow} from "./api/fetchShow"

jest.mock('./api/fetchShow')
console.log("kh: App.test.js: mockFetchShow",mockFetchShow)

test("App renders", () =>{
    render(<App />)
})
test("App fetches and renders episode data ",async ()=>{
    mockFetchShow.mockResolvedValueOnce(mockFetchShow)
    const { getByText} = render(<App />)

    await wait (() =>{
        getByText(/Select a season/i)
    })
    const dropDown = getByText(/Select a season/i)
    fireEvent.mouseDown(dropDown);
    const seasonSelect =getByText(/Season 4/i)
    fireEvent.click(seasonSelect);
})
