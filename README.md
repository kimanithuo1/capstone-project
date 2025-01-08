Afriflix Movie Database
Afriflix is a web application that allows users to explore a vast collection of movies with possible addition of African movies and TV shows. The platform provides a user-friendly interface to discover, watch trailers, and access full movie details. Below is an overview of the features and how they function.

Features
1. Home Page
Welcome Message: Displays a welcoming message and a brief description of the platform.
Explore Button: Redirects users to the Movies Page to start exploring the movie collection.
Social Media Links: Provides links to Afriflix's social media profiles (Facebook, Instagram, Twitter).

3. Movies Page
Movie Collection: Displays a grid of popular movies fetched from The Movie Database (TMDb) API.
Movie Details: Each movie card includes:
Poster Image: High-quality movie poster.
Title: The title of the movie.
Overview: A brief description of the movie (truncated if too long).
Rating: The average rating of the movie out of 10.
Watch Trailer Button: Allows users to watch the movie trailer (if available).
Watch Full Movie Button: Redirects users to the movie's TMDb page for more details.
Pagination: Users can navigate through different pages of the movie collection.
Trailer Modal: When a trailer is available, clicking the "Watch Trailer" button opens a modal with an embedded YouTube trailer.
Back to Top Button: A button that scrolls the page back to the top for easy navigation.

5. About Page
About Afriflix: Provides information about the platform, including its mission and features.
Join Us: Encourages users to join the Afriflix community and connect with other film enthusiasts.
Contact Information: Displays contact details (email, phone) and encourages users to reach out for inquiries or suggestions.

7. Contact Page
Contact Form: A simple form where users can submit their name, email, and message.
Submit Button: Sends the form data (currently triggers an alert for demonstration purposes).
Contact Information: Displays the support email for direct contact.

9. Header
Dynamic Background: Displays a random trending movie backdrop as the header background.
Navigation Links: Provides links to the Home, About, Movies, Contact, and Join Us pages.
Logo: Displays the Afriflix logo in the top-left corner.

11. Footer
Copyright Notice: Displays the copyright information for Afriflix.

How It Works

1. Movie Data Fetching
The Movies Page fetches movie data from the TMDb API using Axios.
For each movie, an additional API call is made to fetch the trailer key (if available).
The movie data is then displayed in a grid format with pagination support.

3. Trailer Embedding
When a user clicks the "Watch Trailer" button, the trailer key is used to embed a YouTube video in a modal.
The modal can be closed by clicking the close button or outside the modal.

5. Pagination
The Movies Page supports pagination, allowing users to navigate through different pages of movie results.
The current page number is displayed, and users can navigate to the previous or next page using the pagination buttons.

7. Dynamic Header
The Header component fetches trending movies from the TMDb API and randomly selects one to display as the background image.
The movie title is displayed prominently in the header.

9. Responsive Design
The application is designed to be responsive, ensuring a seamless experience across different devices (desktop, tablet, mobile).
The layout adjusts dynamically based on the screen size, with elements stacking vertically on smaller screens.

Technologies Used
Frontend: React, Vite, Tailwind CSS
Routing: React Router
API Integration: Axios for fetching data from TMDb API
Styling: Tailwind CSS for utility-first styling
Build Tool: Vite for fast development and production builds

Getting Started

Prerequisites
Node.js and npm installed on your machine.

Installation
Clone the repository:

git clone https://github.com/kimanithuo1/afriflix-movie-database.git

Navigate to the project directory:

cd afriflix-movie-database

Install dependencies:
npm install

Start the development server:
npm run dev

Open your browser and navigate to http://localhost:517 0 to view the application.


Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.

Create a new branch for your feature or bug fix.
Make your changes and commit them.
Push your branch to your forked repository.
Open a pull request to the main repository.


License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Special thanks to The Movie Database (TMDb) for providing the movie data API.
Thanks to the open-source community for their contributions and support.

