# Project Exam 1

![image](https://github.com/Noroff-FEU-Assignments/project-exam-1-ebejmo/blob/main/tp-img.jpg)

Screenshot of the blog on different screen sizes.

## Description

The goal with this project was to put into practice the skills learned over my first two years of studies. 
The task was creating a blog site. Design and topics covered on the blog was chosen by myself, and it should include the following pages:
-	Home page
-	About page
-	List of blog posts
-	Blog post specific pages
-	Contact page

#### Home Page
The home page has a ‘Latest Posts’ section which uses a carousel for users to click to view more posts. By default, on bigger screen sizes, the user can see three posts, then they can click an arrow on the right to view the next three posts, and click it again to view the next three posts. The user can also click back to view results they had previously seen. On mobile/smaller screen sizes the user sees one post. Clicking the right arrow shows the next post until the end has been reached of the carousel.

#### Blog Page

The blog posts page shows the first 10 blogs, the user can click to show more button which then shows more blog posts.

#### Blog Specific Page

The content of the blog specific page is dynamically built using a query string parameter based on whatever link the user has clicked. The title of the blog specific page change based on the blog that has been clicked.

If images on the blog post page are clicked, a modal appears giving the user a bigger view of that image. Clicking outside the image hides the modal.

#### Contact page

There are 4 textboxes on this page.
-	Name (Should be more than 5 characters long)
-	Email address (Must be a valid email address)
-	Subject (Should be more than 15 characters long)
-	Message content (Should be more than 25 characters long)

JavaScript is used for validation, error messages is visible for the user if the values in the textboxes do not meet the requirements and to help them solve the failed requirements as smooth as possible.

## Built With

The content for this website is stored on a WordPress installation used as a Headless CMS. WordPress is used to provide an API and add content for the blog. The webiste is built with: 
-	HTML5
-	CSS
-	JavaScript

## Installing

Clone the repo, open it with Visual Studio Code and run it with Live Server.

Link to the Site: (https://e-bjm.no/threeput/wp-json/)  

Link to the API: (https://e-bjm.no/threeput/wp-json/)



## Contact


[<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg' alt='github' height='40'>](https://github.com/ebejmo)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg' alt='linkedin' height='40'>](https://www.linkedin.com/in/emil-bejmo-032854148/)  [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg' alt='twitter' height='40'>](https://twitter.com/emilbejmo)  


