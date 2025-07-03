import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];



export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces.",
    code: `
    function Welcome(){
      return <h1>Hello, World!</h1>;
    }`
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements in your JavaScript code.",
    code: `
    const element = <h1>Hello, World!</h1>;`
  },
  props: {
    title: "Props",
    description:
      "Props (short for properties) are a way to pass data from parent to child components. They allow you to make components dynamic and reusable.",
    code: `
    function Greeting(props) {
      return <h1>Hello, {props.name}!</h1>;
    }`
  },
  state: {
    title: "State",
    description:
      "State is a built-in object that allows components to create and manage their own data. When the state changes, the component re-renders to reflect the new data.",
    code: `
    function Counter() {
      const [count, setCount] = useState(0);
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }`
  }
}