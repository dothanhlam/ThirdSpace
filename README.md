# ThirdSpace
Xccelerate Engineering Test

## Introduction

ThirdSpace is a real-time classroom environment where students can:

Execute and submit code to instructors.
Access files and resources (homework) from instructors.
Chat with each other, and ask questions.
View real-time or pre-recorded lectures.

Instructors have separate views where they can:

View submitted code from every student.
Share their code to the students code editor.
Post files and resources (homework).
Create courses with scheduled classes.

## Run the code
1. Make sure you run ```npm install``` for all dependencies
2. For developing, run ```npm run dev```. This will start the project with nodemon, inspecting the changes inside project folder
3. You can run without docker by ```npm start```

## Run with docker
1. For docker, make sure you build the image first by ```docker build -t thirdspace/code-submitting . ```
2. Run ```docker run -p 3000:3000 -d thirdspace/code-submitting```.

## Sample
Using this ```curl``` and see the response
``` 
curl --location --request POST 'http://localhost:3000/submit' \
--header 'Content-Type: text/plain' \
--data-raw ' function showMeTheCode() {
     console.log('\''yes, grab the console'\'');
     let a = 1000;
     let b = 5;
     let c = a + b;
     console.log('\''c = '\'', c);
     console.log('\''test = '\'', a * b);
     return 1000;
 }
 console.log(showMeTheCode())
'
```