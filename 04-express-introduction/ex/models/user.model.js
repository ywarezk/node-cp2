

class User {
    
    /**
     * 
     * @param {{id: number, firstName: string, lastName: string} } json 
     */
    constructor(json) {
        // this.id = json.id;
        // this.firstName = json.firstName;
        // this.lastName = json.lastName;

        Object.assign(this, json);
    }
}

module.exports = User;