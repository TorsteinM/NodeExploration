class Main {
    constructor(name) {
        super()
        this.myName = name ? name : 'Torstein'
    }
    regName() {
        try {
            let element = document.getElementById('root')
            element.innerHTML = this.myName
        } catch(e){console.log("Name registering failed: " + e)}
    }
}

export default Main