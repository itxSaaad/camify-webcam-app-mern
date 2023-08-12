# Camify - Your Creative Webcam Experience

> Camify WebCam is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It is a dynamic web application that brings your webcam to life, allowing you to capture moments, apply artistic filters, and seamlessly share your media with friends and family. Elevate your webcam experience to a new level of fun and expression.

<br />
<div align="center">
  <p align="center">
    <br />
    <a href="https://github.com/itxSaaad/camify-webcam-app-mern">
    <strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://camify-webcam-app-mern.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/itxSaaad/camify-webcam-app-mern/issues">Report Bug</a>
    ·
    <a href="https://github.com/itxSaaad/camify-webcam-app-mern/issues">Request Feature</a>
  </p>
</div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

## Live Preview Project

[Live Preview](https://camify-webcam-app-mern.vercel.app/)

## Features

- **Media Capture**: Use your webcam to take stunning photos and record exciting videos directly from your browser.
- **Creative Filters**: Apply a variety of filters and effects to your media to add that perfect touch of artistry.
- **Image Cropping and Resizing**: Customize your media with easy-to-use cropping and resizing tools.
- **User Authentication**: Sign up, log in, and enjoy a secure and personalized experience.
- **Cloud Storage**: Your media files are securely stored in the cloud, accessible anytime, anywhere.
- **Easy Sharing**: Share your creations effortlessly with friends.

## Built With

- **Frontend**: Built with [React.js](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), and other modern libraries, ensuring a smooth and responsive user experience.
- **Backend**: Built with [Node.js](https://nodejs.org/en/) and [Express.js](https://expressjs.com/), providing a robust and scalable backend architecture, ensuring fast and secure server-side operations.
- **Database**: Built with [MongoDB](https://www.mongodb.com/), ensuring a flexible and scalable data storage solution.Store and manage user data and media files using MongoDB.
- **Authentication**: Built with [JSON Web Tokens](https://jwt.io/) and [bcrypt](https://www.npmjs.com/package/bcrypt), ensuring a secure and personalized user experience.
- **Media Handling**: Leverage modern libraries to capture webcam streams, apply filters, and manage media files.
- **Security**: Implement best practices to ensure the privacy and security of your data.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [NPM](https://www.npmjs.com/) - Node Package Manager

### Installation

1. Clone the repo

```sh
git clone https://github.com/itxSaaad/camify-webcam-app-mern.git
```

2. Install NPM packages

```sh
npm install
```

3. Create a `.env` file in the root directory and add the following

```sh
NODE_ENV = development
PORT = 5000
MONGO_URI = <your_mongodb_uri>
JWT_SECRET = <your_jwt_secret>
SALT = <your_salt>

```

4. Create a `.env` file in the client directory and add the following

```sh
VITE_CLIENT_URL = http://localhost:5173
VITE_SERVER_URL = http://localhost:5000/api
```

5. Run the app

```sh
npm run dev
```

## Contributing

Contributions are what make the open-source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the repo
2. Clone the project
3. Create your feature branch (`git checkout -b feature/AmazingFeature`)
4. Commit your changes (`git commit -m "Add some AmazingFeature"`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a pull request

## Contact

- Twitter: [@itxSaaad](https://twitter.com/itxSaaad)
- LinkedIn: [@itxSaaad](https://www.linkedin.com/in/itxsaaad/)
- Bento: [@itxSaaad](https://bento.me/itxsaaad)
- Email: [saadstudent.cs@gmail.com](mailto:saadstudent.cs@gmail.com)

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Support

Give ⭐️ if you like this project!

<a href="https://www.buymeacoffee.com/itxSaaad"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" /></a>

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/itxSaaad/camify-webcam-app-mern.svg?style=for-the-badge
[contributors-url]: https://github.com/itxSaaad/camify-webcam-app-mern/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/itxSaaad/camify-webcam-app-mern.svg?style=for-the-badge
[forks-url]: https://github.com/itxSaaad/camify-webcam-app-mern/network/members
[stars-shield]: https://img.shields.io/github/stars/itxSaaad/camify-webcam-app-mern.svg?style=for-the-badge
[stars-url]: https://github.com/itxSaaad/camify-webcam-app-mern/stargazers
[issues-shield]: https://img.shields.io/github/issues/itxSaaad/camify-webcam-app-mern.svg?style=for-the-badge
[issues-url]: https://github.com/itxSaaad/camify-webcam-app-mern/issues
[license-shield]: https://img.shields.io/github/license/itxSaaad/camify-webcam-app-mern.svg?style=for-the-badge
[license-url]: https://github.com/itxSaaad/camify-webcam-app-mern/blob/main/LICENSE.md
