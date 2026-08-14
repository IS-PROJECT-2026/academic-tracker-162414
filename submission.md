# Mini-Project Submission

**Student Name:** Lornah-Sylvia Waithera Ndirima

**Admission Number:** 138141

**Class Team:** GROUP 4E

**Repository:** `academic-tracker-138141`

**GitHub Pages URL:** `https://is-project-2026.github.io/academic-tracker-138141/`

---

## 1. Project Overview

### System Name

Academic Progress Tracker

### Problem Statement

Students often struggle to monitor their academic progress, course performance, and GPA trends in one place. This system provides a simple dashboard for tracking grades and calculating GPA.

### Main Features

* Responsive landing page
* GPA calculator
* Dashboard summary cards
* LocalStorage support
* GitHub Pages deployment

---

## 2. Milestones Implemented

| Milestone              | Description                                      | Status    |
| ---------------------- | ------------------------------------------------ | --------- |
| Core Setup & UI        | Project structure and landing page               | Completed |
| GPA Calculator Logic   | JavaScript GPA calculation functionality         | Completed |
| Dashboard & Deployment | Dashboard statistics and GitHub Pages deployment | Completed |

---

## 3. Issues Completed

| Issue                      | Branch Used                |
| -------------------------- | -------------------------- |
| Create project structure   | `feat/1-project-structure` |
| Design landing page        | `feat/2-landing-page`      |
| Add GPA calculation module | `feat/3-gpa-calculator`    |
| Build dashboard statistics | `feat/4-dashboard-cards`   |
| Configure GitHub Pages     | `chore/5-pages-deployment` |

---

## 4. Git Workflow Evidence

### Branching Strategy

All development work was performed on **feature branches**. No direct development commits were made to the `main` branch.

### Conventional Commit Types Used

* `feat`
* `style`
* `fix`
* `docs`
* `chore`

### Example Commit

```text
feat(gpa): add GPA calculation module
```

---

## 5. Pull Request Process

For every completed issue:

1. A feature branch was created.
2. Changes were committed using conventional commits.
3. The branch was pushed to the organization repository.
4. A Pull Request was opened and reviewed.
5. The PR was merged into `main`.

---

## 6. Merge Conflict Simulation

A deliberate merge conflict was created between two branches that modified the same line in `index.html`.

### Evidence Location

```text
evidence/conflict_evidence.png
```

The conflict was resolved manually and committed using:

```text
fix(merge): resolve heading merge conflict
```

---

## 7. Deployment

### GitHub Pages Configuration

* **Source:** Deploy from a branch
* **Branch:** `main`
* **Folder:** `/ (root)`

### Live URL

```text
https://is-project-2026.github.io/academic-tracker-138141/
```

---

## 8. Challenges Encountered

| Challenge                             | Solution                                                             |
| ------------------------------------- | -------------------------------------------------------------------- |
| Understanding branch protection rules | Enabled PR-only merges on `main`                                     |
| Simulating a merge conflict           | Used two branches editing the same line                              |
| Linking repository to GROUP 4E        | Contacted team maintainer because student permissions were read-only |

---

## 9. Lessons Learned

Through this assignment I learned:

* How to use **feature branch workflows**
* The importance of **pull requests** in collaborative development
* How **conventional commits** improve project history readability
* How to **resolve merge conflicts safely**
* How to configure **GitHub Pages for CI/CD-style deployment**

---

## 10. Repository Structure

```text
academic-tracker-138141/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── app.js
├── evidence/
│   └── conflict_evidence.png
├── README.md
└── submission.md
```

---

## 11. Final Checklist

* [x] Repository created under **IS PROJECT 2026**
* [x] Public repository
* [x] Milestones created
* [x] Issues linked to milestones
* [x] GitHub Project Board configured
* [x] Feature branch workflow used
* [x] Conventional commits applied
* [x] Pull Requests created
* [x] Merge conflict evidence included
* [x] GitHub Pages deployed
* [x] `submission.md` completed

---

## 12. Reflection

This project helped me understand that professional software development is not only about writing code but also about maintaining a **clean Git history, structured project management workflow, and reliable deployment pipeline**. The feature-branch workflow and pull-request process provided practical experience with industry-standard development practices that are essential for collaborative software engineering environments.
