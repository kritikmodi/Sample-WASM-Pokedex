import Suborbital

class FetchSwift: Suborbital.Runnable {
    func run(input: String) -> String {
        let getURL = "https://pokeapi.co/api/v2/pokemon/" + input
        let postURL = "https://92447e93-5048-4e7b-b4ad-cdc189cf9503.mock.pstmn.io/postman/pokeget"
        let body = Suborbital.HttpGet(url: getURL)
        let resp = Suborbital.HttpPost(url: postURL, body: body)+"\n"
        return resp
    }
}

Suborbital.Set(runnable: FetchSwift())