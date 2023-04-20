import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  padding-top: 54px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: whitesmoke;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
  monospace;
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
a {
  text-decoration: none;
}
button {
  cursor: pointer;
}
`;