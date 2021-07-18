// //server
// export const getData = async () => {
//     const response = await fetch('https://rn-cysticfibrosis-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
//         method: 'GET',//by default
//         headers: {'Content-Type': 'application/json'},
//         // body: JSON.stringify({name})
//     })
//     const data = await response.json()
//     console.log('DATA', data)
//     return data;
// }
//
// export const setData = async ({id, email, pass, phone, position_x, position_y, user}) => {
//     const response = await fetch('https://rn-cysticfibrosis-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
//         method: 'POST',//by default
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({
//             id,
//             date: Date.now().toString(),
//             email,
//             pass,
//             phone,
//             position_x,
//             position_y,
//             user,
//         })
//     })
//     const data = await response.json()
//     console.log('DATA', data)
//     return data;
// }
//
