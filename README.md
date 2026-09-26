# FitLog — Workout Library & Training Log

FitLog is a responsive workout library and training tracker built with Next.js. It allows users to explore workouts, view detailed exercise information, create a daily workout plan, save workouts for later, and track basic training statistics.

## Live Project

🔗 **Live Demo:** 

---

## About The Project

FitLog is a workout-focused web application where users can browse a collection of exercises and organize their daily training.

The project focuses on practicing modern Next.js development, API integration, responsive UI design, state management, and client-side persistence.

Users can:

- Browse available workouts
- View detailed information about each workout
- Add workouts to today's training plan
- Save workouts for later
- Remove workouts from their plan or saved list
- Mark completed workouts as done
- Sort their training plan by duration, calories, or rating
- View total exercises, training minutes, and calories
- Keep their plan and saved workouts after refreshing the page

---

## Features

### 🏋️ Workout Library

Browse workouts fetched from the FitLog API with information such as:

- Workout name
- Muscle groups
- Equipment
- Duration
- Calories burned
- Rating

### 📋 Today's Plan

Add workouts to a personal daily training plan and see:

- Total exercises
- Total training minutes
- Total calories
- Individual workout statistics

### 🔖 Save For Later

Save workouts that you want to revisit later. Saved workouts can be viewed and removed from the **Saved** section.

### 📊 Workout Sorting

Sort today's workout plan by:

- Duration
- Calories
- Rating

### ✅ Mark As Done

Mark individual workouts as completed while keeping them in the current training plan.

### 💾 Local Storage

The current workout plan and saved workouts are stored in the browser's local storage, so they remain available after refreshing the page.

### 📱 Responsive Design

The interface is designed to work across:

- Mobile
- Tablet
- Desktop

### 🔔 Toast Notifications

Toast notifications provide feedback when users:

- Add a workout to the plan
- Save a workout
- Try to add a duplicate workout
- Try to exceed the plan limit

---

## Technologies Used

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**
- **React Icons**
- **React Toastify**
- **Next.js App Router**
- **REST API**
- **Local Storage**

---

## API

FitLog uses the following API to retrieve workout data.

### All Workouts

```text
https://api.api-store.workers.dev/api/fitlog
