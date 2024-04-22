const lists = document.getElementById("lists")

document.addEventListener('DOMContentLoaded', function() {
  const colorPicker = document.getElementById('colorPicker');
  const saveButton = document.getElementById('saveButton');

  saveButton.addEventListener('click', () => {
    const color = colorPicker.value;
    const li = document.createElement("li")
    li.textContent=color
    lists.append(li)
    
    navigator.clipboard.writeText(color)
    .then(()=>{
      console.log(color);
    }).catch((error)=>{
      console.error(error);
    })
  });
});
