
function dropdown(){
    const dropDownMenu = document.querySelector('#dropdown');
    const section = document.querySelector('main > section:nth-of-type(1)');

    if(dropDownMenu.classList.contains('hidden') == true){
        dropDownMenu.classList.remove('hidden');
        dropDownMenu.classList.add('dropdown');
        section.removeAttribute('id');
        section.setAttribute("id", "img");
    }
    else if(dropDownMenu.classList.contains('dropdown') == true) {
        dropDownMenu.classList.remove('dropdown');
        dropDownMenu.classList.add('hidden');
        section.removeAttribute('id');
        section.setAttribute("id", "image");
    }
}

    function handleForm(){
        const info = document.querySelector('form input[name ="search"]').value;
        
        if(info == ''){
            console.log('*Nothing*');
            alert('You just searched  \n *Nothing*' );
            return false;
        }
        alert('You just searched : \n' +' " '+  info +' " ' );
        document.querySelector('form >#search').value = '';
        document.querySelector('form >#search').placeholder="   Search Here...";
        return false;
    }

    const img = document.querySelectorAll('#carousel img');
    function banner(butonul_selectat){

        for (let $li of butonul_selectat.parentElement.parentElement.children) { 
            $li.children[0].classList = '';
        }
        butonul_selectat.classList = 'active';
        let but_index = parseInt(butonul_selectat.attributes['data-selector'].value);
        for (let i = 0; i < carousel.children.length; i++) {
            carousel.children[i].style.transform = 'translateX(' + ((( but_index - 1 ) * 700) +(but_index * 5 - 5)) * -1 + 'px)';
          }
    }
    
    const lis = document.querySelectorAll('.buttons-press li');
    const peuri = document.querySelectorAll('.buttons-press p');
    const parent = document.querySelector('.buttons-press');
    function popular(category) {
        const lis = document.querySelectorAll('.buttons-press li');

        lis.forEach( Li => {
            Li.removeAttribute('id');
        })
        category.setAttribute("id","clicked");
        
        peuri.forEach( p  => {
            // console.log(p);
            p.classList.remove('seen');
        });

        let index ;
        let searching = 0;

        lis.forEach( Li => {
            searching++
            console.log(Li)
            if(Li.getAttribute('id') == 'clicked'){
                console.log('it does');
                index = searching -1
            }
            else if(index != null){
                console.log('already found');
            }
            else{
                // console.log(Li.getAttribute('id'));
                console.log('it doesnt ' + searching);
            }
        } )

        // console.log(index);
        parent.children[lis.length + index].classList.add('seen');
    }

popular(document.querySelector('#clicked'));