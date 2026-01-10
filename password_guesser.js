let secret = "password123"
let guess = ""
let possibleGuesses = ["admin","12345","qwerty","password123"]
let i = 0
while (guess !== secret){
guess = possibleGuesses[i]
i++
if (guess === secret){
     console.log("Access Granted!");
    break
}
}
