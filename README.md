# YONMAZ485_FT02410_GroupA_Yonela-Mazele_DJS11
https://github.com/CodeSpace-Academy/StudentNo_Classcode_Group_Name-Surname_DJS07.git

Welcome to the ultimate podcasting adventure! Dive into the world of the Podcast App, where your creativity meets cutting-edge technology to craft the perfect portfolio piece. Imagine a space where your favorite shows are just a click away, with a sleek interface powered by React. Whether you're a comedy connoisseur or a history buff, this project has it all. Ready to tune in and turn up the volume on your development skills? Let's get this podcast party started!  You will need to dive into the repo for all the details of the project. Below is a mere summary of what is required. If you get stuck, please reach out to your coaches, they are ready to assist. 

[DJS11] Starter Instructions for the Final Portfolio Piece Submission (GitHub Repo).

 

Submission and Live Presentation

You will be required to submit. Once you have submitted your project you will be required to present your project and the functionality you have built out according to the user stories. Please note all marking breakdowns in your Student Dashboard. 

 

Here's a summary of the key information for the upcoming DJS Live Panel Reviews:

Final DJS11 Live Portfolio Panel Review Sessions:

Assessors: Students will be assessed by two coaches.
Presentation Slots: Specific dates and times are assigned for each student’s presentation. Please prepare accordingly as these slots are fixed.
Preparation Tips:
Ensure a stable internet connection.
Keep your cameras on.
Join the session on time.
Sessions will be recorded for moderation purposes.
Email Invitations: Watch for an email invitation to your specific presentation session.
Make sure to be well-prepared to present your final project. 

 

Technology
 

You will be required to complete this project using React and a build-process to manage all the complexity involved.

You are welcome to use any other technology that you are comfortable with as well as React. It is recommended that you use TypeScript as well, however you are welcome to avoid TypeScript entirely if you do not feel comfortable with it’s usage just yet.

 

Data
 

Data consists of three basic semantic units

SHOW: A specific podcast that contains a single or several SEASON
SEASON: A collection of EPISODE released across a specific timespan
EPISODE: Corresponds to a specific MP3 file that user can listen
However, the following information is also exposed via the API

PREVIEW: A summarised version of a SHOW that only contains basic information. Usually exposed when an array of different SHOW information is requested.
GENRE: Information related to a (one of many) genres that can be assigned to a SHOW
 

Relationships
The chart included in the start repo indicates the relations between units of data. It uses Entity Relationship mapping. In order to understand the meaning of symbols in the chart please read the overview on the Mermaid.js documentation.

Note that the text between the units indicates what properties map to one another. It is separated by means of three underscores (___). The value before the underscores is the mapping from the parent object, whereas the values after the underscore is the mapping from the child object.

Note that is some cases there is no way to infer the parent from the child itself , in those cases just the parent map is noted, with no value after the underscores.

 
Endpoints
Base URL: https://podcast-api.netlify.app
Endpoints:
/: Array of PREVIEW.
/genre/<ID>: GENRE object.
/id/<ID>: SHOW object with SEASON and EPISODE.
 
Genre Titles
Mapping of Genre IDs to Titles:
1: Personal Growth
2: Investigative Journalism
3: History
4: Comedy
5: Entertainment
6: Business
7: Fiction
8: News
9: Kids and Family
 
User Stories
Core Project Requirements:

Setup and Deployment:
Deploy to Netlify, custom favicon, and metatag setup.
UI/UX:
Show names, sorting, listening functionality, season views, preview images, genre titles, and more.
Data Fetching and State Management:
Load data via fetch calls, loading states, mark episodes as favorites, and organize favorites.
User Interaction:
Favorite management, sorting and filtering, persistent data, audio player visibility and functionality.
Overall Assessment:
Good appearance, navigation, clear commit history, responsive design, comprehensive README, bug-free functionality, and clean code.
Stretch Goals:

Additional features for enhanced user experience.
Sliding carousel of shows, filtering by text input, fuzzy matching, and timestamp location.
This project aims to create a comprehensive podcast app using React, focusing on robust data management, user interaction, and a polished user experience.