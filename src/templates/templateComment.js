export const modelComment = (name, photo, date, comment) => `<div class="new-Commentary">
    <div>
    <img src="${photo}" class = "user" > </div>
    <div>
    <p id="nameUser">${name} </p>  <time datetime="date">${date} </time>
    <textarea class="text-Comment" rows="1" cols="40"> ${comment}</textarea>  </div>
    </div>`;
