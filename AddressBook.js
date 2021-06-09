
var regex_for_name = new RegExp('[A-Z]{1}[a-z]{3,}');
var regex_for_address = new RegExp('[A-Z]{1}[a-z]');
var regex_for_zip = new RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
var regex_for_phoneNumber = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
var regex_for_email = new RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');

class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor (...params) {
        this.setfirstName = params[0];
        this.setlastName = params[1];
        this.setaddress = params[2];
        this.setcity = params[3];
        this.setstate = params[4];
        this.setzip = params[5];
        this.setphoneNumber = params[6];
        this.setemail = params[7];
    }

    get getfirstName() {
        return this.firstName;
    }

    set setfirstName(firstName) {
        if (regex_for_name.test(firstName)) {
            this.firstName = firstName;
        }
        else {
            throw "Invalid First Name";
        }
    }

    get getlastName() {
        return this.lastName;
    }

    set setlastName(lastName) {
        if (regex_for_name.test(lastName)) {
            this.lastName = lastName;
        }
        else {
            throw "Invalid Last Name";
        }
    }

    get getaddress() {
        return this.address;
    }

    set setaddress(address) {
        if (regex_for_address.test(address)) {
            this.address = address;
        }
        else {
            throw "Invalid Address";
        }
    }
        
    get getcity(){ 
        return this.city; 
    }

    set setcity(city){ 
        if(regex_for_address.test(city)){
            this.city = city;
        }
        else{
            throw "Invalid City";
        }
    }

    get getstate(){
         return this.state;
     }

    set setstate(state){
        if(regex_for_address.test(state)){
            this.state = state;
        }
        else{
            throw "State is Incorrect";
        }
    }

    get getzip(){ 
        return this.zip; 
    }

    set setzip(zip){
        if(regex_for_zip.test(zip)){
            this.zip = zip;
        }
        else{
            throw "Invalid Zip";
        }
    }

    get getphoneNumber(){ 
        return this.phoneNumber;
     }

    set setphoneNumber(phoneNumber){
        if(regex_for_phoneNumber.test(phoneNumber)){
            this.phoneNumber = phoneNumber;
        }
        else{
            throw "Phone Number is Incorrect";
        }
    }

    get getemail(){
         return this.email;
    }

    set setemail(email){
        if(regex_for_email.test(email)){
            this.email = email;
        }
        else{
            throw "Invalid Email";
        }
    }

        
    toString() {
        return "FirstName = " + this.firstName + 
                " \nLastName = " + this.lastName + 
                " \nAddress = " + this.address + 
                " \nCity = " + this.city + 
                " \nState = " + this.state + 
                " \nZip = " + this.zip + 
                " \nPhoneNumber = " + this.phoneNumber + 
                " \nEmail = " + this.email;
    }

}

let addressBook = [];

    let contact1 = new AddressBook("Kailashnath", "Vishwakarma", "New Delhi", "Delhi", "New Delhi", 110096, 9205267464, "nathkailash2020@gmail.com");
    let contact2 = new AddressBook("Mountain", "King", "Faizabad", "Ayodhya", "Uttar Pradesh", 224001, 9794445197, "baba@gmail.com");
    let contact3 = new AddressBook("Agyat", "Singh", "Dream City", "Colambia", "United-State", 400031, 1234567890, "agyat@hotmail.com");

    addressBook.push(contact1);
    addressBook.push(contact2);
    addressBook.push(contact3);
    console.log(addressBook);

function addContact() {
    let contact = new AddressBook("Ravindra", "Nishad", "Naipura", "Ayodhya", "Uttar Pradesh", 224001, 8080808080, "ravindra@gmail.com");
    let contact_check = addressBook.map(name => name.getfirstName === contact.getfirstName);
    if(contact_check.includes(true)) {
        console.log("Contact already exists in AddressBook");
    }
    else{
        addressBook.push(contact);
    }
    console.log(addressBook);
}

function editContact() {
    if (addressBook.find(name => name.firstName == "Agyat")) {
        let id = addressBook.findIndex(name => name.firstName == "Agyat");
        addressBook[id].setfirstName = "Gyat";
        console.log("Contacts after Editing are : ");
        console.log(addressBook);
    }
    else{
        console.log("This Contact is not available in the AddressBook");
    }
}

function deleteContact() {
    if (addressBook.find(name => name.firstName == 'Gyat')) {
        let id = addressBook.findIndex(name => name.firstName == 'Gyat');
        addressBook.splice(id,1)
        console.log("After deletion contacts available are : " );
        console.log(addressBook);
        console.log("Size after deletion is : " + count());
    }
}

function count() {
    let contact_count = addressBook.map(ele => typeof ele.getfirstName === 'string');
    let size = contact_count.reduce((previous, current) => previous + current);
    return size;
}

function search_by_city(){
    let search = addressBook.filter(ele => ele.city == 'Ayodhya');
    if (search != null){
        console.log("Searched Contacts in Ayodhya");
    }
}

function search_by_state(){
    let search = addressBook.filter(ele => ele.state == 'United-State');
    if (search != null) {
        console.log("Searched Contacts in United-State");
    }
}
//UC12-serch by Zip using filter
function search_by_zip(){
    let search = addressBook.filter(ele => ele.zip == 400031);
    if (search != null) {
        console.log("Searched Contacts in zip 400031");
    }
}
    function count_by_city() {
        let city_count = addressBook.map(ele => ele.city === 'New Delhi');
        let size_city = city_count.reduce((prev, curr) => prev + curr);
        console.log("Number of Contacts in city New Delhi are : " + size_city);
    }
    
    function count_by_state() {
        let state_count = addressBook.map(ele => ele.state === 'Uttar Pradesh');
        let size_state = state_count.reduce((prev, curr) => prev + curr);
        console.log("Number of Contacts in state Uttar Pradesh are : " + size_state);
    }

    function sort_contacts(){
        console.log("Contacts after sorting alphabetically : ");
        console.log(addressBook.sort());
    }
    
    function run_addressbook(){
        addContact();
        editContact();
        deleteContact();
        search_by_city();
        search_by_state();
        search_by_zip();
        count_by_city();
        count_by_state();
        sort_contacts();
    }
    
    run_addressbook();