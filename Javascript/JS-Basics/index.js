


var users = [
    {
        User: "U1",
        location: "Bangalore",
        designation: "Manager",
        department: "Engg"
    },
    {
        User: "U2",
        location: "Sydney",
        designation: "Manager",
        department: "HR"
    },
    {
        User: "U3",
        location: "London",
        designation: "Manager",
        department: "Admin"
    },
    {
        User: "U4",
        location: "SF",
        designation: "Manager",
        department: "Ops"
    },
    {
        User: "U5",
        location: "Mumbai",
        designation: "Manager",
        department: "Engg"
    },
    {
        User: "U6",
        location: "Bangalore",
        designation: "Developer",
        department: "Engg"
    },
    {
        User: "U7",
        location: "Sydney",
        designation: "Manager",
        department: "HR"
    },
    {
        User: "U8",
        location: "London",
        designation: "Manager",
        department: "Admin"
    },
    {
        User: "U9",
        location: "Bangalore",
        designation: "Manager",
        department: "Ops"
    },
    {
        User: "U10",
        location: "Sydney",
        designation: "Developer",
        department: "Engg"
    },
    {
        User: "U11",
        location: "Bangalore",
        designation: "Manager",
        department: "HR"
    },
    {
        User: "U12",
        location: "SF",
        designation: "Manager",
        department: "Admin"
    },
    {
        User: "U13",
        location: "Mumbai",
        designation: "Manager",
        department: "Engg"
    },
    {
        User: "U14",
        location: "Sydney",
        designation: "Manager",
        department: "HR"
    },
    {
        User: "U15",
        location: "Bangalore",
        designation: "Manager",
        department: "Admin"
    },
    {
        User: "U16",
        location: "Sydney",
        designation: "CEO",
        department: "Engg"
    },
    {
        User: "U17",
        location: "London",
        designation: "Manager",
        department: "HR"
    },
    {
        User: "U18",
        location: "SF",
        designation: "Manager",
        department: "Admin"
    },
    {
        User: "U19",
        location: "Mumbai",
        designation: "Manager",
        department: "Ops"
    },
    {
        User: "U20",
        location: "Mumbai",
        designation: "Manager",
        department: "Engg"
    }
];
console.time('start')
const getUsers = (users, property = "location") => {
    return users.reduce((prev, curr) => {
        let data = new Set();
        // if (`${curr[property]}` in prev) {
        //     return prev
        // }
        users.filter(item => {
            if (item[property] === curr[property]) {
                console.log(item[property], curr[property]);
                console.log("iteration finished");
                return data.add(item.User);
            }
        });

        prev[curr[property]] = [...data];
        return prev;
    }, {});
};
console.log(getUsers(users));
console.timeEnd('start')