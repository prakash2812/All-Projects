let available_slots = []
// list of vehicles details 
const vehicleFunctions = {
    registrationNo: '',
    color: '',
    slot: ''
}

// entered vehicle details along with token Id
const entryVehicle = (resNo, color, slotNo) => {
    let tokenNo = Math.floor(Math.random() * 100000)
    return {
        ...vehicleFunctions,
        tokenId: tokenNo,
        registrationNo: resNo,
        color,
        slot: slotNo
    }

}

// Fill the Available Slots with entered vehicle data
const parkingVehicle = (resNo, color, slotNo) => {
    available_slots.push(entryVehicle(resNo, color, slotNo))
}

// List of exit vehicle and updated the available slot after exit
const exitVehicle = (tokenNumber) => {
    const exitData = available_slots.filter(item => item.tokenId !== tokenNumber)
    const exitVehicle = available_slots.find(item => item.tokenId === tokenNumber)
    available_slots = exitData
    return exitVehicle
}

//  sort the vehicle registration no by using vehicle color as input parameter
const registeredNoByColor = (...color) => {
    return color.reduce((prev, value) => {
        prev[value] = available_slots.filter(item => item.color === value).map(item => item.registrationNo)
        return prev
    }, {})
}

//  sort the vehicle slot number by using vehicle color as input parameter
const slotNoByColor = (...color) => {
    return color.reduce((prev, value) => {
        prev[value] = available_slots.filter(item => item.color === value).map(item => item.slot)
        return prev
    }, {})
}

// sort the parking slot number by using vehicle registration no as input
const slotNoByRegistrationNo = (...regNo) => {
    return regNo.reduce((prev, value) => {
        prev[value] = available_slots.find(item => item.registrationNo === value).slot
        return prev
    }, {})
}



// adding the parking slots vehicle
parkingVehicle('Abc123', "black", 1)
parkingVehicle('XYZ123', "red", 2)

parkingVehicle('RX23', "red", 3)
parkingVehicle('KA_12', "yellow", 4)

parkingVehicle('TS_543', "ble", 5)
parkingVehicle('XYZ123', "red", 6)

parkingVehicle('Abc123', "black", 7)
parkingVehicle('XY123', "yellow", 8)

console.log('================= list of entered vehicles ==========================')
console.log(available_slots)


console.log('================= list of exit vehicles ==========================')
console.log(exitVehicle(available_slots[0].tokenId))
console.log(exitVehicle(available_slots[3].tokenId))

console.log('--------------- sort the vehicle registration no by using vehicle color as input parameter --------------------')
console.log(registeredNoByColor('yellow', 'red'))

console.log('------------------ sort the vehicle slot number by using vehicle color as input parameter -------------------')
console.log(slotNoByColor('yellow', 'red'))

console.log("======================== sort the parking slot number by using vehicle registration no as input ======================")
console.log(slotNoByRegistrationNo('Abc123', 'RX23'))
