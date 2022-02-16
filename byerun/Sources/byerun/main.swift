import Suborbital
import Foundation

class Byerun: Suborbital.Runnable {
    func run(input: String) -> String {
        return "hello " + input
    }
}

Suborbital.Set(runnable: Byerun())
