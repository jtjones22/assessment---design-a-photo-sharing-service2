export const getImages = (request, response) => {
    response.send({
        "imageURIs": [
          "Ello"
        ],
        "statusCode": 200
      })
}

export const postImages = (request, response) => {
    response.send({
        "imageURI": "Testing",
        "statusCode": 200
      })
}