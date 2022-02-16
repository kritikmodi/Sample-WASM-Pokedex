import Suborbital

class Grassstarters: Suborbital.Runnable {
    func run(input: String) -> String {
        if(input=="Kanto"){
        return "Your starter is Bulbasaur!\n\n"}
        else if(input=="Johto"){
        return "Your starter is Chikorita!\n\n"}
        else if(input=="Hoenn"){
        return "Your starter is Treeko!\n\n"}
        else{
        return "Region not listed yet!\n\n"}
    }
}

Suborbital.Set(runnable: Grassstarters())
