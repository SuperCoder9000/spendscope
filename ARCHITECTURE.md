# SpendScope Architecture

## Frontend

* Next.js App Router
* TypeScript
* Tailwind CSS
* React Client Components

## Backend Services

* Supabase (database + persistence)
* OpenAI API (AI-generated summaries)
* Resend (planned transactional email flow)

## Core Flow

1. User enters AI tooling details
2. Audit engine calculates savings opportunities
3. AI summary is generated
4. Lead information is captured
5. Audit data is persisted
6. Shareable audit reports are generated

## Key Modules

### Audit Engine

Handles:

* savings calculations
* recommendation generation
* annual projections

### Lead Capture

Stores:

* email
* company
* role

### AI Summary Service

Generates:

* personalized audit summaries
* optimization recommendations
* contextual cost-saving insights

## Deployment

* Vercel frontend hosting
* Supabase managed backend
* Environment variable configuration for API security
