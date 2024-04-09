Documentation
ER Diagram
The ER (Entity-Relationship) diagram provides a visual representation of the relationships between different entities within the application's data model. Below is a simplified ER diagram based on the provided code:

+------------------+ +----------------------+ +-------------------+ +------------------------+
| User | | Post | | Comment | | Contact |
+------------------+ +----------------------+ +-------------------+ +------------------------+
| id: int (PK) | | id: int (PK) | | id: int (PK) | | id: int (PK) |
| firstName: string| | title: string | | content: string | | firstName: string |
| lastName: string | | content: string | | post_id: int (FK)| | lastName: string |
| | | contact_id: int (FK) | | contact_id: int (FK)| | |
+------------------+ +----------------------+ +-------------------+ +------------------------+

User: Represents users of the application.
Post: Represents posts made by users.
Comment: Represents comments made on posts.
Contact: Represents contact information for users.
Interactions / User Stories

1. User Registration and Posting
   User Story: As a user, I want to register on the platform and create posts.
   Steps:
   Navigate to the registration page.
   Fill in the registration form with required details (first name, last name).
   Submit the form to register.
   After registration, log in to the platform.
   Access the "Create Post" section.
   Fill in the post title and content.
   Click the "Post" button to publish the post.
2. Viewing Posts and Comments
   User Story: As a user, I want to view posts and comments made by other users.
   Steps:
   Log in to the platform.
   Browse through the list of posts displayed on the home page.
   Click on a post title to view the full post.
   Scroll down to view comments associated with the post.
   Optionally, add a comment to the post by filling in the comment form and clicking the "Comment" button.
3. Viewing Profile Information
   User Story: As a user, I want to view my profile information and update it if necessary.
   Steps:
   Log in to the platform.
   Navigate to the profile section.
   View personal information such as first name and last name.
   Optionally, update the information by clicking on the edit button next to each field.
   Save the changes after making updates.
   These interactions/user stories provide a brief overview of how users would interact with the application, including registration, posting, viewing content, and managing profile information. Detailed documentation can expand on these interactions and provide additional insights into the application's functionality and features.

Installation Guide
To set up the React Cohort Dashboard application locally, follow these steps:

Prerequisites
Node.js installed on your system (version 14 or later)
npm (Node Package Manager) or yarn installed on your system
Installation Steps
Clone the Repository:
Clone the repository to your local machine using the following command:

bash
Copy code
git clone <repository-url>
Navigate to the Project Directory:
Change your current directory to the cloned project directory:

bash
Copy code
cd react-cohort-dashboard-challenge
Install Dependencies:
Install the project dependencies using npm or yarn:

bash
Copy code
npm install

# or

yarn install
Start the Development Server:
Start the development server to run the application locally:

bash
Copy code
npm run dev

# or

yarn dev
Open the Application:
Once the development server starts successfully, you can open the application in your web browser. By default, the application should be accessible at http://localhost:3000.

Additional Notes
Make sure that no other process is running on port 3000, as the development server uses this port by default. If port 3000 is already in use, you can specify a different port by modifying the vite.config.js file.
If you encounter any errors during the installation process, make sure to resolve them by checking the error messages and troubleshooting accordingly.
Following these steps should allow you to install and run the React Cohort Dashboard application locally on your machine for development or testing purposes. If you have any further questions or encounter any issues, feel free to reach out for assistance.
