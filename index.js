do {
    let a = +prompt("Input number of task,please (from 1 to 7).Results are given is the very very end :) ", 1);
    switch (a) {
        case 1: {
            taskNum(1);
            taskDescription("Якщо змінна a дорівнює нулю, то виведіть 'Вірно', інакше виведіть 'Невірно'.Перевірте роботу скрипта при a, що дорівнює 1, 0, -3");
            {
                do {
                    let a = +prompt('Task #1.Input value for a');
                    userInput(a);
                    if (a === 0) write(userInput(a))
                    else write("Невірно");
                } while (confirm("Wanna input another value for a?"));
            }
        }
            break;
        case 2: {
            taskNum(2);
            taskDescription("В змінної min лежить число від 0 до 59. Визначте в яку чверть години потрапляє це число (в першу, другу, третю або четверту).")
            {
                do {
                    let min = parseInt(prompt('Task #2.Input value for "min" in range 0-59 (value will be rounded if needed) '));
                    if (min < 0 || min > 59) {
                        inputError();
                        break;
                    } else {
                        userInput(min);
                        let b = parseFloat(min / 15);
                        if (parseInt(b) < b) {
                            b++;
                            b = parseInt(b);
                        }
                        write("The number is in " + b + " quarter")
                    }

                } while (confirm("Wanna input another value ? "));
            }
        }
            break;
        case 3: {
            taskNum(3);
            taskDescription("3.Якщо змінна a дорівнює або менше 1, а змінна b більше або дорівнює 3,то виведіть суму цих змінних,інакше виведіть їх різницю (результат віднімання).Перевірте роботу скрипта при a і b, що дорівнює 1 і 3, 0 і 6, 3 і 5.");
            {
                {
                    do {
                        let a = +prompt('Task #3.Input value for a');
                        let b = +prompt('Task #3.Input value for b');
                        userInput(a);
                        userInput(b);
                        let c;
                        if (a <= 1 && b >= 3) {
                            c = a + b;
                        } else c = a - b;
                        write(c);
                    }
                    while (confirm("Wanna input another value?")) ;
                }
            }

        }
            break;
        case 4: {
            taskNum(4);
            taskDescription("4. В змінної month лежить якесь число з інтервалу від 1 до 12.\n" +
                "Визначте в яку пору року потрапляє цей місяць (зима, літо, весна, осінь).");
            {
                do {
                    let num = parseInt(prompt('Task #4.Input value in range 0-12 (value will be rounded if needed) '));
                    if (num < 1 || num > 12) {
                        inputError();
                    } else {
                        userInput(num);
                        let c;
                        if (num === 12 || num < 3) c = "Winter"
                        else if (num > 2 && num < 6) c = "Spring"
                        else if (num > 5 && num < 9) c = "Summer"
                        else c = "Autumn"


                        write("The number is in  " + c + " season");
                    }

                } while (confirm("Wanna input another value ? "));
            }
        }
            break;
        case 5: {
            taskNum(5);
            taskDescription(" switch\n" +
                "    Переменная num может принимать 4 значения: 1, 2, 3 или 4.\n" +
                "        Если она имеет значение '1', то в переменную result запишем 'зима',\n" +
                "            если имеет значение '2' – 'весна' и так далее.");
            {
                do {
                    let num = parseInt(prompt('Task #5.Input value in range 1-4 (value will be rounded if needed) '));
                    let result;
                    if (num < 1 || num > 4) {
                        inputError();
                    } else {
                        switch (num) {
                            case 1:
                                result = "Winter";
                                break;
                            case 2:
                                result = "Spring";
                                break;
                            case 3:
                                result = "Summer";
                            case 4:
                                result = "Autumn";
                        }
                        userInput(num);
                        write("The number is in  " + result + " season");
                    }
                }
                while (confirm("Wanna input another value?")) ;
            }
        }
            break;
        case 6: {
            taskNum(6);
            taskDescription(" Переменная num может принимать 12 значений: 1, 2 ..... 12.\n" +
                "        Если она имеет значение '1', то в переменную result запишем 'январь',\n" +
                "            если имеет значение '2' – 'февраль' и так далее.");
            {
                do {
                    let num = parseInt(prompt('Task #4.Input value in range 0-12 (value will be rounded if needed) '));
                    if (num < 1 || num > 12) {
                        inputError();
                    } else {
                        userInput(num);
                        let result;
                        let arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        result = arr[num - 1];
                        write("The number stands for  " + result + " month");
                    }

                } while (confirm("Wanna input another value ? "));
            }
        }
            break;
        case 7: {
            taskNum(7);
            taskDescription("Створити об'єкти, які характеризують членів вашої родини\n" +
                "\n" +
                "        зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:\n" +
                "            1. перебрати його циклом while\n" +
                "            2. перебрати його циклом for\n" +
                "            3. перебрати циклом while та вивести  числа тільки з непарним індексом\n" +
                "        4. перебрати циклом for та вивести  числа тільки з непарним індексом\n" +
                "        5. перебрати циклом while та вивести  числа тільки парні  значення\n" +
                "        6. перебрати циклом for та вивести  числа тільки парні  значення\n" +
                "        7. замінити кожне число кратне 3 на слово \"okten\"\n" +
                "        8. вивести масив в зворотньому порядку.\n" +
                "        9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)");
            {
                let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
                userInput(arr);
                hr();
                openParagraph();
                write("Using for loop output array")
                for (let i = 0; i < arr.length; i++) {
                    document.write(arr[i] + " ");
                }
                closeParagraph();
                hr();
                write("using while loop output array")
                openParagraph();
                let k = 0;
                while (k < arr.length) {
                    document.write(arr[k] + ", ");
                    k++;
                }
                closeParagraph();
                hr();
                {
                    write("using while loop output odd (1,3,5,7..etc) elements of Array")
                    openParagraph();
                    let k = 0;
                    while (k < arr.length) {
                        document.write(arr[k] + ", ");
                        k += 2;
                    }
                    closeParagraph();
                    hr();
                }
                {
                    write("using while loop output even(2,4,6,8..etc) elements of Array")
                    openParagraph();
                    for (let i = 1; i < arr.length; i += 2) {
                        document.write(arr[i] + ", ");
                    }
                    closeParagraph();
                    hr();
                }
                {
                    write("Change every 3-rd element in Array for 'Okten'");
                    openParagraph();
                    for (let i = 2; i < arr.length; i += 3) {
                        arr[i] = "Okten";
                    }
                    hr();
                    write("New Array with changed elements : ");
                    for (let i = 0; i < arr.length; i++) {
                        document.write(arr[i] + " ");
                    }
                }
                closeParagraph();
                hr();
                {
                    {
                        write("Output Array reversed using loop");
                        openParagraph();
                        for (let i = arr.length - 1; i > 0; i--) {
                            document.write(arr[i] + " ");
                        }
                        hr();
                    }
                    closeParagraph();
                    hr();
                }

            }
        }
            break;
    }
}while (confirm("Want to check another task,sir?)"));

function hr() {
    document.write("<hr style='1px dashed grey'>");

}
function openParagraph() {
    document.write("<p>");
}
function closeParagraph() {
    document.write("</p>");
}

function taskNum(number) {
    document.write("<h3>Task"+number+ ".</h3>");
}
function taskDescription(text) {
    document.write("<h4>Завдання : "+text+ "</h4>");
}
function userInput(text) {
    document.write("<p>You inputed value(s) "+ text + " </p>");
}
function write(text) {
    document.write("<p>"+text+"</p>");
}

function inputError() {
    document.write("<p>You inputed wrong value for this task,try again later.</p>");
}