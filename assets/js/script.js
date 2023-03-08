// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    let heads = 0
     let headsPercentage  = 0
      let tails = 0
         let tailsPercentage = 0
         let totalflip = 0


         document.querySelector('#fiip').addEventListener('click', function {
            if (Math.random() > .5){
                heads++
                total++
                headsPercentage = (Math.round(heads/total * 100))
                if (tails > 0) {
                    tailsPercent = (Math.round(tails/total * 100))

                } 
                document.querySelector(`#penny-image`).src = 'assests/images/penny-heads.jpg'
                document.querySelector(`#message`).innerHTML = 'you flipped heads!'
                document.querySelector(`#heads`).innerHTML = heads
                document.querySelector(`#heads-percent`).innerHTML = `${headsPercent}%`
                document.querySelector(`#tails-percent`).innerHTML = `${tailsPercent}%`
            } else {
                tails++
                total++
                tailsPercent = (Math.round(tails/total * 100))
                if(head > 0){
                    headsPercent = (Math.round(head/total * 100))
                }
                document.querySelector(`#tails-image`).src = 'assets/images/penny-tails.jpg'
                document.querySelector(`#message`).innerHTML = 'you flipped tails'
                ocument.querySelector(`#heads`).innerHTML = heads
                document.querySelector(`#heads-percent`).innerHTML = `${headsPercent}%`
                document.querySelector(`#tails-percent`).innerHTML = `${tailsPercent}%`
 }

         }

         


    

    



    

})