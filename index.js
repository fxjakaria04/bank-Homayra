<script>
        document.getElementById("diposit-btn").addEventListener("click", function(){
            const dipositAmount = document.getElementById("dipo-amount");
            const dipositValue = parseInt(dipositAmount.innerHTML);

            const dipositInputAmount = document.getElementById("diposit-input");
            const dipositInputValue = parseInt(dipositInputAmount.value);
            
            const balanceAmount = document.getElementById("balance");
            const balance = parseInt(balanceAmount.innerHTML);

            dipositAmount.innerHTML = dipositValue + dipositInputValue;
            dipositInputAmount.value = "";
            balanceAmount.innerHTML = balance + dipositInputValue;
            

        });
        document.getElementById("withdraw-btn").addEventListener("click", function(){
            const withdrawAmount = document.getElementById("withdraw-amount");
            const withdraw = parseInt(withdrawAmount.innerHTML);

            const withdrawInput = document.getElementById("withdraw-input");
            const withdrawValue = parseInt(withdrawInput.value);

            const balanceAmount = document.getElementById("balance");
            const balance = parseInt(balanceAmount.innerHTML);

            withdrawAmount.innerHTML = withdraw + withdrawValue;
            balanceAmount.innerHTML = balance - withdrawValue;
            withdrawInput.value = "";
        })
    </script>