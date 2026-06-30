---
title: YouTube Transcript Pipeline
problem: Hours of spoken content in YouTube playlists are locked in the UI—not queryable, exportable, or usable for analysis.
keyDecision: Ingest captions into local DuckDB (Bronze → Silver) with yt-dlp instead of paid scraping APIs—keeps cost at zero for personal-scale playlists.
outcome: Full playlist ingested to searchable SQL; bronze/silver layers with per-video fetch status and idempotent transforms.
productionThinking:
  tests: pytest on transform functions and idempotency—re-running Silver transforms on the same Bronze data produces identical output. Fixture-based tests on caption parsing edge cases (missing timestamps, empty segments).
  errorHandling: Per-video fetch status tracked in Bronze layer; failed downloads log the error and skip without aborting the batch. Transforms validate schema before writing to Silver and reject malformed rows with a clear log entry rather than corrupting downstream tables.
  deployment: CLI tool run locally—no server to deploy. DuckDB file is the artifact; pipeline is reproducible from a clean clone via documented setup steps in the README.
  monitoring: Structured logging on each ingest and transform step with video ID, status, and duration. Batch summary printed at completion (succeeded / failed / skipped counts).
---

## Context

I follow educational YouTube playlists where the spoken content is the value—but YouTube's UI doesn't let you search across videos, export transcripts in bulk, or run SQL analysis. I wanted to turn hours of playlist content into a queryable dataset I could actually use for study and reference.

The problem is personal-scale (my playlists, my machine) but the architecture patterns—bronze/silver layering, idempotent transforms, batch error handling—mirror production data pipelines.

## Role and constraints

Solo project. Constraints: zero budget for paid transcript APIs, must handle playlists with dozens of videos, and re-runs should not duplicate or corrupt data. The pipeline runs on a laptop, not a cloud cluster, so I optimized for simplicity and reproducibility over throughput.

## Technical decisions

**Bronze → Silver over a single flat table.** I chose a two-layer model because raw caption fetches and cleaned, normalized transcripts have different failure modes. Bronze stores exactly what yt-dlp returns with per-video fetch status. Silver applies transforms (dedup, timestamp normalization, text cleanup) idempotently. This mirrors warehouse patterns at a personal scale.

**yt-dlp over paid APIs.** YouTube's official API doesn't expose bulk captions cheaply. yt-dlp extracts captions directly and keeps the pipeline free. Tradeoff: yt-dlp can break when YouTube changes internals, so I track fetch status per video and handle failures gracefully rather than assuming 100% success.

**DuckDB over PostgreSQL or SQLite.** DuckDB handles analytical queries on local files without a running server. For searching across thousands of transcript segments, columnar storage and SQL are the right interface. I chose file-based DuckDB so the entire dataset is portable—copy the `.duckdb` file and you have the pipeline output.

**Idempotent transforms.** Re-running Silver on the same Bronze input produces identical output. This matters because playlist updates add new videos over time; I needed incremental ingest without manual cleanup of partial runs.

## Outcome and learning

A full playlist ingests to searchable SQL with bronze/silver layers, per-video fetch status, and idempotent transforms. I can query across all videos in a playlist—find mentions of a topic, compare phrasing, export subsets—things impossible in the YouTube UI.

The demo is the GitHub repo with a documented CLI workflow. If I extended this, I'd add a minimal Streamlit viewer for recruiters who don't want to run SQL directly. The pipeline architecture is the signal: I think in layers, handle partial failure, and design for re-runs—not just happy-path scripts.
