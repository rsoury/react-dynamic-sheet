BottomSheet is an animated mobile-first component that opens an app-like drawer.
By default, the Sheet will be exposed enough to show its contents.
If the height of the Sheet body exceeds half the viewport height, then the Sheet can be expanded through swipes.
This sheet was inspired by Instagram's action sheets.

```jsx
import React, { useState } from "react";
import BottomSheet from "./BottomSheet";

const App = () => {
	const [open, setOpen] = useState("");

	return (
		<>
			<button onClick={() => setOpen("small")}>Open Small Sheet</button>
			<BottomSheet isOpen={open === "small"} onClose={() => setOpen("")}>
				<div style={{ padding: "20px 20px 200px" }}>Hello World</div>
			</BottomSheet>
			<hr />
			<button onClick={() => setOpen("large")}>Open Large Sheet</button>
			<BottomSheet isOpen={open === "large"} onClose={() => setOpen("")}>
				<div style={{ padding: "20px 20px 500px" }}>Swipe up and down</div>
			</BottomSheet>
		</>
	);
};

<App />;
```
