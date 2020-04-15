# React Dynamic Sheet

To install:
`npm i react-dynamic-sheet` or `yarn add react-dynamic-sheet` 

Styleguide:
https://rsoury.github.io/react-dynamic-sheet/

React Dynamic Sheet is react component to provide mobile users an app like, swipeable Bottom Sheet and desktop users a Modal Dialog. 

#### What does it look like?
![Demonstration of Sheet on Mobile](https://media.giphy.com/media/kcUcYwklHAE4BEdo43/giphy.gif)

#### How to use it? 
```jsx
import DynamicSheet from 'react-dynamic-sheet';
import { EntryButton, Box } from './your-components/'

const App = () => {
  const [checkout, setCheckout] = useState(false);
  const abort = () => setCheckout(false);
  const startCheckout = () => setCheckout(true);
  const confirmClose = true;

  return (
    <>
      <DynamicSheet
        isOpen={checkout}
        onClose={abort}
        confirmClose={confirmClose}
      >
        <Box sx={{ padding: "200px 40px" }}>Hello Checkout</Box>
      </DynamicSheet>
      <EntryButton onClick={startCheckout} />
    </>
  );
}
```