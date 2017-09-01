# React Knnz Starter

VERY simple Starter pack for beginners.
Allows you to code with ES6, hot reloading, React, jQuery and all the other stuff to start 'touching' this world :-)

This was made for a friend to help him understand basic node environment and React prototyping

#### But how can I get to code with this?

- Install Git from their official site: https://git-scm.com/downloads
- Install Node from their official site: https://nodejs.org/it/download/
- Open terminal / cmd / prompt
- Navigate to the folder you want this project to be downloaded to, for example:

        cd Desktop
        mkdir WebProjects
        cd WebProjects

and then you are ready to download this, install the components and *start* it.

    git clone https://github.com/revck/ReactKnnzStarter.git
    npm install
    npm run start

After this, if you navigate to http://localhost:8080/ you should see the starting page of the project

#### How can I run my site after I add my code? :D

    npm run start

And you're done

#### Noob tips

- Don't touch index.html .. or any other file outside of 'src' or 'style' folder
- Work with files inside /src/components , don't touch other files such as src/index.js
- CSS is inside folder /style/style.css <- put your custom CSS inside that file
- To use jQuery inside a file you must write at the top of the page (you can see an example in SimpleComponent):

        import $ from 'jquery';