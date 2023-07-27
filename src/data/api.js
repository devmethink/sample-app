export default class Api {
  // define headers for api call - used in getData function
  static getHeaders = () => {
    return {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  };

  static getData = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((res) => {
          // If response is not ok, throw an error
          if (!res.ok) throw res;
  
          return res.json();
        })
        .then(
          (result) => {
            resolve(result);
          },
          (err) => {
            // Handle errors here
            reject(err);
          }
        );
    });
  };
  
}
