# Slice: MSP Auto-Enrollment

**Labels:** `slice`, `in-progress`, `priority-high`

## Objective
Identify Medicaid beneficiaries who are likely eligible for the Medicare Savings Program (MSP) and streamline their enrollment.

## User Story
As a **Medicaid eligibility worker**, I want to **automatically identify beneficiaries who may qualify for MSP** so that **they receive benefits they're entitled to without manual screening**.

## Background
Minnesota has identified 30-40 eligibility scenarios in their backlog. MSP Auto-Enrollment was selected as the first "slice" because:
- Clear, measurable outcome
- Defined eligibility rules
- High impact (helps vulnerable populations)
- Demonstrates end-to-end value delivery

## Acceptance Criteria
- [ ] Accept input of beneficiary data (age, income, Medicare status)
- [ ] Apply eligibility rules to determine MSP qualification
- [ ] Display recommendation with confidence level
- [ ] Provide explanation of determination
- [ ] Deploy as accessible web application

## Outcome Measures
| Metric | Target |
|--------|--------|
| Time to complete eligibility check | < 5 seconds |
| Accuracy against test cases | 100% |
| Accessibility | WCAG 2.1 AA |

## MSP Programs & Thresholds (2024)
| Program | Income Limit | Benefits |
|---------|--------------|----------|
| QMB | ≤100% FPL | Part A & B premiums, deductibles, coinsurance |
| SLMB | ≤120% FPL | Part B premium |
| QI | ≤135% FPL | Part B premium |

## Technical Constraints
- Must be deployable to GitHub Pages (static hosting)
- Must use open source technologies
- Must include documentation for reuse

## Vendor Solutions
| Vendor | Approach | Repo | Demo |
|--------|----------|------|------|
| Alpha | Rules-based engine | [msp-solution-alpha](../../../msp-solution-alpha) | [Live](https://mes-bakeoff-demo.github.io/msp-solution-alpha) |
| Beta | Decision tree UI | [msp-solution-beta](../../../msp-solution-beta) | [Live](https://mes-bakeoff-demo.github.io/msp-solution-beta) |
| Gamma | Form wizard | [msp-solution-gamma](../../../msp-solution-gamma) | [Live](https://mes-bakeoff-demo.github.io/msp-solution-gamma) |

## Definition of Done
- [x] Working prototype deployed
- [x] Documentation complete
- [ ] Value report submitted
- [ ] Demo conducted

## RFP Details
See [rfp-msp-auto-enrollment](https://github.com/mes-bakeoff-demo/rfp-msp-auto-enrollment) for full RFP.
