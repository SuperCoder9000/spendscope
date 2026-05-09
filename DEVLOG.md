## Day 1 — 2026-05-08

**Hours worked:** 4

**What I did:**  
Initialized the project using Next.js, TypeScript, Tailwind CSS, and App Router. Created the public GitHub repository and pushed the initial codebase. Installed core dependencies including Supabase, React Hook Form, Zod, Framer Motion, Resend, and testing libraries. Set up the initial project architecture and created all required markdown documentation files from the assignment specification. Built an initial landing page hero section and structured the application for future audit engine implementation.

**What I learned:**  
Spent time understanding the assignment as a real product-building exercise rather than a standard coding challenge. Realized the project heavily emphasizes entrepreneurial thinking, realistic engineering decisions, documentation quality, and consistency across multiple days.

**Blockers / what I'm stuck on:**  
Still planning the exact recommendation logic for the audit engine and how to generate realistic optimization suggestions without overestimating savings.

**Plan for tomorrow:**  
Build the AI spend input form, define pricing schemas for supported tools, and start implementing the audit engine recommendation logic and state persistence.

## Day 2 — 2026-05-09

**Hours worked:** 5

**What I did:**  
Built the initial AI spend input form and created reusable pricing schemas for supported AI tools including ChatGPT, Claude, Cursor, Copilot, and Gemini. Added TypeScript interfaces for audit data structures and connected the form to the homepage UI. Implemented local storage persistence for form state to preserve inputs across reloads. Started building the audit recommendation engine with initial savings logic and added the first automated tests using Vitest.

**What I learned:**  
Learned how important centralized data structures are for keeping pricing logic maintainable and reusable across the form and audit engine. Also explored how local state persistence improves user experience significantly for multi-step product flows.

**Blockers / what I'm stuck on:**  
Still refining the recommendation engine logic to make optimization suggestions feel financially realistic rather than generic rule-based outputs.

**Plan for tomorrow:**  
Expand the audit engine logic, build a dynamic audit results page, and start integrating AI-generated personalized summaries using an LLM API.