
async function getEncendido(url, a_id, pass, des_id, action) {
    console.log(des_id)

    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          access_id: a_id,
          password: pass,
          messages:[{
              DestinationID: des_id,
              UserMessageID:10,
              RawPayload:[128, action]
            }]
        }),
        
        
    });
    const content = await rawResponse.json();
  
    console.log(content);
  }

  export {
    getEncendido
  }