---
title: I AM
problem: People struggle to articulate identity and goals in a way AI coaching products can act on consistently.
keyDecision: Structured identity and goal capture upfront instead of open-ended chat—so coaching prompts stay consistent across sessions.
outcome: Shipped product with live user-facing flows; demo shows end-to-end coaching interaction.
productionThinking:
  tests: Component-level tests on form validation and structured capture flows; integration tests on API routes that call Bedrock. Team CI runs on pull requests before merge to staging.
  errorHandling: AI responses surface loading, timeout, and model-error states in the UI—users never see a blank screen or raw API error. Retry logic on transient Bedrock failures with exponential backoff; user-facing copy explains when the model is unavailable.
  deployment: AWS-hosted backend with staged environments (dev → staging → production). Frontend deployed as a static build with environment-specific API endpoints. Infrastructure changes go through team review.
  monitoring: CloudWatch logs on API routes and Bedrock call latency. Alerts on elevated error rates and p95 latency spikes.
myRole:
  contributions:
    - Built and refactored React flows for structured identity and goal capture—the forms that feed consistent coaching context into the AI layer.
    - Integrated Amazon Bedrock for coaching responses, including prompt assembly, API wiring, and loading/error states in the UI.
    - Implemented form validation and async submission patterns so users get immediate feedback while AI responses stream in.
    - Collaborated on API contract design between the React frontend and Node.js backend so structured user input maps cleanly to model prompts.
  notMyWork: Initial product vision and branding, core infrastructure provisioning, and backend architecture were owned by other team members.
---

## Context

I AM is an AI coaching product that helps people articulate who they are and what they want—then uses that structured context to deliver consistent, personalized coaching across sessions. Generic chat-only UX fails here because open-ended prompts produce inconsistent context, which makes AI coaching feel random rather than purposeful.

The team needed a product where user input is captured deliberately before the model responds, not improvised turn-by-turn.

## Role and constraints

Collaborative team project on a live product with real users. My work focused on the React frontend and the integration layer between structured user input and Amazon Bedrock. Constraints included model latency (users expect near-real-time responses), the need for graceful degradation when Bedrock throttles, and maintaining UX consistency across sessions as the product evolved.

## Technical decisions

**Structured capture over free-form chat.** I chose multi-step forms with validated fields over a single chat input because coaching quality depends on consistent context. Free-form chat produces variable inputs that are hard to prompt against reliably. Structured capture means every session starts from the same schema of identity and goals.

**Bedrock over a generic OpenAI wrapper.** The team standardized on Amazon Bedrock for model access within our AWS environment. I wired the frontend to backend routes that assemble prompts from structured user data, handle streaming responses, and surface errors without exposing raw API details.

**Optimistic UI with explicit error recovery.** Form submissions show immediate validation feedback; AI responses display a loading state with timeout handling. When the model fails, users see actionable copy ("Try again" / "Model temporarily unavailable") rather than a broken interface.

**TypeScript end-to-end.** Shared types between form schemas and API payloads reduced integration bugs as the data model evolved. This was especially important as coaching fields were added iteratively.

## Outcome and learning

The product shipped with live user-facing flows—the demo video shows an end-to-end coaching interaction from structured input through AI response. My takeaway: AI product UX is less about the model and more about how reliably you capture and structure user context before the model ever runs.

The structured-capture pattern is reusable anywhere an LLM needs consistent inputs—not just coaching. That architectural choice is the story I'd walk a hiring manager through in a technical screen.
