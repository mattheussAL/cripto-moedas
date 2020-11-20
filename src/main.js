const keyAPI = { key: '3b6224c0-8c2c-4c20-b4c5-51977568d10a'}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + keyAPI.key)
.then(res => {
  if(!res.ok) throw new Error(`Erro ao executar a requisição, status ${res.status}`);

  return res.json();
})
.then(api => {
  let text = '';

  for(let i = 0; i < 5; i++){
    text += `
      <div class="media">
        <img src="img/coin.png" alt="coin" class="align-self-center mr-3" width="100" height="60" />
      
        <div class="media-body">
          <h5 class="met-2">${api.data[i].name}</h5>
          <p>${api.data[i].symbol}</p>
        </div>
      </div>
    `;
    
    document.getElementById('coins').innerHTML = text;
  }
})
.catch(err => { console.log(err.message) });









