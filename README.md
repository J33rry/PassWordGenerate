# PassWordGenerate 🔐

A React-based, interactive password generator built with Next.js and MUI.  
Customize password length and character sets (uppercase, lowercase, numbers, symbols), generate strong passwords, and copy them to the clipboard effortlessly.

---

## ⚙️ Features

- **Customizable length** using an MUI Slider  
- Toggle inclusion of **uppercase**, **lowercase**, **numbers**, and **symbols**  
- **Copy-to-clipboard** functionality with iOS-compatible fallback  
- Clean UI built with **React**, **MUI**, and **Tailwind CSS**  
- ✅ Includes validation to ensure at least one character type is selected

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+  
- npm or yarn

### Installation

```bash
git clone https://github.com/J33rry/PassWordGenerate.git
cd PassWordGenerate
npm install
```

### Running the App

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser to use the password generator.

---

## 🧱 Project Structure

```
PassWordGenerate/
├── components/
│   └── AnimatedSlider.jsx       # Reusable controlled slider for password length
├── pages/ or app/               # Root layout and Password page
├── utils/
│   └── pass.js                 # `Generatepass({ ... })` wrapper around generate-password library
├── public/                     # Static assets
├── styles/                     # Global styles (Tailwind config, globals.css)
└── package.json
```

---

## 📘 Components

### `AnimatedSlider`

A controlled slider component using MUI and styled with Tailwind.  
**Props**:
- `value` *(number)*: current length value  
- `onChange` *(function)*: called with `(event, newValue)` when slider changes

---

## ✔️ Password Rules Validation

Before generating passwords, the app checks that at least one of `[uppercase, lowercase, numbers, symbols]` is enabled. If none is chosen, the "Generate" button is disabled, avoiding library errors like:

> “At least one rule for pools must be true”

---

## 📋 Clipboard Copy (Cross-platform)

Using the modern Clipboard API with a fallback using a hidden, readonly `<textarea>`, so it works in **iOS Chrome/Safari** without triggering the keyboard.

---

## 🎨 Styling

- **Tailwind CSS** for all layout and visuals  
- **MUI Slider** for rich slider control  
- Easily extendable to include features like:
  - GSAP animations
  - Checkbox toggles for character rules
  - Toast/tooltip notifications

---

## 💡 Usage Example

```jsx
import AnimatedSlider from '@/components/AnimatedSlider';
import { Generatepass } from '@/utils/pass';

function PasswordPage() {
  const [length, setLength] = useState(12);
  const [options, setOptions] = useState({
    numbers: true,
    uppercase: true,
    lowercase: true,
    symbols: false,
  });

  const password = useMemo(() => Generatepass({ length, ...options }), [length, options]);

  return (
    <div>
      <AnimatedSlider value={length} onChange={(e, v) => setLength(v)} />
      {/* Toggle components */}
      <button onClick={copyToClipboard(password)}>Copy</button>
    </div>
  );
}
```

---

## 🛠️ Customization

- Tweak length range: currently 6–12 characters  
- Toggle checkboxes for character type control  
- Integrate **GSAP** for slider or tooltip animations  
- Replace alerts with **toast libraries** (`react-hot-toast`, etc.) for better UX

---

## 🧑‍💻 Contributing

Contributions are welcome! To get started:

1. Fork the project  
2. Create a feature branch (`git checkout -b feature/my-feature`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push (`git push origin feature/my-feature`)  
5. Open a pull request 🎉

---

## 📄 License

This project is released under the **MIT License**. See [LICENSE](LICENSE) for details.

---

## 📫 Contact

Questions, feedback, or ideas? Feel free to open an issue or submit a PR!

---

Happy generating! 🚀
