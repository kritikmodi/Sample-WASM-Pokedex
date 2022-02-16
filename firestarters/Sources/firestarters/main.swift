import Suborbital

class Firestarters: Suborbital.Runnable {
    func run(input: String) -> String {
        if(input=="Kanto"){
        return "Your starter is Charmander!\n\n"}
        else if(input=="Johto"){
        return "Your starter is Cyndaquil!\n\n"}
        else if(input=="Hoenn"){
        return "Your starter is Chimchar!\n\n"}
        else{
        return "Region not listed ye!\n\n"}
    }
}

Suborbital.Set(runnable: Firestarters())
