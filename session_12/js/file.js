var userNumber = prompt('Enter Number of users');
var users =[];
function addUser(){
    var name = prompt('Enter User Name')
    var id =prompt('Enter User id')
    var temp = users.find(item => item.id == id)
    while (temp!=undefined){
        console.log('Chose another id')
        var id =prompt('Enter User id')
        var temp = users.find(item => item.id == id)
    }
    var balance = prompt('Enter User Balance')
    users.push({name:name, id:id, balance:balance})
}
for (let index = 0; index < userNumber; index++) {
    addUser()
}
console.table(users)
function editUserBalanceById (){
    var id =prompt('Enter User id to edit it`s balnce')
    var index = users.findIndex(item => item.id == id)
    while (index== (-1)){
        console.log('This user is not found,please try again ')
        var id =prompt('Enter User id')
        var index = users.findIndex(item => item.id == id)
    }
    var newBalance = prompt('Enter the new Balance')
    users[index].balance =newBalance
}
editUserBalanceById ()
console.table(users)
function deleteUserById(){
    var id =prompt('Enter User id to delete')
    var index = users.findIndex(item => item.id == id)
    while (index== (-1)){
        console.log('This user is not found,please try again ')
        var id =prompt('Enter User id')
        var index = users.findIndex(item => item.id == id)
    }
    users.splice(index,1)
}
deleteUserById()
console.table(users)