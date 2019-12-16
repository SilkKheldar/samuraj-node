const users = [
  { id: 1, name: "Adam" },
  { id: 2, name: "Ewa" },
  { id: 3, name: "Teodor" },
  { id: 4, name: "Matylda" }
];

module.exports = {
  showUsers() {
    const names = users.map(user => user.name);
    console.log("Nasi użytkownicy to:");
    names.forEach(name => console.log(name));
  },
  showUserObj(id) {
    console.log("Szukany użytkownik to:");
    const user = users.find(user => id === user.id);
    console.log(user);
  },
  userListLength: users.length
};
