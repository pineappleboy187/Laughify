![Logo Dark](https://github.com/user-attachments/assets/8454e796-d806-4290-bea2-231e0516839f#gh-dark-mode-only)
![Logo Light](https://github.com/user-attachments/assets/68295d3e-1c02-452f-a4c5-460b54f079c8#gh-light-mode-only)

# Laughify - Joke API

Welcome to **Laughify**, the ultimate joke API that delivers jokes across different categories. Whether you’re looking for dad jokes, puns, one-liners, or knock-knock jokes, Laughify has you covered. Get your daily dose of laughs with simple API requests!

## Table of Contents

- [Features](#features)
- [Endpoints](#endpoints)
- [Examples](#examples)
- [Contributing](#contributing)

## Features

- 🃏 **Random Jokes**: Get a random joke from any category.
- 🎯 **Category-Specific Jokes**: Choose from categories like dad jokes, puns, Halloween jokes, and more.
- ⚡ **Fast & Simple**: Lightweight API for instant joke delivery.
- 📦 **JSON Response**: All responses are in easy-to-use JSON format.
- 🍓 **Hosted on a Raspberry Pi**: Using Cloudflare Tunnels.

## Endpoints

### 1. Get a Random Joke
- **Endpoint:** `/jokes/random`
- **Method:** GET
- **Response Example:**
  ```json
  {
    "category": "Dad Joke",
    "joke": "Why don’t skeletons fight each other? They don’t have the guts."
  }
  ```

### 2. Get a Joke by Category
- **Endpoint:** `/jokes/{category}`
- **Method:** GET
- **Categories:** `dad`, `knock-knock`, `one-liner`, `knock-knock`, `one-liner`, `corny`, `puns`, `riddles`, `animal`, `observational`
- **Response Example:**
  ```json
  {
    "category": "Pun",
    "joke": "I used to play piano by ear, but now I use my hands."
  }
  ```

## Examples

Here are a few ways you can interact with the **Laughify** API:

### Random Joke
```bash
curl -X GET "https://api.laughify.com/jokes/random"
```

### Category-Specific Joke (e.g., Dad Jokes)
```bash
curl -X GET "https://api.laughify.com/jokes/dad"
```

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of the changes you've made.

### To-Do List
- [ ] Add more joke categories.
- [ ] Implement user submission of jokes.
- [ ] Add joke rating and voting functionality.

---

