const URL = "http://192.168.0.133:4000"


export default class UnicornModel {
  static all = () => {
    return fetch(`${URL}/unicorns`,{
      // credentials: 'include'
    }
    ).then(res => res.json())
  }
 
  static show(unicornData) { 
    return fetch(`${URL}/unicorns/${unicornId}`, {
    // return fetch(`${URL}/unicorns/15`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      // credentials: "include",
      body: JSON.stringify(unicornData)
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