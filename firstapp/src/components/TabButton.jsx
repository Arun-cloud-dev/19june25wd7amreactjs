export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );


  
}
// This component is a button that can be used in a tabbed interface.
// It takes two props: `children`, which is the content of the button, and `onSelect`, which is a function to call when the button is clicked.
// The button is wrapped in a list item (`<li>`) to fit into a menu structure.