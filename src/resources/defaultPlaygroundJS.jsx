import { stripIndent } from "react-codepen-prefill-embed";
const defaultJS = stripIndent`
        function App() {
            return (
              <div className="App">
                <p className="app-header">This is a default file that I can modify and serve separately from the CodePen component...
                <a href=''>Here's a link to it on GitHub (hopefully 😁)</a></p>
              </div>
            );
          }
          
ReactDOM.render(<App />, document.getElementById("root"));
`;

export { defaultJS };
