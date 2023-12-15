function saveData() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;

    if (title && description && date) {
        const data = {
            title: title,
            description: description,
            date: date
        };
        let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
        savedData.push(data);
        localStorage.setItem('savedData', JSON.stringify(savedData));
        alert('Data saved successfully!');
    } else {
        alert('Please fill in all fields!');
    }
}
function deleteData() {
    localStorage.removeItem('savedData');
    document.getElementById('displayArea').innerHTML = '';
    alert('All saved data deleted!');
}
function displayData() {
    const selectedDate = document.getElementById('pickDate').value;
    let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    let displayContent = '';

    savedData.forEach((item, index) => {
      if (item.date === selectedDate) {
        displayContent += `<div>`;
        displayContent += `<h3>${item.title}</h3>`;
        displayContent += `<p>${item.description}</p>`;

        displayContent += `<button onclick="deleteItem(${index})">Delete</button>`;
        displayContent += `<hr>`;
        displayContent += `</div>`;
      }
    });
    document.getElementById('displayArea').innerHTML = displayContent;

    // Highlighting the day
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const selectedDay = new Date(selectedDate).getDay();
    const dayLinks = document.querySelectorAll('.container a');
    dayLinks.forEach(link => {
      link.style.backgroundColor = '';
    });
    dayLinks[selectedDay].style.backgroundColor = 'yellow';
  }
function deleteItem(index) {
    let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    savedData.splice(index, 1);
    localStorage.setItem('savedData', JSON.stringify(savedData));
    displayData();
    alert('Item deleted successfully!');
}
