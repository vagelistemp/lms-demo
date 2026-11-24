# LMS — Interactive Demo

**Live demo: https://vagelistemp.github.io/lms-demo/**
Pick a role on the first screen. No account, no installation; it runs in your browser.

<p align="center">
  <img src="screenshots/02-dashboard.png" alt="Administrator dashboard" width="860">
</p>

LMS is a school-management system I built for a Greek training institution. It replaces an Excel-based workflow with one
place for **people and their service history**, the **directives (official orders)** that create schools, enrol students and
assign teachers, and the **grades and absences** that decide who passes. The interface is in Greek.

## What you can try

| Role | What it shows |
|---|---|
| **Administrator** | Dashboard, people (search, filters, service history, education), directives, schools with grades / absences / statistics, reference data (ranks, units, grading scales, courses), approvals queue |
| **Teacher** | Own courses and students, grade and absence submission (which then wait for approval) |
| **Student** | Own grades, absences and the results of completed schools |
| **Registration form** | The student registration form; what it collects waits in the administrator's approvals queue |

Direct links: [administrator](https://vagelistemp.github.io/lms-demo/?role=admin#/dashboard) ·
[teacher](https://vagelistemp.github.io/lms-demo/?role=teacher#/teacher) ·
[student](https://vagelistemp.github.io/lms-demo/?role=student#/student)

Things worth a look:

- **A school is created by an order, not by hand.** A *template* directive carries the course list; enrolment, teacher
  assignment, drop-out, cancellation and swap directives then change who is in the school, and can be undone with a preview.
- **Status is derived, not stored.** Whether an enrollment is pending, active, completed or failed is computed from the dates,
  the grades and the absence cap.
- **Service history is dated.** A person's rank and unit change over time; every enrollment keeps a snapshot, so a finished school
  never changes retroactively.
- **Everything is editable in the demo**: add a person, enter a grade, approve a teacher's submission. Changes live in the
  page and disappear on reload.

## How this demo works

The real application has a Spring Boot backend and a MySQL database. A static site cannot run those, so this build contains
**only the front end**, together with a small in-browser backend that answers the same API calls. Its answers were recorded from
the real backend running on a **synthetic data set** (invented people, units and schools; nothing from real life), and edits are
applied to an in-memory copy. Nothing is sent anywhere.

Some features work with files on the server (generating Excel and Word documents, backups, document templates). They appear in
the menu but are disabled here, with a short note.

## The real application

- **Backend:** Java 21, Spring Boot 3, Spring Security (JWT in httpOnly cookies, refresh-token revocation, login
  throttling), Spring Data JPA, Flyway (76 migrations), MySQL 8, an AOP audit trail
- **Frontend:** React 18, Vite, Ant Design 5, TanStack Query, Zustand, React Router
- **Delivery:** Docker images for the VM, with a script that builds and verifies them

This repository contains only the built demo. The application's source code is private.

## Screenshots

<p>
  <img src="screenshots/03-people.png" alt="People" width="49%">
  <img src="screenshots/04-person-detail.png" alt="Person" width="49%">
</p>
<p>
  <img src="screenshots/05-school-students.png" alt="School roster" width="49%">
  <img src="screenshots/06-school-absences.png" alt="Absences" width="49%">
</p>
<p>
  <img src="screenshots/07-directives.png" alt="Directives" width="49%">
  <img src="screenshots/08-admin-ranks.png" alt="Reference data" width="49%">
</p>
<p>
  <img src="screenshots/09-teacher-portal.png" alt="Teacher portal" width="49%">
  <img src="screenshots/10-student-portal.png" alt="Student portal" width="49%">
</p>

---

Created by **Evangelos Tempelopoulos**. © 2026, all rights reserved.
