# Minnesota MES Modernization Hub

> **The Recipe Book** — This is the central hub for Minnesota's challenge-based MES modernization initiative.

## What Is This?

This repository demonstrates how GitHub can serve as the backbone for transparent, challenge-based government procurement. It's a working example of the concepts presented by Minnesota DHS at MESC 2026.

## The Bake-Off Model

Instead of selecting vendors based on proposals, we:

1. **Publish the Backlog** — Slices and Layers with clear Definitions of Done
2. **Invite Solutions** — Vendors propose and build against backlog items
3. **Evaluate in Parallel** — Multiple vendors can work on the same slice
4. **Scale What Works** — Winners get more work, not bigger contracts

## Backlog

See [Issues](../../issues) for the current backlog of Slices and Layers.

| Type | Description |
|------|-------------|
| **Slice** | End-to-end use case that delivers value users can "taste" |
| **Layer** | Enabling capability that supports slice delivery |

### Current Slices

- **MSP Auto-Enrollment** — Automatically identify Medicaid beneficiaries eligible for Medicare Savings Program
  - [RFP Repo](https://github.com/mes-bakeoff-demo/rfp-msp-auto-enrollment)
  - Solutions in progress:
    - [Alpha (Rules-based)](https://github.com/mes-bakeoff-demo/msp-solution-alpha)
    - [Beta (Decision Tree)](https://github.com/mes-bakeoff-demo/msp-solution-beta)
    - [Gamma (Form Wizard)](https://github.com/mes-bakeoff-demo/msp-solution-gamma)

## How It Works on GitHub

| GitHub Feature | Procurement Use |
|----------------|-----------------|
| **Issues** | Backlog items (Slices & Layers) with Definition of Done |
| **Discussions** | Transparent vendor Q&A |
| **Projects** | Pipeline visibility (Available → In Progress → Delivered) |
| **Pull Requests** | Proposal submissions |
| **Repos** | Vendor solution code |
| **Actions** | Automated checks, deployment |
| **Pages** | Working demos |

## Templates

The `/templates` folder contains adaptable procurement templates:

- [Challenge-Based Professional Services RFP](templates/professional-services-rfp.md)
- [Challenge-Based Software RFP](templates/software-rfp.md)
- [Contract and Work Order Template](templates/contract-template.md)

## Prior Art

This approach builds on work by:

- **Alaska DHSS** — [EIS Modernization](https://github.com/akhealth/EIS-Modernization) (2017)
- **18F** — [Agile BPA](https://18f.gsa.gov/2015/08/28/announcing-the-agile-BPA-awards/) (2015)
- **California CHHS** — [ADPQ Vendor Pool](https://ca-cwds.github.io/procurements/) (2016)
- **SI Delivery** — [Challenge-Based RFP Starter Kit](https://si-delivery.com/starter-kit/)

## The Cooking Analogy

| Concept | Kitchen Equivalent |
|---------|-------------------|
| This repo | The Recipe Book |
| Backlog Issues | Tonight's Menu |
| RFP repos | Recipe Cards |
| Solution repos | Chefs cooking |
| Value Reports | Taste tests |
| GitHub Pages | Serving the dish |

---

## About This Demo

This is a demonstration created during the Minnesota DHS presentation at MESC 2026. It shows what GitHub-powered procurement could look like — not a production system.

**Want to try this approach?** Fork this repo and adapt it for your state.

---

*Built fast. In the open. Because that's the point.*
