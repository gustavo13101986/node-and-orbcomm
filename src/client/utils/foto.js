
////////////////////////////////////////// FOTO BASICA ////////////////////////////////////////
async function fotoBasica() {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          access_id,
          password,
          messages:[{
              DestinationID,
              UserMessageID:10,
              RawPayload:[128,1]
            }]
        }),
        
        
    });
    const content = await rawResponse.json();
  
    console.log(content);
  }

  ///////////////////////////////////############################//////////////////////////////////

  ////////////////////////////////////////// FOTO CENTRAL ////////////////////////////////////////
async function fotoCentral() {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        access_id,
        password,
        messages:[{
            DestinationID,
            UserMessageID:10,
            RawPayload:[128,2]
          }]
      }),
      
      
  });
  const content = await rawResponse.json();

  console.log(content);
}

///////////////////////////////////############################//////////////////////////////////

  ////////////////////////////////////////// FOTO DERECHA ////////////////////////////////////////
  async function fotoDerecha() {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          access_id,
          password,
          messages:[{
              DestinationID,
              UserMessageID:10,
              RawPayload:[128,3]
            }]
        }),
        
        
    });
    const content = await rawResponse.json();
  
    console.log(content);
  }
  
  ///////////////////////////////////############################//////////////////////////////////

    ////////////////////////////////////////// FOTO IZQUIERDA ////////////////////////////////////////
async function fotoIzquierda() {
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        access_id,
        password,
        messages:[{
            DestinationID,
            UserMessageID:10,
            RawPayload:[128,4]
          }]
      }),
      
      
  });
  const content = await rawResponse.json();

  console.log(content);
}

///////////////////////////////////############################//////////////////////////////////

  ////////////////////////////////////////// FOTO CERCA ////////////////////////////////////////
  async function fotoCerca() {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          access_id,
          password,
          messages:[{
              DestinationID,
              UserMessageID:10,
              RawPayload:[128,5]
            }]
        }),
        
        
    });
    const content = await rawResponse.json();
  
    console.log(content);
  }
  
  ///////////////////////////////////############################//////////////////////////////////

  ////////////////////////////////////////// FOTO BASICA ////////////////////////////////////////


///////////////////////////////////############################//////////////////////////////////

  function foto_cerca(val) {
    var txt;
    if (confirm("Deseas confirmar petición!")) {
      txt = "You pressed OK!";
      if(val == 1){
        fotoBasica()
      }
      else if(val==2){
        fotoCentral()
      }
      else if(val==3){
        fotoDerecha()
      }
      else if(val==4){
        fotoIzquierda()
      }
      else if(val==5){
        fotoCerca()
      }
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }

  export {
    foto_cerca
  }