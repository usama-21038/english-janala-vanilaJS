
const loadLessions=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then(res=>res.json())
    .then(data=>displayLession(data.data));
}
const displayLession=(lessions)=>{
//    1/  get the container
    const levelContainer = document.getElementById('lavel-container');
    levelContainer.innerHTML = '';
    // 2/ iterate lessons
    for (const lession of lessions) {
        // 3/ create element node and set innerHTML
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
            <button onClick=loadLevelWord(${lession.id}) class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i> Lession-${lession.level_no}</button>
        `;
        // 4/ append into container
        levelContainer.appendChild(createDiv);
    }

}
const loadLevelWord=(id)=>{
    console.log(id);
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data));
}

const displayLevelWord=(words)=>{
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = '';
    for (const word of words) {
        const createDiv1 = document.createElement('div');
        createDiv1.innerHTML = `
            <div class="card bg-base-100 shadow-xl my-5">
                <div class="card-body">
                    <h2 class="card-title">${word.word}</h2>
                    <p>${word.meaning}</p>
                </div>
            </div>
        `;
        wordContainer.append(createDiv1);
    }
}



loadLessions();