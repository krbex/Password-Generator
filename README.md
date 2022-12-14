# Password-Generator
 
 See the deployed application here - https://krbex.github.io/Password-Generator/

![image](https://user-images.githubusercontent.com/98418456/185284896-f715b192-c84c-4b7e-9b17-29b63dec6375.png)

In this project I used a system that added characters to a combined array that could then be pulled from using math.random to create an random string of characters.

Using boolean logic I was able to add different character types into the combinedCharacters array, the combinedCharacters array was then used to create an index that could be pulled from using the output from Math.random to generate a string of characters until it filled an array that matched the user input for password length.

Using an if statement I was able to flag values <8 and >128, along with no input, into a prompt that requires the user to start over and select a password length between 8 and 128.
![image](https://user-images.githubusercontent.com/98418456/185285043-561acf52-10ae-404f-8f53-b41f80351b50.png)

I used window.prompt for the password length as it required specific user input, but for each of the character types I was able to use an alert which eliminated the need to read a custom user input and simplify the code.

I believe I could improve my code by finding a way to simplify the boolean logic I used to include character types, it feels redundant and will require additional research into manipulating an array.

![image](https://user-images.githubusercontent.com/98418456/185284955-9e408864-bce7-4c11-bae8-59a9b2f15e21.png)
