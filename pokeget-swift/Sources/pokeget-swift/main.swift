import Suborbital
import Foundation

class FetchSwift: Suborbital.Runnable {
    func run(input: String) -> String {
        let getURL = "https://pokeapi.co/api/v2/pokemon/" + input
        let JSON = Suborbital.HttpGet(url: getURL)
        //let jsonData = JSON.data(using: .utf8)!
        //let pokemon : Pokemon = try! JSONDecoder().decode(Pokemon.self, from: jsonData)
        return JSON
    }
}

Suborbital.Set(runnable: FetchSwift())