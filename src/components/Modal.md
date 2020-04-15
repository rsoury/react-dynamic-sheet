Modal is a component that opens a modal dialog component.

```jsx
import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button onClick={() => setOpen(true)}>Click me!</button>
			<Modal isOpen={open} onClose={() => setOpen(false)}>
				<div style={{ padding: "20px 20px 200px" }}>Hello World</div>
			</Modal>
		</>
	);
};

<App />;
```
