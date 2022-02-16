import Suborbital

class Waterstarters: Suborbital.Runnable {
    func run(input: String) -> String {
        if(input=="Kanto"){
        return "Your starter is Squirtle!\n\n"}
        else if(input=="Johto"){
        return "Your starter is Totodile!\n\n"}
        else if(input=="Hoenn"){
        return "Your starter is Mudkip!\n\n"}
        else{
        return "Region not listed yet!\n\n"}
    }
}

Suborbital.Set(runnable: Waterstarters())
