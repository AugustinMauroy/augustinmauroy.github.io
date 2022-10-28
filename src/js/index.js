const date_naissance = new Date(2006, 05, 18)

function get_age(){
        var diff = Date.now() - date_naissance.getTime();
        var age = new Date(diff); 
        var result = Math.abs(age.getUTCFullYear() - 1970);
        console.log(result);
        return result
};

function age(){
    document.getElementById("age").innerHTML = get_age()
}