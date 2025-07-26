
        document.addEventListener('keydown', (e) => {
            if (e.key == "Enter") {
                   myFunction()
                document.getElementById('input').value = "";
            }
        })
        function myFunction() {
            let data = document.getElementById("input"
            ).value;
            const [year, month] = data.split("-");
            let reuslt;
            if (month % 2 == 0 && month != 2) {
                result = `Your Entered ${year} year and ${month} month So No. of Day in this month and Year is: 30`
                document.getElementById("output").style.background = "brown"
            }
            else if (month % 2 == 0 && month == 2 && year % 4 != 0 && year % 100 != 0 && year % 100 != 0) {
                result = `Your Entered ${year} year which is not leap and ${month} month So No. of Day in this month and Year 28`
                document.getElementById("output").style.background = "black"
            }
            else if (month % 2 == 0 && month == 2 || year % 4 == 0 || year % 100 == 0 || year % 400 == 0) {
                result = `Your Entered ${year} year which is leap and ${month} month So No. of Day in this month and Year 29`
                document.getElementById("output").style.background = "brown"

            }
            else if (month % 2 != 0) {
                result = `Your Entered ${year} year and ${month} month So No. of Day in this month and Year 31`
                document.getElementById("output").style.background = "purple"

            }
            else {
                result = "Write a Valid input"
                document.getElementById("output").style.background = "red"
            }
            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = result;
        }
 