import { render, screen } from '@testing-library/react';
import App from './App';
import posts from "./posts.js"

describe("the App component", () => {
    it("should run some jest-like expectations", () => {
        expect(2 + 2).toEqual(4) //sanity check test
    })
    // it("should render components with RTL", () => {
    //     render(<App posts={posts} />)
    //     screen.debug()
    // })
})

