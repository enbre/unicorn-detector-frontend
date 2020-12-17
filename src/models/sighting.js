const URL = "http://192.168.0.133:4000"


export default class SightingModel {
  static all = () => {
    return fetch(`${URL}/sightings`,{
    }
    ).then(res => res.json())
  }

  static create(sightingData) { 
    return fetch(`${URL}/sightings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sightingData)
    }).then(res => res.json())
  }
}