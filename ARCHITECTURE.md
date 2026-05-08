# Architecture Overview

## Stack Choice

The project uses Next.js with the App Router architecture because it provides a strong fullstack developer experience, server-side rendering capabilities, API routes, and easy deployment on Vercel.

TypeScript is used for type safety and maintainability.

Supabase will be used for backend data storage and lead capture functionality.

Resend will be used for transactional emails.

## Planned Flow

1. User lands on the homepage
2. User fills AI tool spending form
3. Audit engine processes spend data
4. Recommendations and savings calculations are generated
5. AI summary is generated using LLM API
6. User can save/share report
7. Lead data stored in database