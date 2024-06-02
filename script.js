const questions = [
    {
        question: "Which of the following is true about the AndroidManifest.xml file in an Android application?",
        options: ["It defines the user interface layout of the application.", 
        "It specifies the permissions required by the application.",
        "It contains the source code of the entire application.",
        "It compiles the Java code into an executable file."],
        answer: "It specifies the permissions required by the application."
    },
    {
        question: "What is the purpose of the AsyncTask class in Android development?",
        options: ["To perform background tasks and update the UI thread with the results.",
         "To define the layout of user interface components.", 
         "To handle user interactions with the application.",
          "To manage the navigation between different activities."],
        answer: "To perform background tasks and update the UI thread with the results."
    },
    {
        question: "What is an Intent in Android development?",
        options: ["A class used to define the layout of user interface components.", 
        "An object that provides a messaging mechanism between components such as activities, services, and broadcast receivers.", 
        "A method for handling user interactions with the application.", 
        "A special type of variable used for asynchronous communication between threads."],
        answer: "An object that provides a messaging mechanism between components such as activities, services, and broadcast receivers."
    },
    {
        question: "What is the purpose of the RecyclerView in Android development?",
        options: ["To define the layout of user interface components.", 
        "To handle user interactions with the application.",  
        "To perform background tasks and update the UI thread with the results.", 
        "To display a scrollable list of items efficiently."],
        
        answer: "To display a scrollable list of items efficiently."
    },
    {
        question: "What is the primary function of the Parcelable interface in Android development?",
        options: ["To define the layout of user interface components.",
         "To manage the navigation between different activities.", 
         "To serialize and deserialize objects for passing between different components, such as activities and fragments.", 
         "To handle user interactions with the application."],
        answer: "To serialize and deserialize objects for passing between different components, such as activities and fragments."
    },
    {
        question: "What is the purpose of the SharedPreferences class in Android development?",
        options: ["To manage the navigation between different activities.",
         "To handle user interactions with the application.", 
         "To store and retrieve small amounts of data persistently.", 
         "To define the layout of user interface components."],
        answer: "To store and retrieve small amounts of data persistently."
    },
    {
        question: "Which of the following statements accurately describes the role of Gradle in Android development?",
        options: ["Gradle is an integrated development environment (IDE) for Android development.",
         "Gradle is a programming language used to develop Android applications.", 
         "Gradle is a build system that automates the process of building, testing, and deploying Android apps.", 
         "Gradle is a layout editor used to design user interfaces for Android applications."],
        answer: "Gradle is a build system that automates the process of building, testing, and deploying Android apps."
    },    
    {
        question: "What does the term 'Activity' refer to in the context of Android development?",
        options: ["A background process that runs independently of the main application.",
         "The graphical user interface of an Android application.", 
         "A single, focused thing that the user can do, representing a single screen with a user interface.", 
         "An event triggered by the user interacting with the application."],
        answer: "A single, focused thing that the user can do, representing a single screen with a user interface."
    },
    {
        question: "Which component in Android is responsible for performing long-running operations in the background, independently of the UI?",
        options: ["Activity",
         "BroadcastReceiver", 
         "Service", 
         "ContentProvider"],
        answer: "Service"
    },
    {
        question: "Which file is responsible for defining the overall structure and behavior of an Android application?",
        options: ["Java file",
         "Manifest file", 
         "XML layout file", 
         "Gradle file"],
        answer: "Manifest file"
    },
    {
        question: " What is the purpose of the 'Android Virtual Device (AVD)' in Android development?",
        options: ["It is a physical device used for testing Android applications.",
         "It is a tool for deploying Android applications to Google Play Store",
         "It is an emulator used to simulate the behavior of Android devices for testing purposes.", 
         "It is a debugging tool integrated into the Android Studio IDE."],
        answer: "It is an emulator used to simulate the behavior of Android devices for testing purposes."
    },
    {
        question: " What is the purpose of the 'Context' class in Android development?",
        options: ["To define the layout of user interface components.",
         "To manage the navigation between different activities.",
         "To provide access to application-specific resources and components, such as preferences and databases.", 
         "To handle user interactions with the application."],
        answer: "To provide access to application-specific resources and components, such as preferences and databases."
    },
    {
        question: " What is the significance of the 'R.java' file in Android development?",
        options: ["It contains the source code of the entire application.",
         "It defines the layout of user interface components.",
         "It stores references to all resources (such as layouts, strings, and images) used within the application.", 
         "It compiles the Java code into an executable file."],
        answer: "It stores references to all resources (such as layouts, strings, and images) used within the application."
    },
    {
        question: "In Java programming, what is the purpose of the static keyword when used with variables?",
        options: ["It indicates that the variable can only be accessed within the same class.",
         " It allows the variable to be modified by multiple threads simultaneously.",
         " It ensures that the variable's value cannot be changed after initialization.",
         "It signifies that the variable belongs to the class itself, rather than instances of the class."], 
        answer: "It signifies that the variable belongs to the class itself, rather than instances of the class."
    },
    {
        question: "What does the term 'polymorphism' refer to in Java programming?",
        options: ["The ability of a method to have multiple implementations.",
         " The process of converting objects into a stream of bytes for storage or transmission.",
         " The practice of hiding the internal implementation details of an object and only exposing the necessary functionality.",
         "The ability of objects of different classes to be treated as objects of a common superclass."], 
        answer: "The ability of objects of different classes to be treated as objects of a common superclass."
    },
    {
        question: "Which keyword is used to prevent a method from being overridden in a subclass in Java?",
        options: ["final",
         "abstract",
         "static",
         "extends"], 
        answer: "final"
    },
    {
        question: "Which method is used to start an activity for which you would like a result when it finishes?",
        options: [
            "startActivity()",
            "startService()",
            "startActivityForResult()",
            "sendBroadcast()"
        ],
        answer: "startActivityForResult()"
    },    
    {
        question: "Which method in the Activity class is called when an activity is first created?",
        options: [
        "onCreate()",
        "onStart()",
        "onResume()",
        "onPause()"],
        answer:"onCreate()"
    },
    {
        question: "Which class in Android provides access to a SQLite database?",
        options: [
            "SQLiteDatabase",
            "SQLiteOpenHelper",
            "SQLiteQueryBuilder",
            "SQLiteStatement"],
        answer: "SQLiteDatabase"
    },
    {
        question: "Which layout in Android arranges its children into a single column or row?",
        options: [
            "RelativeLayout",
            "ConstraintLayout",
            "LinearLayout",
            "FrameLayout"],
        answer: "LinearLayout"
    },
    {
        question: "Which method is used to retrieve a view in an activity by its ID?",
        options: [
            "getViewById()",
            "retrieveViewById()",
            "findViewById()",
            "obtainViewById()"
        ],
        answer: "findViewById()"
    },
    {
        question: "Which Android component is used to display web content within an application?",
        options: [
            "TextView",
            "WebView",
            "ImageView",
            "ScrollView"
        ],
        answer: "WebView"
    },
    {
        question: "Which method is called when an activity is stopped and might be killed by the system?",
        options: [
            "onStop()",
            "onDestroy()",
            "onPause()",
            "onEnd()",],
        "answer": "onStop()"
    },        
    {
        question: "Which component is used to display a dialog box on the screen?",
        options: [
            "DialogFragment",
            "DialogBox",
            "AlertDialog",
            "MessageBox",
        ],
        answer: "AlertDialog"
    },
    {
        question: "Which class in Android is responsible for managing access to a central repository of data?",
        options: [
            "ContentProvider",
            "SQLiteOpenHelper",
            "CursorLoader",
            "SharedPreferences",
        ],
        answer: "ContentProvider"
    },
    {
        question: "Which method is used to declare and initialize an array in Java?",
        options: [
            "initializeArray()",
            "createArray()",
            "newArray()",
            "arrayInitialization()"
        ],
        answer: "newArray()"
    },
    {
        question: "Which method is used to execute a block of code repeatedly in Java?",
        options: [
            "loop()",
            "execute()",
            "run()",
            "for()"
        ],
        answer: "for()"
    },
    {
        question: "In Android, which permission is required to access the internet?",
        options: [
        "android.permission.ACCESS_NETWORK_STATE",
        "android.permission.INTERNET",
        "android.permission.ACCESS_WIFI_STATE",
        "android.permission.READ_EXTERNAL_STORAGE"
        ],
        answer: "android.permission.INTERNET"
    },
    {
        question: "Which method is used to access a SharedPreferences file in Android?",
        options: [
        "getSharedPreferences()",
        "openSharedPreferences()",
        "loadSharedPreferences()",
        "accessSharedPreferences()"
        ],
        answer: "getSharedPreferences()"
    },        
    {
        question: "Which component in Android is responsible for sending and receiving broadcast messages?",
        options: [
        "BroadcastReceiver",
        "IntentService",
        "ContentProvider",
        "Service"
        ],
        answer: "BroadcastReceiver"
    },
    {
        question: "What is the correct way to check if a string contains a substring in Java?",
        options: [
        "str.contains(substring)",
        "str.indexOf(substring) != -1",
        "str.startsWith(substring)",
        "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "Which method is used to round a floating-point number to the nearest integer in Java?",
        options: [
        "Math.floor()",
        "Math.round()",
        "Math.ceil()",
        "Math.trunc()"
        ],
        answer: "Math.round()"
    },
    {
        question: "What is the purpose of the 'volatile' keyword in Java?",
        options: [
        "It ensures that a variable is not modified by multiple threads simultaneously",
        "It ensures that a variable is always initialized with a default value",
        "It ensures that a variable is stored in a cache for faster access",
        "It ensures that a variable is not modified by the compiler optimizations"
        ],
        answer: "It ensures that a variable is not modified by the compiler optimizations"
    },
    {
        question: "What is the correct way to concatenate two strings in Java?",
        options: [
        "str1.concat(str2)",
        "str1.append(str2)",
        "str1 + str2",
        "str1.join(str2)"
        ],
        answer: "str1 + str2"
    },
    {
        question: "What is the correct way to check if a string is empty in Java?",
        options: [
        "str.equals("")",
        "str.isEmpty()",
        "str.length() == 0",
        "All of the above"
        ],
        answer: "All of the above"
    },
    {
        question: "In Android development, what does the term 'APK' stand for?",
        options: ["Android Package Kit",
         " Application Package Kit", 
         "Android Program Kit", 
         "Application Program Kit"],
        answer: "Android Package Kit"
    }];

    // Add more questions here


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById("score"); 
const repeatQuiz = document.getElementById("repeat");

var currentQuestionIndex = 0;
var score = 0;
var numQuestion = 0;
var randomNumbers = [];

function startQuiz() {
    repeatQuiz.textContent = '';
    repeatQuiz.style.display = "none";
    nextButton.style.display = 'block';
    showQuestion();
    nextButton.addEventListener('click', showNextQuestion);
}

function refresh() {
    numQuestion = 0;
    scoreElement.textContent="";
    scoreElement.style.textAlign= "left";
    resultElement.style.textAlign = "left";
    currentQuestionIndex = 0;
    score = 0;
    resultElement.textContent = "";
    nextButton.textContent = "Next";
    nextButton.disabled = true;
    startQuiz();
}

function showQuestion() {
    let x = 0;
    currentQuestionIndex = getQuestionIndex();
    if(randomNumbers.length == questions.length){
        randomNumbers = [];
    }
    while(x == 0){
        if(randomNumbers.includes(currentQuestionIndex)){
            currentQuestionIndex = getQuestionIndex();
        } else {
            randomNumbers.push(currentQuestionIndex);
            x = 1;
        }
    }
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.classList.add('option');
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(optionElement);
    });
    numQuestion++;
}

function getQuestionIndex(){
    const randomNum = Math.floor(Math.random() * questions.length);
    return randomNum;
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    currentQuestionIndex++;
    if (selectedAnswer === currentQuestion.answer) {
        resultElement.textContent = "Correct!";
        score++;
    } else {
        resultElement.textContent = `Wrong! The correct answer is ${currentQuestion.answer}`;
    }
    scoreElement.textContent = `Score: ${score}/${numQuestion}`;
    nextButton.disabled = false;
    document.querySelectorAll('.option').forEach(option => option.disabled = true);
}

function showNextQuestion() {
    if (numQuestion < 5) {
        showQuestion()
        resultElement.textContent = '';
        nextButton.disabled = true;
        document.querySelectorAll('.option').forEach(option => option.disabled = false);
    } else {
        endQuiz();
    }
}

function endQuiz() {
    nextButton.style.display = 'none';
    scoreElement.textContent = '';
    questionElement.textContent = '';
    optionsElement.textContent = '';
    resultElement.textContent = "Quiz ended."
    scoreElement.textContent= `Your score: ${score}/${numQuestion}`;
    resultElement.style.textAlign = "center";
    scoreElement.style.textAlign= "center";
    repeatQuiz.style.display = "block";
    repeatQuiz.textContent = "Take Quiz";
    repeatQuiz.addEventListener('click', refresh);
}

refresh()