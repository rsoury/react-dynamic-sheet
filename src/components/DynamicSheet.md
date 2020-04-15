DynamicSheet is a dynamic component that opens a different modal depending on the device used.
On mobile devices, a bottom sheet will open and on other devices a standard modal will open.

```jsx
import React, { useState } from "react";
import DynamicSheet from "./DynamicSheet";

const App = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<button onClick={() => setOpen(true)}>Click me!</button>
			<DynamicSheet isOpen={open} onClose={() => setOpen(false)}>
				<div style={{ padding: "20px 20px 200px" }}>Hello World</div>
			</DynamicSheet>
		</>
	);
};

<App />;
```
