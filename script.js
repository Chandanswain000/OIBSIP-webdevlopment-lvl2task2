function ac() {
            document.getElementById("input1").value = "";
        }

        function show(i) {
            document.getElementById("input1").value += i;
        }

        function calc1() {
            try {
                var x = eval(document.getElementById("input1").value);
                document.getElementById("input1").value = x;
            } catch (e) {
                document.getElementById("input1").value = "Error";
            }
        }

        function del() {
            let y = document.getElementById("input1");
            let s = y.value.length;
            y.value = y.value.slice(0, s - 1);
        }