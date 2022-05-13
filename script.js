const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data =  await res.json()

    console.log(data)

   document.getElementById("advice").innerHTML = data.slip.advice
   document.getElementById("title").innerHTML = `ADVICE #${data.slip.id}`
}

fetchAdvice()

document.getElementById("dice_button").addEventListener("click", function(){
    fetchAdvice()
})