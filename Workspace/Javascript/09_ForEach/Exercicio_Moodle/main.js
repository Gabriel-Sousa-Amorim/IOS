        function exercicio1() {
            let array = [1, 2, 3, 4, 5, 6, 7, 8];
            console.log(`${true} == par, ${false} == impar`);
            array.forEach(i => i % 2 == 0 ? console.log(`${i} == par`) : console.log(`${i} == impar`));
        };
        exercicio1()

        function exercicio2() {
            let array = [20, 40, 60, 80, 21, 22, 19, 18, 1, 2, 4, 5, 79, 81];
            let new_array = array.filter(i => i >= 20 && i <= 80);
            console.log(new_array);
        };
        exercicio2()
