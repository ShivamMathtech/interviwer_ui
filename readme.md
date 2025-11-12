# Virtual Interview Panel UI

This project is a modern, interactive UI for a virtual interview panel, built using **React** and **Vite**. It provides a seamless platform for conducting developer interviews, enabling advanced workflows and feature-rich coding environments.

## Features

- **Pricing Section**  
  Clearly displays available plans and pricing tiers for your interview services.

- **Interview Feature Area**  
  A dedicated module for assigning interview sections, managing candidate flow, and configuring the types of questions/topics.

- **Coding Section with Editor**  
  Integrated code editor for candidates to write and test solutions during interviews.

  - Syntax highlighting
  - Real-time feedback
  - Support for multiple programming languages (optionally extendable)

- **Workflow Design Editor**  
  Drag and drop interface for designing custom interview workflows and templates.
  - Add stages (coding, HR, system design, etc.)
  - Reorder and configure steps visually

## Getting Started

### Prerequisites

- **Node.js** (>=18 recommended)
- **npm** (>=9 recommended) or **yarn**

### Installation

```bash
git clone https://github.com/ShivamMathtech/interviwer_ui.git
cd interviwer_ui
npm install
```

### Running the App

```bash
npm run dev
```

- The app will be available at `http://localhost:5173` (default Vite dev server port).

## Project Structure

```plaintext
src/
  components/       # Main UI components (Panels, Editors, Feature Areas)
  workflows/        # Workflow editor components and logic
  pricing/          # Pricing plans page/sections
  editor/           # Code editor integration
  assets/           # Images, style files, etc.
  App.jsx           # Main App entrypoint
  main.jsx          # Vite entrypoint
```

## Technologies Used

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/) or [CodeMirror](https://codemirror.net/) (recommended for coding section)
- CSS/SCSS/Styled Components (as per your styling choice)

## Customization

- Add/remove interview modules through the workflow editor.
- Extend the code editor for additional languages or custom problem validation.
- Configure pricing plans in `src/pricing/`.

## Contributing

Pull requests and suggestions are welcome!  
Please fork the repository and create a PR with your changes.

## License

MIT License

---

Created by [ShivamMathtech](https://github.com/ShivamMathtech)
