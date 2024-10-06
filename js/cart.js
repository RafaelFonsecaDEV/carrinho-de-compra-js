 // para a criaçao do site , no js e necssario criar variavel e uma funçao , variavel sera para colocar os valore de acordo com html
// a funçao sera para adionar e somar valor e quantidade  com isso sera colocado e total de
//var  valorTotal  = [0,0];
//var valorProduto = [50.00,30.00];
//var qtd = [0,0];

//function adicionarItem(item){
   
   // var quantidade = document.getElementById('quantidade' + item);
   // var total = document.getElementById("total" + item);
   // qtd [item] +=1;
   // valorTotal[item] = Number.parseFloat(valorProduto(item)) * qtd[item];
   // quantidade.innerHTML = qtd[item].toFixed(2); // "to fixed"serve para colocar duas casas decimais



//}




//let precos = [10.00, 30.00];
//let quantidades = [0, 0];

//function adicionarItem(produtoIndex) {
   // quantidades[produtoIndex]++;
   // document.getElementById('quantidade' + produtoIndex).innerText = quantidades[produtoIndex];
   // precos[produtoIndex] = Number.parseFloat(precos(produtoIndex)) * quantidades[produtoIndex];
   // quantidade.innerHTML = quantidades[produtoIndex];

   // atualizarTotal.innerHTML = precos[produtoIndex].toFixed(2);
//}

let precos = [10.00, 30.00];  // Preços unitários
let quantidades = [0, 0];      // Quantidade de cada produto

function adicionarItem(produtoIndex) {
    // Incrementa a quantidade do produto
    quantidades[produtoIndex]++;
    
    // Atualiza a quantidade na interface
    document.getElementById('quantidade' + produtoIndex).innerText = quantidades[produtoIndex];
    
    // Calcula o total para o produto específico
    let totalProduto = precos[produtoIndex] * quantidades[produtoIndex];
    
    // Atualiza o total para o produto na interface
    document.getElementById('total' + produtoIndex).innerText = totalProduto.toFixed(2);
    
    // Atualiza o subtotal (soma de todos os produtos)
    atualizarSubtotal();
}

function atualizarSubtotal() {
    // Calcula o subtotal somando os totais de todos os produtos
    let subtotal = quantidades.reduce((acc, quantidade, index) => acc + (quantidade * precos[index]), 0); 
    //quantidades.reduce(): O método reduce percorre todos os elementos da array quantidades e acumula o resultado. Ele faz isso chamando a função que passamos como argumento para cada elemento.
    // acc: Acumulador que guarda o valor total calculado até o momento.
    //quantidade: A quantidade de unidades de um produto específico.
   //index O índice atual do produto.
    
    // Atualiza o subtotal na interface
    document.getElementById('valorTotalCompra').innerText = subtotal.toFixed(2);
}

function removerItem (produtoIndex){

    if(quantidades[produtoIndex] > 0){  // maior que 0
        quantidades[produtoIndex] -- ; // serve para diminuir quando item for maior que 0
        document.getElementById('quantidade'  + produtoIndex).innerText = quantidades[produtoIndex];
        let totalProduto = precos[produtoIndex] * quantidades[produtoIndex];
        atualizarSubtotal()
    }
}