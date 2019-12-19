export const getImages = (response, request) => {
    response.send({
        "imageURIs": [
          "Ello"
        ],
        "statusCode": 200
      })
}

export const postImages = (response, request) => {
    response.send({
        "imageURI": "Testing",
        "statusCode": 200
      })
}