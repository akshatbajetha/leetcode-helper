# LeetCode Buddy: AI DSA Teaching Assistant
An AI DSA teaching assistant that guides users through Data Structures and Algorithms (DSA) problems by offering hints, guidance, and intuition-building without providing direct solutions.

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Architecture Overview](#architecture-overview)
- [Usage Guidelines](#usage-guidelines)
- [GPT Integration Details](gpt-integration-details)

## Setup Instructions
To set up the project locally, follow these steps:

1. Clone the Repository:

```
git clone https://github.com/akshatbajetha/leetcode-helper.git
cd leetcode-helper
```

2. Install Dependencies:

Ensure you have Node.js installed. Then, install the necessary packages:

```
npm install
```

3. Set Up Environment Variables:

Create a .env.local file in the root directory to store environment-specific variables:

```
touch .env.local
```

4. Add your OpenAI API key to this file:

```env
OPENAI_API_KEY=your_openai_api_key_here
```
Replace your_openai_api_key_here with your actual OpenAI API key.

5. Run the Development Server:

Start the server with:

```npm run dev```

The application will be accessible at [http://localhost:3000](http://localhost:3000/).

## Architecture Overview
The application is structured as follows:

- **Frontend**: Built with Next.js and TypeScript, providing a robust and scalable React framework.

- **Backend API Routes**: Utilizes Next.js API routes to handle server-side logic and communication with external APIs.

- **OpenAI Integration**: Connects to OpenAI's [gpt-4o-mini](https://openai.com/index/gpt-4o-mini-advancing-cost-efficient-intelligence/) model to generate dynamic, context-aware responses based on user input.

- Styling: Implemented using [Tailwind CSS](https://tailwindcss.com/) and [ShadCN/UI](https://ui.shadcn.com/) for efficient and responsive design.

## Usage Guidelines
To use the application:

1. Access the Application:
Navigate to [http://lcbuddy.vercel.app/](https://lcbuddy.vercel.app/) in your web browser.

2. Input LeetCode Problem Link:
Enter the URL of the LeetCode problem you wish to discuss.

3. Ask Your Question:
Pose specific questions or express doubts related to the problem. The AI assistant will provide guidance, hints, and help build your intuition without revealing direct solutions.

## GPT Integration Details
The integration with OpenAI's GPT models operates as follows:

1. API Route for GPT Interaction:
The application includes an API route (/api/gpt) that handles requests to OpenAI's GPT endpoints. This route processes user input and retrieves responses from the GPT model.

2. Prompt Engineering:
To ensure the AI provides helpful guidance without giving away direct answers, the system uses carefully designed prompts. These prompts encourage the AI to ask guiding questions, provide related examples, and offer thought-provoking hints.

3. Environment Variables:
The OpenAI API key is stored securely in the .env.local file, ensuring it is not exposed in the codebase. The application retrieves this key to authenticate API requests.

4. Response Handling:
User inputs are sent to the GPT API, and the responses are processed to display guidance and hints in the user interface, fostering a deeper understanding of DSA problems.
