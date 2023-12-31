const elementoRaiz = document.getElementById("root");

let observer = new MutationObserver(function (mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
      mutation.addedNodes.forEach(function (nodo) {
        if (nodo?.classList?.contains("dNqCZv")) {
          const filas  = nodo.querySelectorAll('.FRBJR[aria-label^="fila"]');

          let suma = 0;
          let sumaDolar = 0;
          filas.forEach((fila) => {
            const childNodes = fila.childNodes;
            const monto = childNodes[childNodes.length - 1].innerText;
            const texto = childNodes[childNodes.length - 2].innerText;

            if(texto !== 'SU PAGO EN PESOS' && !monto.includes('US$'))
              suma += Number(monto.replace(/[^\d.,-]/g, '').replace('.', '').replace(',', '.')) 
            
            if(monto.includes('US$'))
              sumaDolar += Number(monto.replace(/[^\d.,-]/g, '').replace('.', '').replace(',', '.')) 
          })
          const total = document.createElement('div');
          total.innerText = `Total: $${suma.toFixed(2)}    Total US$: ${sumaDolar.toFixed(2)}`;
         
           total.style.fontSize = '1.5rem';
           total.style.color = 'red';
         
          nodo.appendChild(total);
        }
      });
    }
  }
});

observer.observe(elementoRaiz, { childList: true, subtree: true });
