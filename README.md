# Next.js AI Prompts

This is a Next.js application that fetches and displays AI-generated prompts. The prompts are retrieved from a public Google Sheet and are parsed using the PapaParse library. The application is styled with Tailwind CSS.

## Features

- **AI Prompts**: Displays randomly selected AI-generated prompts.
- **Responsive Design**: Fully responsive layout optimized for various screen sizes using Tailwind CSS.
- **Dynamic Content**: Fetches content from an external source (Google Sheet) and dynamically updates the UI.
- **TypeScript Support**: Strongly typed with TypeScript for better code quality and developer experience.

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/pnvdev/nextjs-ai-prompts.git
cd nextjs-ai-prompts
npm install
```

````

## Running the Development Server

You can start the development server by running:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

## Environment Variables

Make sure to set up the following environment variables in a `.env.local` file:

```env
NEXT_PUBLIC_SHEET=<Your Google Sheet URL>
```

## Project Structure

- `pages/`: Contains the main pages of the application.
- `components/`: Reusable React components used throughout the project.
- `styles/`: Custom Tailwind CSS styles.
- `utils/parse.ts`: Utility function to parse the CSV data fetched from the Google Sheet.

## Usage

- The main page of the application fetches data from the provided Google Sheet URL, parses it using PapaParse, and displays a random AI-generated prompt.
- Tailwind CSS is used to style the components, ensuring a clean and modern UI.

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PapaParse](https://www.papaparse.com/)
````
