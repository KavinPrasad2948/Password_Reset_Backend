
# Password Reset Backend 🛠️

This backend application provides user authentication functionalities including sign-up, login, and password reset. It uses Node.js, Express, MongoDB, and bcrypt for secure password storage, and implements a token-based password reset mechanism.

## Features ✨

- **User Sign-up:** Users can create new accounts by providing their name, email, and password.
- **User Login:** Registered users can securely log in using their email and password.
- **Password Reset:** Users can request a password reset by providing their email. A unique token is generated and sent to their email for verification.
- **Secure Password Storage:** Passwords are hashed using bcrypt before storing in the database for enhanced security.

## Getting Started 🚀

1. Clone the repository:

   ```bash
   git clone https://github.com/KavinPrasad2948/Password-Reset.git
   ```

2. Install dependencies:

   ```bash
   cd password-reset-backend
   npm install
   ```

3. Configure MongoDB connection:

   - Create a MongoDB database.
   - Update the MongoDB connection URI in `config.js`.

4. Run the server:

   ```bash
   npm start
   ```

## API Endpoints 🚪

- **POST /signup:** Create a new user account.
- **POST /login:** Log in with existing user credentials.
- **POST /forgot-password:** Request a password reset token via email.
- **POST /reset-password/:token:** Reset password using the provided token.

## Contributing 🤝

Contributions are welcome! Fork the repository and submit a pull request with your changes.

## License 📝

This project is licensed under the [MIT License](https://github.com/KavinPrasad2948/Password-Reset.git).
```

This README provides an overview of the project, installation instructions, available API endpoints, contribution guidelines, and licensing information.