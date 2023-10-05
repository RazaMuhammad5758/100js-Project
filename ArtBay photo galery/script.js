const AllBtns = document.querySelectorAll('.AllBtns')
const wraper = document.querySelector('.img');


window.addEventListener("keydown", async (e) => {
    if (e.key === 'Enter') {
        const input = document.querySelector('#input');
        const reselts = document.querySelector('.reselts'); // Added this line to select the 'reselts' div

        const getData = async () => {
            let page = 1;
            let query = input.value;
            const url = `https://api.unsplash.com/search/photos/?page=${page}&query=${query}&client_id=20XUgpS97eJOnP484SVASAwbYy-ABwoMDDuuG-8B3E8`;
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                
                if (data && data.results) {
                    reselts.innerHTML = "";
                    data.results.forEach((result) => {
                        let img = result.links.download;
                    
                        reselts.innerHTML += `
                            <div class="row">
                                <img src="${img}" alt="">
                                <a href="${img}?format=jpg" download>Download</a>


                            </div>
                        `;
                    });
                }
            } catch (error) {
                console.error(error);
            }
        }

        getData();
    }
});

// AllBtns.forEach((div)=>{
//     div.addEventListener("click",(e)=>{
//         query = e.target.id
//         // console.log(category);
//         // console.log("vclaldj");
//         results.innerHTML=""
//         getData()
//     })
// })