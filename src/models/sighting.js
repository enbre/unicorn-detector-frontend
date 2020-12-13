const URL = "http://192.168.0.133:4000"


export default class SightingModel {
  static all = () => {
    return fetch(`${URL}/sightings`,{
      // credentials: 'include'
    }
    ).then(res => res.json())
  }

  static create(sightingData) { 
    return fetch(`${URL}/sightings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // credentials: "include",
      body: JSON.stringify(sightingData)
    }).then(res => res.json())
  }

  // static update = async (sighting) => {
    
  //   const res = await fetch(`${URL}/sightings/${sighting.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     credentials: 'include',
  //     body: JSON.stringify(sighting)
  //   }).then(res => res.json())
  // }

  // static delete = (sightingId) => {
  //   return fetch(`${URL}/sightings/${sightingId}`, {
  //     method: "DELETE",
  //     credentials: 'include'
  //   })
  //     .then(res => res.json())
  // }

}