  <p id="back_to_top"></p>
  
# Tech Blog

  ## Table of Contents

  <div style="display: flex;">
  <a href="#description" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Description-37a779?style=for-the-badge" alt="Description" />
  </a>
  <a href="#installation" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Installation-37a779?style=for-the-badge" alt="Installation" />
  </a>
  <a href="#usage" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Usage-37a779?style=for-the-badge" alt="Usage" />
  </a>
  <a href="#contributing" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Contributing-37a779?style=for-the-badge" alt="Contributing" />
  </a>
  <a href="#tests" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Tests-37a779?style=for-the-badge" alt="Tests" />
  </a>
  <a href="#license" style="text-decoration: none; margin: 5px; height: 20px;">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" alt="License" style="height:28px" />
  </a>
  <a href="#contact" style="text-decoration: none; margin: 5px;">
    <img src="https://img.shields.io/badge/Contact-37a779?style=for-the-badge" alt="Contact" />
  </a>
</div>

## Description
 CMS-style tech blog site that allows users to sign-in, post blogs, see blogs from other users, and comment on blog posts.  This application was created as a part of the UC-Irvine coding bootcamp.   

### Acceptance Criteria and User Story

The following user story and acceptance criteria were provided:

#### User Story

<hr>

AS A developer who writes about tech   
I WANT a CMS-style blog site  
SO THAT I can publish articles, blog posts, and my thoughts and opinions  

#### Acceptance Criteria

<hr>

GIVEN a CMS-style blog site  
WHEN I visit the site for the first time  
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in  
WHEN I click on the homepage option  
THEN I am taken to the homepage  
WHEN I click on any other links in the navigation  
THEN I am prompted to either sign up or sign in  
WHEN I choose to sign up  
THEN I am prompted to create a username and password  
WHEN I click on the sign-up button  
THEN my user credentials are saved and I am logged into the site  
WHEN I revisit the site at a later time and choose to sign in  
THEN I am prompted to enter my username and password  
WHEN I am signed in to the site  
THEN I see navigation links for the homepage, the dashboard, and the option to log out  
WHEN I click on the homepage option in the navigation  
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created  
WHEN I click on an existing blog post  
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment  
WHEN I enter a comment and click on the submit button while signed in  
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created  
WHEN I click on the dashboard option in the navigation  
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post  
WHEN I click on the button to add a new blog post  
THEN I am prompted to enter both a title and contents for my blog post  
WHEN I click on the button to create a new blog post  
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post  
WHEN I click on one of my existing posts in the dashboard  
THEN I am able to delete or update my post and taken back to an updated dashboard  
WHEN I click on the logout option in the navigation  
THEN I am signed out of the site  
WHEN I am idle on the site for more than a set time  
THEN I am able to view posts and comments but I am prompted to log in again before I can add, update, or delete posts  

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Installation

<ul>
<li>
Download the files from this <a href="https://github.com/ultimated1228/ecommBackEnd">github repo</a>.
</li><li>
Create a .env file with the following information:
<ul><li>
DB_NAME='ecommerce_db'
</li><li>
DB_USER='' (your mysql user.  Typically this is root.)
</li><li>
DB_PW='' (your password IF you have one on your mysql)
</li></ul>
<li>
If you are on a PC (instead of a mac), you will need to go into the config folder and open connections.js. Change "Host: '127.0.0.1'" to "Host: 'localhost'" 
</li><li>
Open up the db folder in a command line terminal. 
</li><li>
Run "mysql -uroot" add -p if you your mysql is password protected. 
</li><li>
Use the command "SOURCE schema.sql" to create the employee_dir database. 
</li><li>
Exit mysql. 
</li><li>
Open the main folder in a command line terminal. 
</li><li>
Run "npm i" to install the dependencies from the package.json file. 
</li><li>
Run "node seeds/index.js" to seed starter data.
</li><li>
Now run "node server".   
</li><li>
In a HTTP/API client such as Insomnia or Postman to run the api routes from the server, these include:
<ul>
<li>
Get request to view all Categories: http://localhost:3001/api/categories
</li><li>
Get request to view a Category by specific ID: http://localhost:3001/api/categories/1 (where the integer reprsents the category_id)
</li><li>
Post request to create a new category: http://localhost:3001/api/categories
<ul><li>
with a json body such as (NOTE: it is not necessary to pass the id as it is set to auto increment, but you can pass if here if you would like):  <br>
{  <br>
	"id": "", <br>  
	"category_name": "Shorts",<br>  
	"product": []  <br>
}   
</li></ul><li>
Put request to update a category: http://localhost:3001/api/categories/1 (where the final integer reprsents the category_id you want to change)
<ul><li>
with a json body reflecting the changes you would like to make to that category:  <br>
{  <br>
	"id": "5", <br>  
	"category_name": "Pants",<br>  
	"product": [1, 7, 8]  <br>
}   
</li></ul><li>
Delete request to delete a category: http://localhost:3001/api/categories/1 (where the final integer reprsents the category_id you want to delete)
</li></ul>
</li><li>
Follow similar structures with the appropriate JSON bodies to CRUD the other models.  
</li>
</ul><br>
<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Usage
Here are examples of the app in use:
<hr>

### Gif showing the various routes in action:

<img src=""><br>NEED TO UPDATE

<hr>

### Video Walkthrough

[Please click here to see a full video walk through with audio]()NEED TO UPDATE
<br><br>

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Contributing
Everyone is welcome to send contributions up for review through github!  All contributions will certainly be reviewed and committed if found valuable and error free!

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Tests
No tests developed for this app.

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## License
MIT License

Copyright (c) 2023 ultimated1228

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.



Fore more details on the [MIT License](https://opensource.org/licenses/MIT) please click the link, or check out the license file in the repo.

<p align="right">(<a href="#back_to_top">back to top</a>)</p>

## Contact
You can get in touch with the creator through:

[My Github](https://github.com/ultimated1228)

[Email the creator](mailto:stevenlucasmeyer@gmail.com)


<p align="right">(<a href="#back_to_top">back to top</a>)</p>