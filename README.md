# Web-Application-Mimicking-Google-Sheets
## Overview

This project is a web-based spreadsheet application that mimics Google Sheets, allowing users to enter data, perform mathematical calculations, and apply data quality functions. The application supports essential spreadsheet functionalities such as formulas, formatting, and data validation.
Features

### 1. Spreadsheet Interface

Google Sheets-like UI with a toolbar, formula bar, and cell structure.

Drag functions to copy cell content and formulas.

Cell dependencies to automatically update related cells.

Basic cell formatting (bold, italics, font size, color).

Ability to add, delete, and resize rows and columns.

### 2. Mathematical Functions

Formula Evaluation: Allows users to input formulas and compute results dynamically.

Basic Arithmetic Operations: Users can input and evaluate simple mathematical expressions.

### 3. Data Entry and Validation

Supports numbers, text, and dates.

Basic validation checks to ensure numeric cells only contain numbers.

### 4. Testing

Users can test functions with sample data.

Results are displayed clearly for verification.

Bonus Features

Advanced formulas and complex cell referencing.

Save and load spreadsheet functionality.

Data visualization (charts and graphs).

## Tech Stack

Frontend: React.js (for dynamic UI updates)

State Management: useState hook (for managing cell data and formulas)

Styling: Tailwind CSS (for a clean and modern UI)

Security Considerations: Currently uses eval for formula evaluation (needs to be replaced with a safer alternative to prevent security vulnerabilities).

## Data Structures Used

2D Array: Used to represent the spreadsheet grid (cells state array).

Object State: Manages selected cell (selectedCell state).

String Parsing: Evaluates formulas and updates dependent cells.
