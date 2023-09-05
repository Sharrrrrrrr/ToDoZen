document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput"); 
    const addTaskButton = document.getElementById("addTask"); 
    const taskList = document.getElementById("taskList"); 
    const historyList = document.getElementById("historyList"); 
    const historyList2 = document.getElementById("historyList2");
    const mainHistoryList = document.getElementById("mainHistoryList"); 
    const favsList = document.getElementById("favslist"); 
    const mainFavsList = document.getElementById("mainFavsList");

    // Adding A Task
    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !=="") {
            // Creating Items Of The Task
            const listItem = document.createElement("li");
            const taskDiv = document.createElement("div");
                taskDiv.classList.add("taskDiv");
            const textDiv = document.createElement("div");
                textDiv.classList.add("textDiv");
            const checkDiv = document.createElement("div");
                checkDiv.classList.add("checkDiv");
            const buttonDiv = document.createElement("div");
                buttonDiv.classList.add("buttonDiv");
            const taskCheck = document.createElement("input");
                taskCheck.type = "checkbox";
                taskCheck.classList.add("checkbox-round");
            const taskTextNode = document.createTextNode(taskText);
            const taskButton = document.createElement("button");
                taskButton.classList.add("bin_button");
            const starimg0 = document.createElement("img");
                starimg0.src = "img/white_star.png";
                starimg0.style.maxWidth = "25px";

                taskButton.appendChild(starimg0);

                checkDiv.appendChild(taskCheck);
                textDiv.appendChild(taskTextNode);
                buttonDiv.appendChild(taskButton);
    
                taskDiv.appendChild(checkDiv);
                taskDiv.appendChild(textDiv);
                taskDiv.appendChild(buttonDiv);
    
                listItem.appendChild(taskDiv);
                taskList.appendChild(listItem);

            // Items for mainHistoryTask
            const mainHistoryItem = document.createElement("li");
            const mainHistoryTaskDiv = document.createElement("div");
                mainHistoryTaskDiv.classList.add("historyTaskDiv");
            const mainHistoryCheckDiv = document.createElement("div");
                mainHistoryCheckDiv.classList.add("checkDiv");
            const mainHistoryTaskCheck = document.createElement("input");
                mainHistoryTaskCheck.type = "checkbox";
                mainHistoryTaskCheck.classList.add("checkbox-round");
                mainHistoryTaskCheck.checked = true;
            const mainHistoryTextDiv = document.createElement("div");
                mainHistoryTextDiv.classList.add("textDiv");
            const mainHistoryTaskTextNode = document.createTextNode(taskText);
            const mainHistoryDeleteDiv = document.createElement("div");
                mainHistoryDeleteDiv.classList.add("buttonDiv");
            const mainHistoryDeleteButton = document.createElement("button");
                mainHistoryDeleteButton.classList.add("bin_button");
            const binimage = document.createElement("img");
                binimage.src = "img/bin.png";
                binimage.style.maxWidth = "25px";
            mainHistoryDeleteButton.appendChild(binimage);

            mainHistoryCheckDiv.appendChild(mainHistoryTaskCheck);
            mainHistoryTextDiv.appendChild(mainHistoryTaskTextNode);
            mainHistoryDeleteDiv.appendChild(mainHistoryDeleteButton);

            mainHistoryTaskDiv.appendChild(mainHistoryCheckDiv);
            mainHistoryTaskDiv.appendChild(mainHistoryTextDiv);
            mainHistoryTaskDiv.appendChild(mainHistoryDeleteDiv);

            mainHistoryItem.appendChild(mainHistoryTaskDiv);
            // mainHistoryList.appendChild(mainHistoryItem);

            // Items for historytasks
            const historyItem = document.createElement("li");
            const historyTaskDiv = document.createElement("div");
                historyTaskDiv.classList.add("LilTaskDiv");
            const historyTextDiv = document.createElement("div");
            const historyTaskTextNode = document.createTextNode(taskText);
            const historyRegDiv = document.createElement("div");
            const historyRegButton = document.createElement("button");
            historyRegButton.classList.add("bin_button");
            const regimage = document.createElement("img");
                regimage.src = "img/sync.png";
                regimage.style.maxWidth = "25px";
            const historyDeleteDiv = document.createElement("div");
            const historyDeleteButton = document.createElement("button");
                historyDeleteButton.classList.add("bin_button");
            const binimage2 = document.createElement("img");
                binimage2.src = "img/bin.png";
                binimage2.style.maxWidth = "25px";
            const imgcontainer = document.createElement("div");
                imgcontainer.classList.add("imgcontainer");

            historyRegButton.appendChild(regimage);
            historyDeleteButton.appendChild(binimage2);

            historyTextDiv.appendChild(historyTaskTextNode);
            historyRegDiv.appendChild(historyRegButton);
            historyDeleteDiv.appendChild(historyDeleteButton);
            imgcontainer.appendChild(historyRegDiv);  
            imgcontainer.appendChild(historyDeleteDiv);            

            historyTaskDiv.appendChild(historyTextDiv);
            historyTaskDiv.appendChild(imgcontainer);

            historyItem.appendChild(historyTaskDiv);
            // historyList.appendChild(historyItem);

            // Items for mainFavsTasks
            const mainfavsItem = document.createElement("li");
            const mainFavsTaskDiv = document.createElement("div");
                mainFavsTaskDiv.classList.add("favsTaskDiv");
            const mainFavsCheckDiv = document.createElement("div");
                mainFavsCheckDiv.classList.add("checkDiv");
            const mainFavsTaskCheck = document.createElement("input");
                mainFavsTaskCheck.type = "checkbox";
                mainFavsTaskCheck.classList.add("checkbox-round");
            const mainFavsTextDiv = document.createElement("div");
                mainFavsTextDiv.classList.add("textDiv");
            const mainFavsTaskTextNode = document.createTextNode(taskText);
            const mainFavsStarDiv = document.createElement("div");
                mainFavsStarDiv.classList.add("buttonDiv");
            const mainFavsStarButton = document.createElement("button");
                mainFavsStarButton.classList.add("bin_button");
            const starimg1 = document.createElement("img");
                starimg1.src = "img/yellow_star.png";
                starimg1.style.maxWidth = "25px";

            mainFavsStarButton.appendChild(starimg1);
            mainFavsCheckDiv.appendChild(mainFavsTaskCheck);
            mainFavsTextDiv.appendChild(mainFavsTaskTextNode);
            mainFavsStarDiv.appendChild(mainFavsStarButton);

            mainFavsTaskDiv.appendChild(mainFavsCheckDiv);
            mainFavsTaskDiv.appendChild(mainFavsTextDiv);
            mainFavsTaskDiv.appendChild(mainFavsStarDiv);

            mainfavsItem.appendChild(mainFavsTaskDiv);
            // mainFavsList.appendChild(mainfavsItem); 

            // Items FOR favsTasks
            const favsItem = document.createElement("lit");
            const favsTaskDiv = document.createElement("div");
                favsTaskDiv.classList.add("LilTaskDiv");
            const favsTextDiv = document.createElement("div");
            const favsTaskTextNode = document.createTextNode(taskText);
            const favsStarDiv = document.createElement("div");
            const favsStarButton = document.createElement("button");
                favsStarButton.classList.add("bin_button");
            const starimg2 = document.createElement("img");
                starimg2.src = "img/yellow_star.png";
                starimg2.style.maxWidth = "25px";

            favsStarButton.appendChild(starimg2);

            favsTextDiv.appendChild(favsTaskTextNode);
            favsStarDiv.appendChild(favsStarButton);

            favsTaskDiv.appendChild(favsTextDiv);
            favsTaskDiv.appendChild(favsStarDiv);

            favsItem.appendChild(favsTaskDiv);
            //favsList.appendChild(favsItem);  

            taskInput.value = "";

            // Marking A Task As Done
            function taskDone() {
                if (taskCheck.checked = true) {
                    taskCheck.checked = false;
                    mainHistoryList.appendChild(mainHistoryItem);
                    historyList.prepend(historyItem);
                    taskList.removeChild(listItem);
                }
            }

            function favsTaskDone() {
                if (mainFavsTaskCheck.checked = true) {
                    mainFavsTaskCheck.checked = false;
                    mainHistoryList.appendChild(mainHistoryItem);
                    historyList.prepend(historyItem);
                    mainFavsList.removeChild(mainfavsItem);
                    favsList.removeChild(favsItem);
                }  
            }

            taskCheck.addEventListener("change",taskDone);
            mainFavsTaskCheck.addEventListener("change", favsTaskDone)

            mainHistoryTaskCheck.addEventListener("change", function() {
                if (!mainHistoryTaskCheck.checked) {
                    mainHistoryTaskCheck.checked = true;
                    mainHistoryList.removeChild(mainHistoryItem);
                    historyList.removeChild(historyItem);
                    taskList.appendChild(listItem);
                }
            });

            // Prioritizing A Task
            function prioritizing() {
                mainFavsList.appendChild(mainfavsItem); 
                favsList.appendChild(favsItem);
                taskList.removeChild(listItem);
            }

            function deprioritizing() {
                mainFavsList.removeChild(mainfavsItem); 
                favsList.removeChild(favsItem);
                taskList.appendChild(listItem);
            }

            taskButton.addEventListener("click", prioritizing);
            mainFavsStarButton.addEventListener("click", deprioritizing);
            favsStarButton.addEventListener("click", deprioritizing);

            // Delete Task
            function deleteTask() {
                mainHistoryList.removeChild(mainHistoryItem);
                imgcontainer.removeChild(historyDeleteDiv);
                historyList2.prepend(historyItem);
            }

            mainHistoryDeleteButton.addEventListener("click", deleteTask);
            historyDeleteButton.addEventListener("click", deleteTask);
            
            function regenTask() {
                if (imgcontainer.contains(historyDeleteDiv)) {
                    mainHistoryTaskCheck.checked = true;
                    mainHistoryList.removeChild(mainHistoryItem);
                    historyList.removeChild(historyItem);
                    taskList.appendChild(listItem);
                } else {
                    imgcontainer.appendChild(historyDeleteDiv);
                    taskList.appendChild(listItem);
                    historyList2.removeChild(historyItem);
                }
            }

            historyRegButton.addEventListener("click", regenTask);

        }

        else {
            alert("Please Enter A Task.")
        }

    });

    // Allow pressing Enter key to add a task
    taskInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            addTaskButton.click();
        }
    });
});