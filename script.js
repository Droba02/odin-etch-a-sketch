
document.addEventListener('load', createAGrid()
)

function createAGrid(){

    let dimension = Number(document.querySelector('#grid-dimension').value)

    if(dimension < 16){
        dimension = 16;
    }

    let container = document.querySelector('#container');
    container.innerHTML = '';

    for(let i = 0;i < dimension;i++ ){
        let squareRow = document.createElement('div');
        squareRow.classList.add('square-row');
        container.appendChild(squareRow);

        for(let i=0; i < dimension;i++){
            let square = document.createElement('div')
            square.classList.add('square')

            square.addEventListener('mouseover', ()=>
            {
                square.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);;
            })
            squareRow.appendChild(square);
        }
    }
}