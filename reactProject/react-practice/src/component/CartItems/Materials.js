import React from 'react'

const Materials = ({ item }) => {
    console.log('items data', item);
    const { name, quantity, price } = item
    console.log('inside materials');
    return (
        <div>
            <table className>
                <tbody>

                    <tr>
                        <th>Material</th>

                        <th>Quantity</th>
                        <th>Price</th>

                    </tr>

                    <tr>
                        <td>{name}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default Materials
