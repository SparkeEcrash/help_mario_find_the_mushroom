# Guessing Game

## Code Setup Details

##### 1. Open PHPStorm

##### 2. Fork This Repo - IMPORTANT Do this first

>- Click on the <kbd> **Fork** </kbd> button in the top right of the page

##### 3. Clone This Repo
>1. **After** Forking
1. In your terminal verify you are in the proper directory
  1. You should be in your `lfz` directory
  1. To check your directory type `pwd` then press <kbd>Enter </kbd>
    1. You should see something along the lines of:
    1. `~/Desktop/lfz`
    1. If you are not in the proper directory navigate to the `lfz` folder, if you're not sure how, contact an instructor
1. Enter the following command into the terminal to clone the `Guess` repo
  1. `git clone https://github.com/[Your User Name]/guess.git`

##### 4. Navigate to guess

> Insert this command in the terminal tab

> `cd guess` & press enter

>- this changes the directory to the `guess` folder
- If you get an error with the above command its probably because you are already within the correct directory
- *Reminder* - You can use `pwd` to check your current directory

##### 5. Create a feature grouping (*Create feature branch*)

> Insert & execute these command in the terminal tab individually

>`git checkout master` & press <kbd>Enter </kbd>
>- The command above switches to the default branch

>`git checkout -b v0.1` & press <kbd>Enter </kbd>
>- Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
- Any modifications to these files after <b>branching</b> can be undone
- "v0.1" is the branch name.

## Coding Instructions

### Layout Scope
- Create a `index.html` file
  - Make a `html` skeleton
  - Make sure to give your page an appropriate title
- Add a set of `script` tags
  - This will hold your javascript code
- Add an input field
  - This input field will take the user's guess
  - Give it an id of `guess_input`
- Add a div
  - This `div` will hold any feedback from the game to the user
  - Give it an id of `response_div`
- Add a button
  - This button will submit the user's guess to the game

### Functional Scope
- In your script tag, make a variable, called `the_number`, set its value to `null`
- Add a on load handler to the body
  - It should call a function named `pick_number` and assign its return value to the variable `the_number`
- In your script tag, make a function called `pick_number`
    - It takes no parameters
    - It returns a number
    - Inside:
      - It will creates a variable, called `random_number`
      - It will generate a random number between 1 and 10, and then assigns it to the `random_number` variable
      - return `random_number`
- Add a click handler to the button using jQuery.  
  - This click handler will call a function named `make_guess`
- Add a function to your script tags
  - Name it `make_guess`
  - It takes no parameters
  - It returns no values
  - Inside:
    - It will grab the value of the input from above and assign it to a variable named `the_guess`
    - It then compares the variable `the_guess` to the variable `the_number`
      - If `the_guess` is higher than `the_number`, it changes the contents of `#response_div` to **"Too High!"**
      - If `the_guess` is lower than `the_number`, it changes the contents of `#response_div` to **"Too Low!"**
      - If `the_guess` is the same as `the_number`, it changes the contents of `#response_div` to **"You guessed it!"**

## After Coding Details

##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "v0.1 - [Your Name]"`
> - [Your Name] should be replaced with your First & Last name

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin v0.1`

##### 4. See if your feature fits with what everyone else was working on (Pull Request)

#### Step 4.1 Open your guess Repo in the browser
> - The link Should follow this format `https://github.com/[your user name]/guess`

#### Step 4.2 Click Pull request tab to open the pull request list

<!-- > <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" width="350"/></a> -->

#### Step 4.3 Click "New Pull request" button

<!-- > <a href="https://github.com/Learning-Fuze/prototypes/blo b/assets/assets/example/2.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/2.jpg?raw=true" width="800" /></a> -->

#### Step 4.4 Comparing Changes
> During this step there are a hand full of highlighted things that need to be taken into consideration.

<!-- > <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" width="800" /></a> -->

##### NOTE: The image is for example puposes only, refer to the below text for what each value should actually be

>  1. `base fork: Learning-Fuze/guess`
>  1. `base: C#_userName`
>    1. Here you will select the option that matches your username
>    1. If you can not locate an option that has your username, contact an instructor
>  1. `head fork: [your_user_name]/guess`
>    1. Here you will select the option that matches your username / guess
>    1. If you can not locate an option that has your username / guess, contact an instructor
>  1. `compare: v0.1`
>    1. Here you will locate the branch name (or feature name) you created at the beginning of this version of the project
>  1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>    1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>    1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by 
instructors at start)
>  1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button <!-- (#5 in the image above) -->

> ---

#### Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get <b>v0.1 - [your first & last 
name]</b> already pre-populated in the Title field
>   1. If there is a different title pre-populated, change the title to match the correct format:
>      1. <b>v0.1 - [your first and last name]</b>
> 1. <b>Don't assign a user.</b> (An Instructor will select who this gets assigned too)
>   1. Further into the cohort we will have students learn to review pull requests
> 1. Click on "Create pull Request"

<!-- > <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" width="800" /></a> -->
