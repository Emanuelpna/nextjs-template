import type { NextPage } from 'next'
import { useState } from 'react'

const Home: NextPage = () => {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount((count) => count + 1)
  }

  return (
    <div>
      <h3>Techs</h3>
      <ul>
        <li>
          <a href="https://nextjs.org/">Next.js</a>
        </li>

        <li>
          <a href="https://pt-br.reactjs.org/">React</a>
        </li>

        <li>
          <a href="https://www.typescriptlang.org/">Typescript</a>
        </li>

        <li>
          <a href="https://prettier.io/">Prettier</a>
        </li>

        <li>
          <a href="https://eslint.org/">Eslint</a>
        </li>

        <li>
          <a href="https://jestjs.io/pt-BR/">Jest</a>
        </li>

        <li>
          <a href="https://testing-library.com/">React Testing Library</a>
        </li>

        <li>
          <a href="https://typicode.github.io/husky/#/">Husky</a>
        </li>

        <li>
          <a href="https://commitizen.github.io/cz-cli/">Commitzen</a>
        </li>
      </ul>

      <br />
      <hr />
      <br />

      <h3>Example</h3>

      <button onClick={incrementCount}>Click me :: {count}</button>
    </div>
  )
}

export default Home
