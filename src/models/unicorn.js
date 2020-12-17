const URL = "http://192.168.0.133:4000"


export default class UnicornModel {
  static all = () => {
    return fetch(`${URL}/unicorns`
    ).then(res => res.json())
  }
 
  static show(unicornId) { 
    return fetch(`${URL}/unicorns/${unicornId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(res => res.json())
  }

}